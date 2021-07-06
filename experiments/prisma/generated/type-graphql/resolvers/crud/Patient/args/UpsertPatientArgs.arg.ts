import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientCreateInput } from "../../../inputs/PatientCreateInput.input";
import { PatientUpdateInput } from "../../../inputs/PatientUpdateInput.input";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertPatientArgs {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientCreateInput, {
    nullable: false
  })
  create!: PatientCreateInput;

  @TypeGraphQL.Field(_type => PatientUpdateInput, {
    nullable: false
  })
  update!: PatientUpdateInput;
}
