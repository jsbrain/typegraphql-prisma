import { promises as fs } from "fs";
import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("inputs", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("regression-inputs");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  it("should properly generate input type classes for filtering scalar fields", async () => {
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
        intArrayField         Int[]
        stringArrayField      String[]
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const intFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/IntFilter.input.ts",
    );
    const intNullableListFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/IntNullableListFilter.input.ts",
    );
    const nestedIntFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedIntFilter.input.ts",
    );
    const stringFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/StringFilter.input.ts",
    );
    const stringNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/StringNullableFilter.input.ts",
    );
    const stringNullableListFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/StringNullableListFilter.input.ts",
    );
    const nestedStringNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedStringNullableFilter.input.ts",
    );
    const floatFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/FloatFilter.input.ts",
    );
    const nestedFloatFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedFloatFilter.input.ts",
    );
    const boolFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BoolFilter.input.ts",
    );
    const nestedBoolFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedBoolFilter.input.ts",
    );
    const dateTimeFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/DateTimeFilter.input.ts",
    );
    const nestedDateTimeFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedDateTimeFilter.input.ts",
    );
    const jsonFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/JsonFilter.input.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(intFilterTSFile).toMatchSnapshot("IntFilter");
    expect(intNullableListFilterTSFile).toMatchSnapshot(
      "IntNullableListFilter",
    );
    expect(nestedIntFilterTSFile).toMatchSnapshot("NestedIntFilter");
    expect(stringFilterTSFile).toMatchSnapshot("StringFilter");
    expect(stringNullableFilterTSFile).toMatchSnapshot("StringNullableFilter");
    expect(stringNullableListFilterTSFile).toMatchSnapshot(
      "StringNullableListFilter",
    );
    expect(nestedStringNullableFilterTSFile).toMatchSnapshot(
      "NestedStringNullableFilter",
    );
    expect(floatFilterTSFile).toMatchSnapshot("FloatFilter");
    expect(nestedFloatFilterTSFile).toMatchSnapshot("NestedFloatFilter");
    expect(boolFilterTSFile).toMatchSnapshot("BoolFilter");
    expect(nestedBoolFilterTSFile).toMatchSnapshot("NestedBoolFilter");
    expect(dateTimeFilterTSFile).toMatchSnapshot("DateTimeFilter");
    expect(nestedDateTimeFilterTSFile).toMatchSnapshot("NestedDateTimeFilter");
    expect(jsonFilterTSFile).toMatchSnapshot("JsonFilter");
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for creating models and scalar fields", async () => {
    const schema = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }
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
        enumField             Color
        optionalEnumField     Color?
        intArrayField         Int[]
        stringArrayField      String[]
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const sampleModelCreateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelCreateInput.input.ts",
    );
    const sampleModelCreateManyInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelCreateManyInput.input.ts",
    );
    const sampleModelCreateintArrayFieldInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelCreateintArrayFieldInput.input.ts",
    );
    const sampleModelCreateManyintArrayFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateManyintArrayFieldInput.input.ts",
      );
    const sampleModelCreatestringArrayFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreatestringArrayFieldInput.input.ts",
      );
    const sampleModelCreateManystringArrayFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateManystringArrayFieldInput.input.ts",
      );

    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(sampleModelCreateInputTSFile).toMatchSnapshot(
      "SampleModelCreateInput",
    );
    expect(sampleModelCreateManyInputTSFile).toMatchSnapshot(
      "SampleModelCreateManyInput",
    );
    expect(sampleModelCreateintArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelCreateintArrayFieldInput",
    );
    expect(sampleModelCreateManyintArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelCreateManyintArrayFieldInput",
    );
    expect(sampleModelCreatestringArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelCreatestringArrayFieldInput",
    );
    expect(sampleModelCreateManystringArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelCreateManystringArrayFieldInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for updating scalar fields", async () => {
    const schema = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }
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
        enumField             Color
        optionalEnumField     Color?
        intArrayField         Int[]
        stringArrayField      String[]
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const sampleModelUpdateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelUpdateInput.input.ts",
    );
    const sampleModelUpdateManyMutationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelUpdateManyMutationInput.input.ts",
    );
    const boolFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/BoolFieldUpdateOperationsInput.input.ts",
    );
    const dateTimeFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/DateTimeFieldUpdateOperationsInput.input.ts",
    );
    const floatFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FloatFieldUpdateOperationsInput.input.ts",
    );
    const intFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/IntFieldUpdateOperationsInput.input.ts",
    );
    const stringFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/StringFieldUpdateOperationsInput.input.ts",
    );
    const enumColorFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/EnumColorFieldUpdateOperationsInput.input.ts",
    );
    const sampleModelUpdateintArrayFieldInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelUpdateintArrayFieldInput.input.ts",
    );
    const sampleModelUpdatestringArrayFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SampleModelUpdatestringArrayFieldInput.input.ts",
      );

    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(sampleModelUpdateInputTSFile).toMatchSnapshot(
      "SampleModelUpdateInput",
    );
    expect(sampleModelUpdateManyMutationInputTSFile).toMatchSnapshot(
      "SampleModelUpdateManyMutationInput",
    );
    expect(boolFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "BoolFieldUpdateOperationsInput",
    );
    expect(dateTimeFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "DateTimeFieldUpdateOperationsInput",
    );
    expect(floatFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "FloatFieldUpdateOperationsInput",
    );
    expect(intFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "IntFieldUpdateOperationsInput",
    );
    expect(stringFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "StringFieldUpdateOperationsInput",
    );
    expect(enumColorFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "EnumColorFieldUpdateOperationsInput",
    );
    expect(sampleModelUpdateintArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelUpdateintArrayFieldInput",
    );
    expect(sampleModelUpdatestringArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelUpdatestringArrayFieldInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for filtering models by fields", async () => {
    const schema = /* prisma */ `
      model SampleModel {
        intIdField          Int     @id @default(autoincrement())
        stringField         String  @unique
        optionalStringField String?
        intField            Int
        floatField          Float
        booleanField        Boolean
        dateField           DateTime
        jsonField           Json
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const sampleModelWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelWhereInput.input.ts",
    );
    const sampleModelWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelWhereUniqueInput.input.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(sampleModelWhereInputTSFile).toMatchSnapshot(
      "SampleModelWhereInput",
    );
    expect(sampleModelWhereUniqueInputTSFile).toMatchSnapshot(
      "SampleModelWhereUniqueInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for filtering models by many to many relation fields", async () => {
    const schema = /* prisma */ `
      model FirstModel {
        idField            Int            @id @default(autoincrement())
        uniqueStringField  String         @unique
        floatField         Float
        secondModelsField  SecondModel[]
      }
      model SecondModel {
        idField            Int           @id @default(autoincrement())
        uniqueStringField  String        @unique
        floatField         Float
        firstModelsField   FirstModel[]
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const firstModelWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelWhereInput.input.ts",
    );
    const firstModelWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelWhereUniqueInput.input.ts",
    );
    const firstModelScalarWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelScalarWhereInput.input.ts",
    );
    const firstModelOrderByInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelOrderByInput.input.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(firstModelWhereInputTSFile).toMatchSnapshot("FirstModelWhereInput");
    expect(firstModelWhereUniqueInputTSFile).toMatchSnapshot(
      "FirstModelWhereUniqueInput",
    );
    expect(firstModelScalarWhereInputTSFile).toMatchSnapshot(
      "FirstModelScalarWhereInput",
    );
    expect(firstModelOrderByInputTSFile).toMatchSnapshot(
      "FirstModelOrderByInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for filtering models by one to many relation fields", async () => {
    const schema = /* prisma */ `
      model FirstModel {
        idField            Int            @id @default(autoincrement())
        uniqueStringField  String         @unique
        floatField         Float
        secondModelsField  SecondModel[]
      }
      model SecondModel {
        idField            Int          @id @default(autoincrement())
        uniqueStringField  String       @unique
        floatField         Float
        firstModelFieldId  Int
        firstModelField    FirstModel   @relation(fields: [firstModelFieldId], references: [idField])
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const firstModelWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelWhereInput.input.ts",
    );
    const firstModelWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelWhereUniqueInput.input.ts",
    );
    const firstModelOrderByInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelOrderByInput.input.ts",
    );
    const firstModelRelationFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelRelationFilter.input.ts",
    );
    const secondModelWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelWhereInput.input.ts",
    );
    const secondModelWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelWhereUniqueInput.input.ts",
    );
    const secondModelScalarWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelScalarWhereInput.input.ts",
    );
    const secondModelOrderByInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelOrderByInput.input.ts",
    );
    const secondModelListRelationFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelListRelationFilter.input.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(firstModelWhereInputTSFile).toMatchSnapshot("FirstModelWhereInput");
    expect(firstModelWhereUniqueInputTSFile).toMatchSnapshot(
      "FirstModelWhereUniqueInput",
    );
    expect(firstModelOrderByInputTSFile).toMatchSnapshot(
      "FirstModelOrderByInput",
    );
    expect(firstModelRelationFilterTSFile).toMatchSnapshot(
      "FirstModelRelationFilter",
    );
    expect(secondModelWhereInputTSFile).toMatchSnapshot(
      "SecondModelWhereInput",
    );
    expect(secondModelWhereUniqueInputTSFile).toMatchSnapshot(
      "SecondModelWhereUniqueInput",
    );
    expect(secondModelScalarWhereInputTSFile).toMatchSnapshot(
      "SecondModelScalarWhereInput",
    );
    expect(secondModelOrderByInputTSFile).toMatchSnapshot(
      "SecondModelOrderByInput",
    );
    expect(secondModelListRelationFilterTSFile).toMatchSnapshot(
      "SecondModelListRelationFilter",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type class for filtering by enums values", async () => {
    const schema = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }

      model SampleModel {
        idField    Int    @id @default(autoincrement())
        enumField  Color
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const enumColorFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/EnumColorFilter.input.ts",
    );
    const nestedEnumColorFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedEnumColorFilter.input.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(enumColorFilterTSFile).toMatchSnapshot("EnumColorFilter");
    expect(nestedEnumColorFilterTSFile).toMatchSnapshot(
      "NestedEnumColorFilter",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for model with composite unique index", async () => {
    const schema = /* prisma */ `
      model Movie {
        directorFirstName String
        directorLastName  String
        director          Director @relation(fields: [directorFirstName, directorLastName], references: [firstName, lastName])
        title             String
        rating            Float

        @@id([directorFirstName, directorLastName, title])
      }

      model Director {
        firstName String
        lastName  String
        age       Int
        movies    Movie[]

        @@id([firstName, lastName])
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const directorWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/DirectorWhereInput.input.ts",
    );
    const directorWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/DirectorWhereUniqueInput.input.ts",
    );
    const directorOrderByInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/DirectorOrderByInput.input.ts",
    );
    const directorFirstNameLastNameCompoundUniqueInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/DirectorFirstNameLastNameCompoundUniqueInput.input.ts",
      );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(directorWhereInputTSFile).toMatchSnapshot("DirectorWhereInput");
    expect(directorWhereUniqueInputTSFile).toMatchSnapshot(
      "DirectorWhereUniqueInput",
    );
    expect(directorOrderByInputTSFile).toMatchSnapshot("DirectorOrderByInput");
    expect(directorFirstNameLastNameCompoundUniqueInputTSFile).toMatchSnapshot(
      "DirectorFirstNameLastNameCompoundUniqueInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for model with id keys with relation", async () => {
    const schema = /* prisma */ `
      model Movie {
        directorFirstName String
        directorLastName  String
        director          Director @relation(fields: [directorFirstName, directorLastName], references: [firstName, lastName])
        title             String
        rating            Float

        @@id([directorFirstName, directorLastName, title])
      }

      model Director {
        firstName String
        lastName  String
        age       Int
        movies    Movie[]

        @@id([firstName, lastName])
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const movieWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/MovieWhereInput.input.ts",
    );
    const movieWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/MovieWhereUniqueInput.input.ts",
    );
    const movieScalarWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/MovieScalarWhereInput.input.ts",
    );
    const movieOrderByInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/MovieOrderByInput.input.ts",
    );
    const movieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput.input.ts",
      );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(movieWhereInputTSFile).toMatchSnapshot("MovieWhereInput");
    expect(movieWhereUniqueInputTSFile).toMatchSnapshot(
      "MovieWhereUniqueInput",
    );
    expect(movieScalarWhereInputTSFile).toMatchSnapshot(
      "MovieScalarWhereInput",
    );
    expect(movieOrderByInputTSFile).toMatchSnapshot("MovieOrderByInput");
    expect(
      movieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInputTSFile,
    ).toMatchSnapshot(
      "MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for connectOrCreate", async () => {
    const schema = /* prisma */ `
      model User {
        id          Int     @id @default(autoincrement())
        name        String
        postsField  Post[]
      }
      model Post {
        id        Int     @id @default(autoincrement())
        title     String
        authorId  Int
        author    User    @relation(fields: [authorId], references: [id])
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const userUpdateOneRequiredWithoutPostsFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/UserUpdateOneRequiredWithoutPostsFieldInput.input.ts",
      );
    const userCreateOrConnectWithoutPostsFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/UserCreateOrConnectWithoutPostsFieldInput.input.ts",
      );
    const userCreateNestedOneWithoutPostsFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/UserCreateNestedOneWithoutPostsFieldInput.input.ts",
      );

    expect(userUpdateOneRequiredWithoutPostsFieldInputTSFile).toMatchSnapshot(
      "UserUpdateOneRequiredWithoutPostsFieldInput",
    );
    expect(userCreateOrConnectWithoutPostsFieldInputTSFile).toMatchSnapshot(
      "UserCreateOrConnectWithoutPostsFieldInput",
    );
    expect(userCreateNestedOneWithoutPostsFieldInputTSFile).toMatchSnapshot(
      "UserCreateNestedOneWithoutPostsFieldInput",
    );
  });

  it("should properly generate input type scalar filters classes for model with native types", async () => {
    const schema = /* prisma */ `
      model NativeTypeModel {
        id      Int      @id @default(autoincrement()) @db.Integer
        bigInt  BigInt?  @db.BigInt
        byteA   Bytes?   @db.ByteA
        decimal Decimal? @db.Decimal
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const bigIntNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BigIntNullableFilter.input.ts",
    );
    const bigIntNullableWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BigIntNullableWithAggregatesFilter.input.ts",
    );
    const bytesNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BytesNullableFilter.input.ts",
    );
    const bytesNullableWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BytesNullableWithAggregatesFilter.input.ts",
    );
    const decimalNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/DecimalNullableFilter.input.ts",
    );
    const decimalNullableWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/DecimalNullableWithAggregatesFilter.input.ts",
    );
    const nestedBytesNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedBytesNullableFilter.input.ts",
    );
    const nestedBytesNullableWithAggregatesFilterTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NestedBytesNullableWithAggregatesFilter.input.ts",
      );
    const nestedDecimalNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedDecimalNullableFilter.input.ts",
    );
    const nestedDecimalNullableWithAggregatesFilterTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NestedDecimalNullableWithAggregatesFilter.input.ts",
      );
    const nullableBigIntFieldUpdateOperationsInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NullableBigIntFieldUpdateOperationsInput.input.ts",
      );
    const nullableBytesFieldUpdateOperationsInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NullableBytesFieldUpdateOperationsInput.input.ts",
      );
    const nullableDecimalFieldUpdateOperationsInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NullableDecimalFieldUpdateOperationsInput.input.ts",
      );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(bigIntNullableFilterTSFile).toMatchSnapshot("BigIntNullableFilter");
    expect(bigIntNullableWithAggregatesFilterTSFile).toMatchSnapshot(
      "BigIntNullableWithAggregatesFilter",
    );
    expect(bytesNullableFilterTSFile).toMatchSnapshot("BytesNullableFilter");
    expect(bytesNullableWithAggregatesFilterTSFile).toMatchSnapshot(
      "BytesNullableWithAggregatesFilter",
    );
    expect(decimalNullableFilterTSFile).toMatchSnapshot(
      "DecimalNullableFilter",
    );
    expect(decimalNullableWithAggregatesFilterTSFile).toMatchSnapshot(
      "DecimalNullableWithAggregatesFilter",
    );
    expect(nestedBytesNullableFilterTSFile).toMatchSnapshot(
      "NestedBytesNullableFilter",
    );
    expect(nestedBytesNullableWithAggregatesFilterTSFile).toMatchSnapshot(
      "NestedBytesNullableWithAggregatesFilter",
    );
    expect(nestedDecimalNullableFilterTSFile).toMatchSnapshot(
      "NestedDecimalNullableFilter",
    );
    expect(nestedDecimalNullableWithAggregatesFilterTSFile).toMatchSnapshot(
      "NestedDecimalNullableWithAggregatesFilter",
    );
    expect(nullableBigIntFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "NullableBigIntFieldUpdateOperationsInput",
    );
    expect(nullableBytesFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "NullableBytesFieldUpdateOperationsInput",
    );
    expect(nullableDecimalFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "NullableDecimalFieldUpdateOperationsInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should generate proper WithAggregatesFilter for scalars", async () => {
    const schema = /* prisma */ `
      model Sample {
        idField       Int     @id @default(autoincrement())
        stringField   String
        floatField    Float
        intField      Int
        booleanField  Boolean
        dateField     DateTime
        jsonField     Json
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    // TODO: add nested filter tests
    const stringWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/StringWithAggregatesFilter.input.ts",
    );
    const floatWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/FloatWithAggregatesFilter.input.ts",
    );
    const intWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/IntWithAggregatesFilter.input.ts",
    );
    const boolWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BoolWithAggregatesFilter.input.ts",
    );
    const dateTimeWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/DateTimeWithAggregatesFilter.input.ts",
    );
    const jsonWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/JsonWithAggregatesFilter.input.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(stringWithAggregatesFilterTSFile).toMatchSnapshot(
      "StringWithAggregatesFilter",
    );
    expect(floatWithAggregatesFilterTSFile).toMatchSnapshot(
      "FloatWithAggregatesFilter",
    );
    expect(intWithAggregatesFilterTSFile).toMatchSnapshot(
      "IntWithAggregatesFilter",
    );
    expect(boolWithAggregatesFilterTSFile).toMatchSnapshot(
      "BoolWithAggregatesFilter",
    );
    expect(dateTimeWithAggregatesFilterTSFile).toMatchSnapshot(
      "DateTimeWithAggregatesFilter",
    );
    expect(jsonWithAggregatesFilterTSFile).toMatchSnapshot(
      "JsonWithAggregatesFilter",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should generate proper ScalarWhereWithAggregatesInput for model", async () => {
    const schema = /* prisma */ `
      model Sample {
        idField       Int     @id @default(autoincrement())
        stringField   String
        floatField    Float
        intField      Int
        booleanField  Boolean
        dateField     DateTime
        jsonField     Json
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const sampleScalarWhereWithAggregatesInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleScalarWhereWithAggregatesInput.input.ts",
    );

    expect(sampleScalarWhereWithAggregatesInputTSFile).toMatchSnapshot(
      "SampleScalarWhereWithAggregatesInput",
    );
  });

  it("should properly generate input type classes for model with native types", async () => {
    const schema = /* prisma */ `
      model NativeTypeModel {
        id      Int      @id @default(autoincrement()) @db.Integer
        bigInt  BigInt?  @db.BigInt
        byteA   Bytes?   @db.ByteA
        decimal Decimal? @db.Decimal
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const nativeTypeModelCreateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/NativeTypeModelCreateInput.input.ts",
    );
    const nativeTypeModelOrderByInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/NativeTypeModelOrderByInput.input.ts",
    );
    const nativeTypeModelUpdateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/NativeTypeModelUpdateInput.input.ts",
    );
    const nativeTypeModelUpdateManyMutationInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NativeTypeModelUpdateManyMutationInput.input.ts",
      );
    const nativeTypeModelWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/NativeTypeModelWhereInput.input.ts",
    );
    const nativeTypeModelWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/NativeTypeModelWhereUniqueInput.input.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(nativeTypeModelCreateInputTSFile).toMatchSnapshot(
      "NativeTypeModelCreateInput",
    );
    expect(nativeTypeModelOrderByInputTSFile).toMatchSnapshot(
      "NativeTypeModelOrderByInput",
    );
    expect(nativeTypeModelUpdateInputTSFile).toMatchSnapshot(
      "NativeTypeModelUpdateInput",
    );
    expect(nativeTypeModelUpdateManyMutationInputTSFile).toMatchSnapshot(
      "NativeTypeModelUpdateManyMutationInput",
    );
    expect(nativeTypeModelWhereInputTSFile).toMatchSnapshot(
      "NativeTypeModelWhereInput",
    );
    expect(nativeTypeModelWhereUniqueInputTSFile).toMatchSnapshot(
      "NativeTypeModelWhereUniqueInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for inserting many entities", async () => {
    const schema = /* prisma */ `
      model FirstModel {
        idField            Int            @id @default(autoincrement())
        uniqueStringField  String         @unique
        floatField         Float
        secondModelsField  SecondModel[]
      }
      model SecondModel {
        idField            Int          @id @default(autoincrement())
        uniqueStringField  String       @unique
        floatField         Float
        firstModelFieldId  Int
        firstModelField    FirstModel   @relation(fields: [firstModelFieldId], references: [idField])
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const firstModelCreateManyInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelCreateManyInput.input.ts",
    );
    const secondModelCreateManyInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelCreateManyInput.input.ts",
    );
    const secondModelCreateManyFirstModelFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SecondModelCreateManyFirstModelFieldInput.input.ts",
      );
    const secondModelCreateManyFirstModelFieldInputEnvelopeTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SecondModelCreateManyFirstModelFieldInputEnvelope.input.ts",
      );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(firstModelCreateManyInputTSFile).toMatchSnapshot(
      "FirstModelCreateManyInput",
    );
    expect(secondModelCreateManyInputTSFile).toMatchSnapshot(
      "SecondModelCreateManyInput",
    );
    expect(secondModelCreateManyFirstModelFieldInputTSFile).toMatchSnapshot(
      "SecondModelCreateManyFirstModelFieldInput",
    );
    expect(
      secondModelCreateManyFirstModelFieldInputEnvelopeTSFile,
    ).toMatchSnapshot("SecondModelCreateManyFirstModelFieldInputEnvelope");
    expect(indexTSFile).toMatchSnapshot("index");
  });

  describe("when model is renamed", () => {
    it("should properly generate input type classes", async () => {
      const schema = /* prisma */ `
        /// @@TypeGraphQL.type(name: "Example")
        model SampleModel {
          intIdField   Int        @id @default(autoincrement())
          stringField  String     @unique
          floatField   Float
          booleanField Boolean
          dateField    DateTime
          other        OtherModel @relation(fields: [otherId], references: [id])
          otherId      Int
        }

        model OtherModel {
          id          Int           @id @default(autoincrement())
          name        String
          SampleModel SampleModel[]
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const exampleWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/ExampleWhereInput.input.ts",
      );
      const exampleWhereUniqueInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/ExampleWhereUniqueInput.input.ts",
      );
      const exampleOrderByInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/ExampleOrderByInput.input.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(exampleWhereInputTSFile).toMatchSnapshot("ExampleWhereInput");
      expect(exampleWhereUniqueInputTSFile).toMatchSnapshot(
        "ExampleWhereUniqueInput",
      );
      expect(exampleOrderByInputTSFile).toMatchSnapshot("ExampleOrderByInput");
      expect(indexTSFile).toMatchSnapshot("index");
    });

    it("should properly generate input type classes for filtering models by many to many relation fields", async () => {
      const schema = /* prisma */ `
        /// @@TypeGraphQL.type(name: "RenamedFirstModel")
        model FirstModel {
          idField            Int            @id @default(autoincrement())
          uniqueStringField  String         @unique
          floatField         Float
          secondModelsField  SecondModel[]
        }
        /// @@TypeGraphQL.type(name: "RenamedSecondModel")
        model SecondModel {
          idField            Int           @id @default(autoincrement())
          uniqueStringField  String        @unique
          floatField         Float
          firstModelsField   FirstModel[]
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const renamedFirstModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelWhereInput.input.ts",
      );
      const renamedFirstModelWhereUniqueInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelWhereUniqueInput.input.ts",
      );
      const renamedFirstModelScalarWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelScalarWhereInput.input.ts",
      );
      const renamedFirstModelOrderByInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelOrderByInput.input.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(renamedFirstModelWhereInputTSFile).toMatchSnapshot(
        "RenamedFirstModelWhereInput",
      );
      expect(renamedFirstModelWhereUniqueInputTSFile).toMatchSnapshot(
        "RenamedFirstModelWhereUniqueInput",
      );
      expect(renamedFirstModelScalarWhereInputTSFile).toMatchSnapshot(
        "RenamedFirstModelScalarWhereInput",
      );
      expect(renamedFirstModelOrderByInputTSFile).toMatchSnapshot(
        "RenamedFirstModelOrderByInput",
      );
      expect(indexTSFile).toMatchSnapshot("index");
    });

    it("should properly generate input type classes for filtering models by one to many relation fields", async () => {
      const schema = /* prisma */ `
        /// @@TypeGraphQL.type(name: "RenamedFirstModel")
        model FirstModel {
          idField            Int            @id @default(autoincrement())
          uniqueStringField  String         @unique
          floatField         Float
          secondModelsField  SecondModel[]
        }
        /// @@TypeGraphQL.type(name: "RenamedSecondModel")
        model SecondModel {
          idField            Int          @id @default(autoincrement())
          uniqueStringField  String       @unique
          floatField         Float
          firstModelFieldId  Int
          firstModelField    FirstModel   @relation(fields: [firstModelFieldId], references: [idField])
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const renamedFirstModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelWhereInput.input.ts",
      );
      const renamedFirstModelWhereUniqueInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelWhereUniqueInput.input.ts",
      );
      const renamedFirstModelOrderByInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelOrderByInput.input.ts",
      );
      const renamedFirstModelRelationFilterTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelRelationFilter.input.ts",
      );
      const renamedSecondModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedSecondModelWhereInput.input.ts",
      );
      const renamedSecondModelWhereUniqueInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedSecondModelWhereUniqueInput.input.ts",
      );
      const renamedSecondModelScalarWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedSecondModelScalarWhereInput.input.ts",
      );
      const renamedSecondModelOrderByInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedSecondModelOrderByInput.input.ts",
      );
      const renamedSecondModelListRelationFilterTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/RenamedSecondModelListRelationFilter.input.ts",
        );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(renamedFirstModelWhereInputTSFile).toMatchSnapshot(
        "RenamedFirstModelWhereInput",
      );
      expect(renamedFirstModelWhereUniqueInputTSFile).toMatchSnapshot(
        "RenamedFirstModelWhereUniqueInput",
      );
      expect(renamedFirstModelOrderByInputTSFile).toMatchSnapshot(
        "RenamedFirstModelOrderByInput",
      );
      expect(renamedFirstModelRelationFilterTSFile).toMatchSnapshot(
        "RenamedFirstModelRelationFilter",
      );
      expect(renamedSecondModelWhereInputTSFile).toMatchSnapshot(
        "RenamedSecondModelWhereInput",
      );
      expect(renamedSecondModelWhereUniqueInputTSFile).toMatchSnapshot(
        "RenamedSecondModelWhereUniqueInput",
      );
      expect(renamedSecondModelScalarWhereInputTSFile).toMatchSnapshot(
        "RenamedSecondModelScalarWhereInput",
      );
      expect(renamedSecondModelOrderByInputTSFile).toMatchSnapshot(
        "RenamedSecondModelOrderByInput",
      );
      expect(renamedSecondModelListRelationFilterTSFile).toMatchSnapshot(
        "RenamedSecondModelListRelationFilter",
      );
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });

  describe("when model field is renamed", () => {
    it("should properly generate input type classes", async () => {
      const schema = /* prisma */ `
        model Sample {
          idField         Int     @id @default(autoincrement())
          /// @TypeGraphQL.field(name: "mappedFieldName")
          modelFieldName  String
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const sampleWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleWhereInput.input.ts",
      );
      const sampleOrderByInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleOrderByInput.input.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(sampleWhereInputTSFile).toMatchSnapshot("SampleWhereInput");
      expect(sampleOrderByInputTSFile).toMatchSnapshot("SampleOrderByInput");
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });

  describe("when prisma client is generated into node_modules", () => {
    it("should properly generate prisma client imports in input type class files", async () => {
      const schema = /* prisma */ `
        model Sample {
          idField         Int     @id @default(autoincrement())
          modelFieldName  String
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        absolutePrismaOutputPath: "@prisma/client",
      });
      const sampleWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleWhereInput.input.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(sampleWhereInputTSFile).toMatchSnapshot("SampleWhereInput");
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });

  describe("when preview feature `groupBy` is enabled", () => {});

  describe("when useUncheckedScalarInputs mode is enabled", () => {
    it("should properly generate input type classes for filtering models by one to many relation fields", async () => {
      const schema = /* prisma */ `
        model FirstModel {
          idField            Int            @id @default(autoincrement())
          uniqueStringField  String         @unique
          floatField         Float
          secondModelsField  SecondModel[]
        }
        model SecondModel {
          idField            Int          @id @default(autoincrement())
          uniqueStringField  String       @unique
          floatField         Float
          firstModelFieldId  Int
          firstModelField    FirstModel   @relation(fields: [firstModelFieldId], references: [idField])
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        useUncheckedScalarInputs: true,
      });
      const firstModelUncheckedCreateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/FirstModelUncheckedCreateInput.input.ts",
      );
      const firstModelUncheckedCreateWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelUncheckedCreateWithoutSecondModelsFieldInput.input.ts",
        );
      const firstModelUncheckedUpdateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/FirstModelUncheckedUpdateInput.input.ts",
      );
      const firstModelUncheckedUpdateManyInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/FirstModelUncheckedUpdateManyInput.input.ts",
      );
      const firstModelUncheckedUpdateWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelUncheckedUpdateWithoutSecondModelsFieldInput.input.ts",
        );
      const firstModelCreateNestedOneWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelCreateNestedOneWithoutSecondModelsFieldInput.input.ts",
        );
      const firstModelCreateOrConnectWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelCreateOrConnectWithoutSecondModelsFieldInput.input.ts",
        );
      const firstModelCreateWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelCreateWithoutSecondModelsFieldInput.input.ts",
        );
      const firstModelUpdateOneRequiredWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelUpdateOneRequiredWithoutSecondModelsFieldInput.input.ts",
        );
      const firstModelUpdateWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelUpdateWithoutSecondModelsFieldInput.input.ts",
        );
      const firstModelUpsertWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelUpsertWithoutSecondModelsFieldInput.input.ts",
        );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(firstModelUncheckedCreateInputTSFile).toMatchSnapshot(
        "FirstModelUncheckedCreateInput",
      );
      expect(
        firstModelUncheckedCreateWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot(
        "FirstModelUncheckedCreateWithoutSecondModelsFieldInput",
      );
      expect(firstModelUncheckedUpdateInputTSFile).toMatchSnapshot(
        "FirstModelUncheckedUpdateInput",
      );
      expect(firstModelUncheckedUpdateManyInputTSFile).toMatchSnapshot(
        "FirstModelUncheckedUpdateManyInput",
      );
      expect(
        firstModelUncheckedUpdateWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot(
        "FirstModelUncheckedUpdateWithoutSecondModelsFieldInput",
      );
      expect(
        firstModelCreateNestedOneWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot(
        "FirstModelCreateNestedOneWithoutSecondModelsFieldInput",
      );
      expect(
        firstModelCreateOrConnectWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot(
        "FirstModelCreateOrConnectWithoutSecondModelsFieldInput",
      );
      expect(
        firstModelCreateWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot("FirstModelCreateWithoutSecondModelsFieldInputTSFile");
      expect(
        firstModelUpdateOneRequiredWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot(
        "FirstModelUpdateOneRequiredWithoutSecondModelsFieldInput",
      );
      expect(
        firstModelUpdateWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot("FirstModelUpdateWithoutSecondModelsFieldInputTSFile");
      expect(
        firstModelUpsertWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot("FirstModelUpsertWithoutSecondModelsFieldInputTSFile");
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });

  describe("when `orderByRelation` preview feature is enabled", () => {
    it("should properly generate input type classes for sorting by many-to-many relation fields", async () => {
      const schema = /* prisma */ `
        model FirstModel {
          idField            Int            @id @default(autoincrement())
          uniqueStringField  String         @unique
          floatField         Float
          secondModelsField  SecondModel[]
        }
        model SecondModel {
          idField            Int           @id @default(autoincrement())
          uniqueStringField  String        @unique
          floatField         Float
          firstModelsField   FirstModel[]
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        previewFeatures: ["orderByRelation"],
      });
      const firstModelOrderByWithRelationInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/FirstModelOrderByWithRelationInput.input.ts",
      );
      const secondModelOrderByRelationAggregateInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/SecondModelOrderByRelationAggregateInput.input.ts",
        );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(firstModelOrderByWithRelationInputTSFile).toMatchSnapshot(
        "FirstModelOrderByWithRelationInput",
      );
      expect(secondModelOrderByRelationAggregateInputTSFile).toMatchSnapshot(
        "SecondModelOrderByRelationAggregateInput",
      );
      expect(indexTSFile).toMatchSnapshot("index");
    });

    it("should properly generate input type classes for sorting by one-to-many relation fields", async () => {
      const schema = /* prisma */ `
        model FirstModel {
          idField            Int            @id @default(autoincrement())
          uniqueStringField  String         @unique
          floatField         Float
          secondModelsField  SecondModel[]
        }
        model SecondModel {
          idField            Int          @id @default(autoincrement())
          uniqueStringField  String       @unique
          floatField         Float
          firstModelFieldId  Int
          firstModelField    FirstModel   @relation(fields: [firstModelFieldId], references: [idField])
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        previewFeatures: ["orderByRelation"],
      });
      const firstModelOrderByWithRelationInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/FirstModelOrderByWithRelationInput.input.ts",
      );
      const secondModelOrderByRelationAggregateInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/SecondModelOrderByRelationAggregateInput.input.ts",
        );
      const secondModelOrderByWithRelationInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SecondModelOrderByWithRelationInput.input.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(firstModelOrderByWithRelationInputTSFile).toMatchSnapshot(
        "FirstModelOrderByWithRelationInput",
      );
      expect(secondModelOrderByRelationAggregateInputTSFile).toMatchSnapshot(
        "SecondModelOrderByRelationAggregateInput",
      );
      expect(secondModelOrderByWithRelationInputTSFile).toMatchSnapshot(
        "SecondModelOrderByWithRelationInput",
      );
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });

  describe("when `orderByAggregateGroup` preview feature is enabled", () => {
    it("should properly generate input type classes for sorting by many-to-many relation fields", async () => {
      const schema = /* prisma */ `
        model Sample {
          idField       Int     @id @default(autoincrement())
          stringField   String
          floatField    Float
          intField      Int
          booleanField  Boolean
          dateField     DateTime
          jsonField     Json
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        previewFeatures: ["orderByAggregateGroup"],
      });
      const sampleOrderByWithAggregationInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleOrderByWithAggregationInput.input.ts",
      );
      const sampleMaxOrderByAggregateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleMaxOrderByAggregateInput.input.ts",
      );
      const sampleMinOrderByAggregateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleMinOrderByAggregateInput.input.ts",
      );
      const sampleAvgOrderByAggregateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleAvgOrderByAggregateInput.input.ts",
      );
      const sampleCountOrderByAggregateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleCountOrderByAggregateInput.input.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(sampleOrderByWithAggregationInputTSFile).toMatchSnapshot(
        "SampleOrderByWithAggregationInput",
      );
      expect(sampleMaxOrderByAggregateInputTSFile).toMatchSnapshot(
        "SampleMaxOrderByAggregateInput",
      );
      expect(sampleMinOrderByAggregateInputTSFile).toMatchSnapshot(
        "SampleMinOrderByAggregateInput",
      );
      expect(sampleAvgOrderByAggregateInputTSFile).toMatchSnapshot(
        "SampleAvgOrderByAggregateInput",
      );
      expect(sampleCountOrderByAggregateInputTSFile).toMatchSnapshot(
        "SampleCountOrderByAggregateInput",
      );
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });
});
