import { promises as fs } from "fs";
import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("enums", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("regression-enums");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  it("should properly generate code for normal enum", async () => {
    const schema = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const colorEnumTSFile = await readGeneratedFile("/enums/Color.enum.ts");

    expect(colorEnumTSFile).toMatchSnapshot();
  });

  it("should properly generate code for enum with docs", async () => {
    const schema = /* prisma */ `
      /// Role enum doc
      enum Role {
        // User member comment
        USER
        ADMIN
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const roleEnumTSFile = await readGeneratedFile("/enums/Role.enum.ts");
    const enumsIndexTSFile = await readGeneratedFile("/enums/index.ts");

    expect(roleEnumTSFile).toMatchSnapshot();
    expect(enumsIndexTSFile).toMatchSnapshot("enums index");
  });

  it("should properly generate standard prisma enums", async () => {
    const schema = /* prisma */ `
      model SampleModel {
        intIdField            Int     @id @default(autoincrement())
        stringField           String  @unique
        optionalStringField   String?
        intField              Int
        optionalIntField      Int?
        floatField            Float
        optionalFloatField    Float?
        booleanField          Boolean
        optionalBooleanField  Boolean?
        dateField             DateTime
        optionalDateField     DateTime?
        jsonField             Json
        optionalJsonField     Json?
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const sortOrderTSFile = await readGeneratedFile("/enums/SortOrder.enum.ts");
    const queryModeTSFile = await readGeneratedFile("/enums/QueryMode.enum.ts");
    const enumsIndexTSFile = await readGeneratedFile("/enums/index.ts");

    expect(sortOrderTSFile).toMatchSnapshot("SortOrder");
    expect(queryModeTSFile).toMatchSnapshot("QueryMode");
    expect(enumsIndexTSFile).toMatchSnapshot("enums index");
  });

  it("should properly generate model scalar field enum", async () => {
    const schema = /* prisma */ `
      model SampleModel {
        intIdField   Int     @id @default(autoincrement())
        stringField  String  @unique
        intField     Int
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const sampleModelScalarFieldEnumTSFile = await readGeneratedFile(
      "/enums/SampleModelScalarFieldEnum.enum.ts",
    );
    const enumsIndexTSFile = await readGeneratedFile("/enums/index.ts");

    expect(sampleModelScalarFieldEnumTSFile).toMatchSnapshot(
      "SampleModelScalarFieldEnum",
    );
    expect(enumsIndexTSFile).toMatchSnapshot("enums index");
  });

  it("should properly generate model scalar enum when model is renamed", async () => {
    const schema = /* prisma */ `
      /// @@TypeGraphQL.type(name: "ExampleModel")
      model SampleModel {
        intIdField   Int     @id @default(autoincrement())
        stringField  String  @unique
        intField     Int
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const exampleModelScalarFieldEnumTSFile = await readGeneratedFile(
      "/enums/ExampleModelScalarFieldEnum.enum.ts",
    );
    const enumsIndexTSFile = await readGeneratedFile("/enums/index.ts");

    expect(exampleModelScalarFieldEnumTSFile).toMatchSnapshot(
      "ExampleModelScalarFieldEnum",
    );
    expect(enumsIndexTSFile).toMatchSnapshot("enums index");
  });

  it("should properly generate model scalar enum when model field is renamed", async () => {
    const schema = /* prisma */ `
      model SampleModel {
        intIdField   Int     @id @default(autoincrement())
        /// @TypeGraphQL.field(name: "mappedFieldName")
        stringField  String  @unique
        intField     Int
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const sampleModelScalarFieldEnumTSFile = await readGeneratedFile(
      "/enums/SampleModelScalarFieldEnum.enum.ts",
    );
    const enumsIndexTSFile = await readGeneratedFile("/enums/index.ts");

    expect(sampleModelScalarFieldEnumTSFile).toMatchSnapshot(
      "SampleModelScalarFieldEnum",
    );
    expect(enumsIndexTSFile).toMatchSnapshot("enums index");
  });
});
