import { promises as fs } from "fs";
import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("outputs", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("regression-outputs");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  it("should properly generate output type classes", async () => {
    const schema = /* prisma */ `
      model Sample {
        intIdField     Int       @id @default(autoincrement())
        stringField    String
        floatField     Float
        booleanField   Boolean
        dateField      DateTime
        intArrayField  Int[]
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const aggregateSampleTSFile = await readGeneratedFile(
      "/resolvers/outputs/AggregateSample.output.ts",
    );
    const countAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleCountAggregate.output.ts",
    );
    const avgAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleAvgAggregate.output.ts",
    );
    const sumAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleSumAggregate.output.ts",
    );
    const minAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleMinAggregate.output.ts",
    );
    const maxAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleMaxAggregate.output.ts",
    );
    const affectedRowsOutputTSFile = await readGeneratedFile(
      "/resolvers/outputs/AffectedRowsOutput.output.ts",
    );
    const sampleGroupByTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleGroupBy.output.ts",
    );
    const outputsIndexTSFile = await readGeneratedFile(
      "/resolvers/outputs/index.ts",
    );

    expect(aggregateSampleTSFile).toMatchSnapshot("AggregateSample");
    expect(countAggregateTSFile).toMatchSnapshot("SampleCountAggregate");
    expect(avgAggregateTSFile).toMatchSnapshot("SampleAvgAggregate");
    expect(sumAggregateTSFile).toMatchSnapshot("SampleSumAggregate");
    expect(minAggregateTSFile).toMatchSnapshot("SampleMinAggregate");
    expect(maxAggregateTSFile).toMatchSnapshot("SampleMaxAggregate");
    expect(affectedRowsOutputTSFile).toMatchSnapshot("AffectedRowsOutput");
    expect(sampleGroupByTSFile).toMatchSnapshot("SampleGroupBy");
    expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
  });

  it("should properly generate aggregate classes for renamed model", async () => {
    const schema = /* prisma */ `
      /// @@TypeGraphQL.type(name: "Example")
      model Sample {
        intIdField    Int       @id @default(autoincrement())
        stringField   String
        floatField    Float
        booleanField  Boolean
        dateField     DateTime
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const aggregateExampleTSFile = await readGeneratedFile(
      "/resolvers/outputs/AggregateExample.output.ts",
    );
    const countAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleCountAggregate.output.ts",
    );
    const avgAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleAvgAggregate.output.ts",
    );
    const sumAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleSumAggregate.output.ts",
    );
    const minAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleMinAggregate.output.ts",
    );
    const maxAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleMaxAggregate.output.ts",
    );
    const outputsIndexTSFile = await readGeneratedFile(
      "/resolvers/outputs/index.ts",
    );

    expect(aggregateExampleTSFile).toMatchSnapshot("AggregateExample");
    expect(countAggregateTSFile).toMatchSnapshot("ExampleCountAggregate");
    expect(avgAggregateTSFile).toMatchSnapshot("ExampleAvgAggregate");
    expect(sumAggregateTSFile).toMatchSnapshot("ExampleSumAggregate");
    expect(minAggregateTSFile).toMatchSnapshot("ExampleMinAggregate");
    expect(maxAggregateTSFile).toMatchSnapshot("ExampleMaxAggregate");
    expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
  });

  it("should properly generate aggregate classes for model with lowercase name", async () => {
    const schema = /* prisma */ `
      model example {
        intIdField    Int       @id @default(autoincrement())
        stringField   String
        floatField    Float
        booleanField  Boolean
        dateField     DateTime
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const aggregateExampleTSFile = await readGeneratedFile(
      "/resolvers/outputs/AggregateExample.output.ts",
    );
    const countAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleCountAggregate.output.ts",
    );
    const avgAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleAvgAggregate.output.ts",
    );
    const sumAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleSumAggregate.output.ts",
    );
    const minAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleMinAggregate.output.ts",
    );
    const maxAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleMaxAggregate.output.ts",
    );
    const outputsIndexTSFile = await readGeneratedFile(
      "/resolvers/outputs/index.ts",
    );

    expect(aggregateExampleTSFile).toMatchSnapshot("AggregateExample");
    expect(countAggregateTSFile).toMatchSnapshot("ExampleCountAggregate");
    expect(avgAggregateTSFile).toMatchSnapshot("ExampleAvgAggregate");
    expect(sumAggregateTSFile).toMatchSnapshot("ExampleSumAggregate");
    expect(minAggregateTSFile).toMatchSnapshot("ExampleMinAggregate");
    expect(maxAggregateTSFile).toMatchSnapshot("ExampleMaxAggregate");
    expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
  });

  describe("when selectRelationCount preview feature is enabled", () => {
    it("should properly generate count classes for relation fields", async () => {
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
        previewFeatures: ["selectRelationCount"],
      });
      const firstModelCountTSFile = await readGeneratedFile(
        "/resolvers/outputs/FirstModelCount.output.ts",
      );
      const outputsIndexTSFile = await readGeneratedFile(
        "/resolvers/outputs/index.ts",
      );

      expect(firstModelCountTSFile).toMatchSnapshot("FirstModelCount");
      expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
    });
  });

  describe("when simpleResolvers option is enabled", () => {
    it("should properly generate output type classes", async () => {
      const schema = /* prisma */ `
        model Sample {
          intIdField    Int       @id @default(autoincrement())
          stringField   String
          floatField    Float
          booleanField  Boolean
          dateField     DateTime
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        simpleResolvers: true,
      });
      const aggregateSampleTSFile = await readGeneratedFile(
        "/resolvers/outputs/AggregateSample.output.ts",
      );
      const avgAggregateTSFile = await readGeneratedFile(
        "/resolvers/outputs/SampleAvgAggregate.output.ts",
      );
      const affectedRowsOutputTSFile = await readGeneratedFile(
        "/resolvers/outputs/AffectedRowsOutput.output.ts",
      );

      expect(aggregateSampleTSFile).toMatchSnapshot("AggregateSample");
      expect(avgAggregateTSFile).toMatchSnapshot("SampleAvgAggregate");
      expect(affectedRowsOutputTSFile).toMatchSnapshot("AffectedRowsOutput");
    });
  });
});
