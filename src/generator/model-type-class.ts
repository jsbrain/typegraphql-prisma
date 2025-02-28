import path from "path";
import {
  GetAccessorDeclarationStructure,
  OptionalKind,
  Project,
  PropertyDeclarationStructure,
  Writers,
} from "ts-morph";
import { getFileSuffix, modelsFolderName } from "./config";
import { DmmfDocument } from "./dmmf/dmmf-document";
import { DMMF } from "./dmmf/types";
import {
  generateCustomScalarsImport,
  generateEnumsImports,
  generateGraphQLScalarsImport,
  generateModelsImports,
  generatePrismaNamespaceImport,
  generateResolversOutputsImports,
  generateTypeGraphQLImport,
} from "./imports";

export default function generateObjectTypeClassFromModel(
  project: Project,
  baseDirPath: string,
  model: DMMF.Model,
  modelOutputType: DMMF.OutputType,
  dmmfDocument: DmmfDocument,
) {
  const dirPath = path.resolve(baseDirPath, modelsFolderName);
  const filePath = path.resolve(
    dirPath,
    `${model.typeName}${getFileSuffix(modelsFolderName)}.ts`,
  );
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateTypeGraphQLImport(sourceFile);
  generateGraphQLScalarsImport(sourceFile);
  generatePrismaNamespaceImport(sourceFile, dmmfDocument.options, 1);
  generateCustomScalarsImport(sourceFile, 1);
  generateModelsImports(
    sourceFile,
    model.fields
      .filter(field => field.location === "inputObjectTypes")
      .filter(field => field.type !== model.name)
      .map(field =>
        dmmfDocument.isModelName(field.type)
          ? dmmfDocument.getModelTypeName(field.type)!
          : field.type,
      ),
  );
  generateEnumsImports(
    sourceFile,
    model.fields
      .filter(field => field.location === "enumTypes")
      .map(field => field.type),
  );

  const countField = modelOutputType.fields.find(it => it.name === "_count");
  if (countField) {
    generateResolversOutputsImports(sourceFile, [countField.typeGraphQLType]);
  }

  sourceFile.addClass({
    name: model.typeName,
    isExported: true,
    decorators: [
      {
        name: "TypeGraphQL.ObjectType",
        arguments: [
          Writers.object({
            isAbstract: "true",
            ...(model.docs && { description: `"${model.docs}"` }),
            ...(dmmfDocument.options.simpleResolvers && {
              simpleResolvers: "true",
            }),
          }),
        ],
      },
    ],
    properties: [
      ...model.fields.map<OptionalKind<PropertyDeclarationStructure>>(field => {
        const isOptional =
          !!field.relationName ||
          field.isOmitted.output ||
          (!field.isRequired && field.typeFieldAlias === undefined);

        return {
          name: field.name,
          // type: field.fieldTSType,
          // ! Enable direct enum usage
          type: field.kind === "enum" ? field.type : field.fieldTSType,
          hasExclamationToken: !isOptional,
          hasQuestionToken: isOptional,
          trailingTrivia: "\r\n",
          decorators: [
            ...(field.relationName ||
            field.typeFieldAlias ||
            field.isOmitted.output
              ? []
              : [
                  {
                    name: "TypeGraphQL.Field",
                    arguments: [
                      `_type => ${field.typeGraphQLType}`,
                      Writers.object({
                        nullable: `${isOptional}`,
                        ...(field.docs && { description: `"${field.docs}"` }),
                      }),
                    ],
                  },
                ]),
          ],
          ...(field.docs && {
            docs: [{ description: field.docs }],
          }),
        };
      }),
      ...(countField
        ? [
            {
              name: countField.name,
              type: countField.fieldTSType,
              hasExclamationToken: countField.isRequired,
              hasQuestionToken: !countField.isRequired,
              trailingTrivia: "\r\n",
              decorators: [
                {
                  name: "TypeGraphQL.Field",
                  arguments: [
                    `_type => ${countField.typeGraphQLType}`,
                    Writers.object({
                      nullable: `${!countField.isRequired}`,
                    }),
                  ],
                },
              ],
            },
          ]
        : []),
    ],
    getAccessors: model.fields
      .filter(
        field =>
          field.typeFieldAlias &&
          !field.relationName &&
          !field.isOmitted.output,
      )
      .map<OptionalKind<GetAccessorDeclarationStructure>>(field => {
        return {
          name: field.typeFieldAlias!,
          returnType: field.fieldTSType,
          trailingTrivia: "\r\n",
          decorators: [
            {
              name: "TypeGraphQL.Field",
              arguments: [
                `_type => ${field.typeGraphQLType}`,
                Writers.object({
                  nullable: `${!field.isRequired}`,
                  ...(field.docs && { description: `"${field.docs}"` }),
                }),
              ],
            },
          ],
          statements: [
            field.isRequired
              ? `return this.${field.name};`
              : `return this.${field.name} ?? null;`,
          ],
          ...(field.docs && {
            docs: [{ description: field.docs }],
          }),
        };
      }),
    ...(model.docs && {
      docs: [{ description: model.docs }],
    }),
  });
}
