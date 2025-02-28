import path from "path";
import { EnumMemberStructure, OptionalKind, Project } from "ts-morph";
import { enumsFolderName, getFileSuffix } from "./config";
import { DMMF } from "./dmmf/types";
import { generateTypeGraphQLImport } from "./imports";

export default function generateEnumFromDef(
  project: Project,
  baseDirPath: string,
  enumDef: DMMF.Enum,
) {
  const dirPath = path.resolve(baseDirPath, enumsFolderName);
  const filePath = path.resolve(
    dirPath,
    `${enumDef.typeName}${getFileSuffix(enumsFolderName)}.ts`,
  );
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });
  generateTypeGraphQLImport(sourceFile);

  sourceFile.addEnum({
    isExported: true,
    name: enumDef.typeName,
    ...(enumDef.docs && {
      docs: [{ description: enumDef.docs }],
    }),
    members: enumDef.valuesMap.map<OptionalKind<EnumMemberStructure>>(
      ({ name, value }) => ({
        name,
        value,
        // TODO: add support for string enums (values)
        // TODO: add support for enum members docs
      }),
    ),
  });

  // TODO: refactor to AST
  sourceFile.addStatements([
    `TypeGraphQL.registerEnumType(${enumDef.typeName}, {
      name: "${enumDef.typeName}",
      description: ${enumDef.docs ? `"${enumDef.docs}"` : "undefined"},
    });`,
  ]);
}
