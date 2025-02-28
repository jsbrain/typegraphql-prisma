import { DMMF as PrismaDMMF } from "@prisma/client/runtime";
import path from "path";
import { CompilerOptions, ModuleKind, Project, ScriptTarget } from "ts-morph";
import { ensureInstalledCorrectPrismaPackage } from "../utils/prisma-version";
import generateArgsTypeClassFromArgs from "./args-class";
import {
  argsFolderName,
  crudResolversFolderName,
  enumsFolderName,
  inputsFolderName,
  modelsFolderName,
  outputsFolderName,
  relationsResolversFolderName,
  resolversFolderName,
} from "./config";
import { DmmfDocument } from "./dmmf/dmmf-document";
import generateEnumFromDef from "./enum";
import { generateEnhanceMap } from "./generate-enhance";
import { generateHelpersFile } from "./generate-helpers";
import { generateCustomScalars } from "./generate-scalars";
import { noop } from "./helpers";
import {
  generateArgsBarrelFile,
  generateArgsIndexFile,
  generateEnumsBarrelFile,
  generateIndexFile,
  generateInputsBarrelFile,
  generateModelsBarrelFile,
  generateOutputsBarrelFile,
  generateResolversActionsBarrelFile,
  generateResolversBarrelFile,
  generateResolversIndexFile,
} from "./imports";
import generateObjectTypeClassFromModel from "./model-type-class";
import { GenerateCodeOptions } from "./options";
import generateCrudResolverClassFromMapping from "./resolvers/full-crud";
import generateRelationsResolverClassesFromModel from "./resolvers/relations";
import generateActionResolverClass from "./resolvers/separate-action";
import {
  generateInputTypeClassFromType,
  generateOutputTypeClassFromType,
} from "./type-class";
import { GenerateMappingData } from "./types";

const baseCompilerOptions: CompilerOptions = {
  target: ScriptTarget.ES2019,
  module: ModuleKind.CommonJS,
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  esModuleInterop: true,
};

