import { DMMF as PrismaDMMF } from "@prisma/client/runtime";
import { GenerateCodeOptions } from "../options";
import {
  generateRelationModel,
  transformBareModel,
  transformEnums,
  transformMappings,
  transformModelWithFields,
  transformSchema,
} from "./transform";
import { DMMF } from "./types";

export class DmmfDocument implements DMMF.Document {
  private models: DMMF.Model[];
  datamodel: DMMF.Datamodel;
  schema: DMMF.Schema;
  enums: DMMF.Enum[];
  modelMappings: DMMF.ModelMapping[];
  relationModels: DMMF.RelationModel[];

  constructor(
    { datamodel, schema, mappings }: PrismaDMMF.Document,
    public options: GenerateCodeOptions,
  ) {
    const enumTypes = [
      ...(schema.enumTypes.prisma ?? []),
      ...(schema.enumTypes.model ?? []),
    ];

    // transform bare model without fields
    this.models = datamodel.models.map(transformBareModel);
    // transform enums before model fields to map enum types to enum values string union
    this.enums = enumTypes.map(transformEnums(this));
    // then transform once again to map the fields (it requires mapped model type names)
    this.models = datamodel.models.map(transformModelWithFields(this));
    // transform enums again to map renamed fields
    this.enums = enumTypes.map(transformEnums(this));

    this.datamodel = {
      models: this.models,
      enums: datamodel.enums.map(transformEnums(this)),
    };
    this.schema = {
      ...transformSchema(schema, this),
      enums: this.enums,
    };
    this.modelMappings = transformMappings(
      mappings.modelOperations,
      this,
      options,
    );
    this.relationModels = this.models
      .filter(model =>
        model.fields.some(
          field => field.relationName !== undefined && !field.isOmitted.output,
        ),
      )
      .map(generateRelationModel(this));
  }

  getModelTypeName(modelName: string): string | undefined {
    return this.models.find(
      it => it.name.toLocaleLowerCase() === modelName.toLocaleLowerCase(),
    )?.typeName;
  }

  isModelName(typeName: string): boolean {
    return this.models.some(it => it.name === typeName);
  }

  isModelTypeName(typeName: string): boolean {
    return this.models.some(it => it.typeName === typeName);
  }

  getModelFieldAlias(modelName: string, fieldName: string): string | undefined {
    const model = this.models.find(it => it.name === modelName);
    return model?.fields.find(it => it.name === fieldName)?.typeFieldAlias;
  }
}
