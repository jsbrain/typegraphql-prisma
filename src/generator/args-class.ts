import path from "path";
import {
  OptionalKind,
  Project,
  PropertyDeclarationStructure,
  Writers,
} from "ts-morph";
import { argsFolderName, getFileSuffix } from "./config";
import { DmmfDocument } from "./dmmf/dmmf-document";
import { DMMF } from "./dmmf/types";
import {
  generateEnumsImports,
  generateGraphQLScalarsImport,
  generateInputsImports,
  generateTypeGraphQLImport,
} from "./imports";

export default function generateArgsTypeClassFromArgs(
  project: Project,
  generateDirPath: string,
  fields: DMMF.SchemaArg[],
  argsTypeName: string,
  dmmfDocument: DmmfDocument,
  inputImportsLevel = 3,
) {
  const dirPath = path.resolve(generateDirPath, argsFolderName);
  const filePath = path.resolve(
    dirPath,
    `${argsTypeName}${getFileSuffix(argsFolderName)}.ts`,
  );
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateTypeGraphQLImport(sourceFile);
  generateGraphQLScalarsImport(sourceFile);
  generateInputsImports(
    sourceFile,
    fields
      .map(arg => arg.selectedInputType)
      .filter(argInputType => argInputType.location === "inputObjectTypes")
      .map(argInputType => argInputType.type),
    inputImportsLevel,
  );
  generateEnumsImports(
    sourceFile,
    fields
      .map(field => field.selectedInputType)
      .filter(argType => argType.location === "enumTypes")
      .map(argType => argType.type as string),
    4,
  );

  sourceFile.addClass({
    name: argsTypeName,
    isExported: true,
    decorators: [
      {
        name: "TypeGraphQL.ArgsType",
        arguments: [],
      },
    ],
    properties: fields.map<OptionalKind<PropertyDeclarationStructure>>(arg => {
      return {
        name: arg.typeName,
        type: arg.fieldTSType,
        hasExclamationToken: arg.isRequired,
        hasQuestionToken: !arg.isRequired,
        trailingTrivia: "\r\n",
        decorators: [
          {
            name: "TypeGraphQL.Field",
            arguments: [
              `_type => ${arg.typeGraphQLType}`,
              Writers.object({
                nullable: `${!arg.isRequired}`,
              }),
            ],
          },
        ],
      };
    }),
  });
}