export default async function generateCode(
  dmmf: PrismaDMMF.Document,
  options: GenerateCodeOptions,
  log: (msg: string) => void = noop,
) {
  ensureInstalledCorrectPrismaPackage();

  const baseDirPath = options.outputDirPath;
  const emitTranspiledCode =
    options.emitTranspiledCode ??
    options.outputDirPath.includes("node_modules");
  const project = new Project({
    compilerOptions: {
      ...baseCompilerOptions,
      ...(emitTranspiledCode && { declaration: true }),
    },
  });
  const resolversDirPath = path.resolve(baseDirPath, resolversFolderName);

  log("Transforming dmmfDocument...");
  const dmmfDocument = new DmmfDocument(dmmf, options);

  log("Generating enums...");
  const datamodelEnumNames = dmmfDocument.datamodel.enums.map(
    enumDef => enumDef.typeName,
  );
  dmmfDocument.datamodel.enums.forEach(enumDef =>
    generateEnumFromDef(project, baseDirPath, enumDef),
  );
  dmmfDocument.schema.enums
    // skip enums from datamodel
    .filter(enumDef => !datamodelEnumNames.includes(enumDef.typeName))
    .forEach(enumDef => generateEnumFromDef(project, baseDirPath, enumDef));
  const emittedEnumNames = [
    ...new Set([
      ...dmmfDocument.schema.enums.map(it => it.typeName),
      ...dmmfDocument.datamodel.enums.map(it => it.typeName),
    ]),
  ];
  const enumsBarrelExportSourceFile = project.createSourceFile(
    path.resolve(baseDirPath, enumsFolderName, "index.ts"),
    undefined,
    { overwrite: true },
  );
  generateEnumsBarrelFile(enumsBarrelExportSourceFile, emittedEnumNames);

  log("Generating models...");
  dmmfDocument.datamodel.models.forEach(model => {
    const modelOutputType = dmmfDocument.schema.outputTypes.find(
      type => type.name === model.name,
    )!;
    return generateObjectTypeClassFromModel(
      project,
      baseDirPath,
      model,
      modelOutputType,
      dmmfDocument,
    );
  });
  const modelsBarrelExportSourceFile = project.createSourceFile(
    path.resolve(baseDirPath, modelsFolderName, "index.ts"),
    undefined,
    { overwrite: true },
  );
  generateModelsBarrelFile(
    modelsBarrelExportSourceFile,
    dmmfDocument.datamodel.models.map(it => it.typeName),
  );

  log("Generating output types...");
  const rootTypes = dmmfDocument.schema.outputTypes.filter(type =>
    ["Query", "Mutation"].includes(type.name),
  );
  const modelNames = dmmfDocument.datamodel.models.map(model => model.name);
  const outputTypesToGenerate = dmmfDocument.schema.outputTypes.filter(
    // skip generating models and root resolvers
    type => !modelNames.includes(type.name) && !rootTypes.includes(type),
  );
  const outputTypesFieldsArgsToGenerate = outputTypesToGenerate
    .map(it => it.fields)
    .reduce((a, b) => a.concat(b), [])
    .filter(it => it.argsTypeName);
  outputTypesToGenerate.forEach(type =>
    generateOutputTypeClassFromType(
      project,
      resolversDirPath,
      type,
      dmmfDocument,
    ),
  );
  const outputsBarrelExportSourceFile = project.createSourceFile(
    path.resolve(
      baseDirPath,
      resolversFolderName,
      outputsFolderName,
      "index.ts",
    ),
    undefined,
    { overwrite: true },
  );
  generateOutputsBarrelFile(
    outputsBarrelExportSourceFile,
    outputTypesToGenerate.map(it => it.typeName),
    outputTypesFieldsArgsToGenerate.length > 0,
  );

  if (outputTypesFieldsArgsToGenerate.length > 0) {
    log("Generating output types args...");
    outputTypesFieldsArgsToGenerate.forEach(async field => {
      generateArgsTypeClassFromArgs(
        project,
        path.resolve(resolversDirPath, outputsFolderName),
        field.args,
        field.argsTypeName!,
        dmmfDocument,
        2,
      );
    });
    const outputsArgsBarrelExportSourceFile = project.createSourceFile(
      path.resolve(
        baseDirPath,
        resolversFolderName,
        outputsFolderName,
        argsFolderName,
        "index.ts",
      ),
      undefined,
      { overwrite: true },
    );
    generateArgsBarrelFile(
      outputsArgsBarrelExportSourceFile,
      outputTypesFieldsArgsToGenerate.map(it => it.argsTypeName!),
    );
  }

  log("Generating input types...");
  dmmfDocument.schema.inputTypes.forEach(type =>
    generateInputTypeClassFromType(
      project,
      resolversDirPath,
      type,
      dmmfDocument,
      options,
    ),
  );
  const inputsBarrelExportSourceFile = project.createSourceFile(
    path.resolve(
      baseDirPath,
      resolversFolderName,
      inputsFolderName,
      "index.ts",
    ),
    undefined,
    { overwrite: true },
  );
  generateInputsBarrelFile(
    inputsBarrelExportSourceFile,
    dmmfDocument.schema.inputTypes.map(it => it.typeName),
  );

  if (dmmfDocument.relationModels.length > 0) {
    log("Generating relation resolvers...");
    dmmfDocument.relationModels.forEach(relationModel =>
      generateRelationsResolverClassesFromModel(
        project,
        baseDirPath,
        dmmfDocument,
        relationModel,
      ),
    );
    const relationResolversBarrelExportSourceFile = project.createSourceFile(
      path.resolve(
        baseDirPath,
        resolversFolderName,
        relationsResolversFolderName,
        "resolvers.index.ts",
      ),
      undefined,
      { overwrite: true },
    );
    generateResolversBarrelFile(
      "relations",
      relationResolversBarrelExportSourceFile,
      dmmfDocument.relationModels.map<GenerateMappingData>(relationModel => ({
        resolverName: relationModel.resolverName,
        modelName: relationModel.model.typeName,
      })),
    );

    if (dmmfDocument.relationModels.length > 0) {
      log("Generating relation resolver args...");
      dmmfDocument.relationModels.forEach(async relationModelData => {
        const resolverDirPath = path.resolve(
          baseDirPath,
          resolversFolderName,
          relationsResolversFolderName,
          relationModelData.model.typeName,
        );
        relationModelData.relationFields
          .filter(field => field.argsTypeName)
          .forEach(async field => {
            generateArgsTypeClassFromArgs(
              project,
              resolverDirPath,
              field.outputTypeField.args,
              field.argsTypeName!,
              dmmfDocument,
            );
          });
        const argTypeNames = relationModelData.relationFields
          .filter(it => it.argsTypeName !== undefined)
          .map(it => it.argsTypeName!);

        if (argTypeNames.length) {
          const barrelExportSourceFile = project.createSourceFile(
            path.resolve(resolverDirPath, argsFolderName, "index.ts"),
            undefined,
            { overwrite: true },
          );
          generateArgsBarrelFile(barrelExportSourceFile, argTypeNames);
        }
      });
    }
    const relationModelsWithArgs = dmmfDocument.relationModels.filter(
      relationModelData =>
        relationModelData.relationFields.some(
          it => it.argsTypeName !== undefined,
        ),
    );
    if (relationModelsWithArgs.length > 0) {
      const relationResolversArgsIndexSourceFile = project.createSourceFile(
        path.resolve(
          baseDirPath,
          resolversFolderName,
          relationsResolversFolderName,
          "args.index.ts",
        ),
        undefined,
        { overwrite: true },
      );
      generateArgsIndexFile(
        relationResolversArgsIndexSourceFile,
        relationModelsWithArgs.map(
          relationModelData => relationModelData.model.typeName,
        ),
      );
    }
    const relationResolversIndexSourceFile = project.createSourceFile(
      path.resolve(
        baseDirPath,
        resolversFolderName,
        relationsResolversFolderName,
        "index.ts",
      ),
      undefined,
      { overwrite: true },
    );
    generateResolversIndexFile(
      relationResolversIndexSourceFile,
      "relations",
      relationModelsWithArgs.length > 0,
    );
  }

  log("Generating crud resolvers...");
  dmmfDocument.modelMappings.forEach(async mapping => {
    const model = dmmfDocument.datamodel.models.find(
      model => model.name === mapping.model,
    )!;
    generateCrudResolverClassFromMapping(
      project,
      baseDirPath,
      mapping,
      model,
      dmmfDocument,
    );
    mapping.actions.forEach(async action => {
      const model = dmmfDocument.datamodel.models.find(
        model => model.name === mapping.model,
      )!;
      generateActionResolverClass(
        project,
        baseDirPath,
        model,
        action,
        mapping,
        dmmfDocument,
      );
    });
  });
  const generateMappingData =
    dmmfDocument.modelMappings.map<GenerateMappingData>(mapping => {
      const model = dmmfDocument.datamodel.models.find(
        model => model.name === mapping.model,
      )!;
      return {
        modelName: model.typeName,
        resolverName: mapping.resolverName,
        actionResolverNames: mapping.actions.map(it => it.actionResolverName),
      };
    });
  const crudResolversBarrelExportSourceFile = project.createSourceFile(
    path.resolve(
      baseDirPath,
      resolversFolderName,
      crudResolversFolderName,
      "resolvers-crud.index.ts",
    ),
    undefined,
    { overwrite: true },
  );
  generateResolversBarrelFile(
    "crud",
    crudResolversBarrelExportSourceFile,
    generateMappingData,
  );
  const crudResolversActionsBarrelExportSourceFile = project.createSourceFile(
    path.resolve(
      baseDirPath,
      resolversFolderName,
      crudResolversFolderName,
      "resolvers-actions.index.ts",
    ),
    undefined,
    { overwrite: true },
  );
  generateResolversActionsBarrelFile(
    crudResolversActionsBarrelExportSourceFile,
    generateMappingData,
  );
  const crudResolversIndexSourceFile = project.createSourceFile(
    path.resolve(
      baseDirPath,
      resolversFolderName,
      crudResolversFolderName,
      "index.ts",
    ),
    undefined,
    { overwrite: true },
  );
  generateResolversIndexFile(crudResolversIndexSourceFile, "crud", true);

  log("Generating crud resolvers args...");
  dmmfDocument.modelMappings.forEach(async mapping => {
    const actionsWithArgs = mapping.actions.filter(
      it => it.argsTypeName !== undefined,
    );

    if (actionsWithArgs.length) {
      const model = dmmfDocument.datamodel.models.find(
        model => model.name === mapping.model,
      )!;
      const resolverDirPath = path.resolve(
        baseDirPath,
        resolversFolderName,
        crudResolversFolderName,
        model.typeName,
      );
      actionsWithArgs.forEach(async action => {
        generateArgsTypeClassFromArgs(
          project,
          resolverDirPath,
          action.method.args,
          action.argsTypeName!,
          dmmfDocument,
        );
      });
      const barrelExportSourceFile = project.createSourceFile(
        path.resolve(resolverDirPath, argsFolderName, "index.ts"),
        undefined,
        { overwrite: true },
      );
      generateArgsBarrelFile(
        barrelExportSourceFile,
        actionsWithArgs.map(it => it.argsTypeName!),
      );
    }
  });
  const crudResolversArgsIndexSourceFile = project.createSourceFile(
    path.resolve(
      baseDirPath,
      resolversFolderName,
      crudResolversFolderName,
      "args.index.ts",
    ),
    undefined,
    { overwrite: true },
  );
  generateArgsIndexFile(
    crudResolversArgsIndexSourceFile,
    dmmfDocument.modelMappings
      .filter(mapping =>
        mapping.actions.some(it => it.argsTypeName !== undefined),
      )
      .map(mapping => mapping.modelTypeName),
  );

  log("Generate enhance map");
  const enhanceSourceFile = project.createSourceFile(
    baseDirPath + "/enhance.ts",
    undefined,
    { overwrite: true },
  );
  generateEnhanceMap(
    enhanceSourceFile,
    dmmfDocument.modelMappings,
    dmmfDocument.relationModels,
    dmmfDocument.datamodel.models,
    dmmfDocument.schema.inputTypes,
    outputTypesToGenerate,
  );

  log("Generate custom scalars");
  const scalarsSourceFile = project.createSourceFile(
    baseDirPath + "/scalars.ts",
    undefined,
    { overwrite: true },
  );
  generateCustomScalars(scalarsSourceFile, dmmfDocument.options);

  log("Generate custom scalars");
  const helpersSourceFile = project.createSourceFile(
    baseDirPath + "/helpers.ts",
    undefined,
    { overwrite: true },
  );
  generateHelpersFile(helpersSourceFile);

  log("Generating index file");
  const indexSourceFile = project.createSourceFile(
    baseDirPath + "/index.ts",
    undefined,
    { overwrite: true },
  );
  generateIndexFile(indexSourceFile, dmmfDocument.relationModels.length > 0);

  log("Emitting generated code files");
  if (emitTranspiledCode) {
    await project.emit();
  } else {
    for (const file of project.getSourceFiles()) {
      file.formatText({ indentSize: 2 });
    }
    await project.save();
  }
}
