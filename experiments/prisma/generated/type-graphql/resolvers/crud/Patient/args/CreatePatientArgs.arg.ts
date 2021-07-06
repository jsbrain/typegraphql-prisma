import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientCreateInput } from "../../../inputs/PatientCreateInput.input";

@TypeGraphQL.ArgsType()
export class CreatePatientArgs {
  @TypeGraphQL.Field(_type => PatientCreateInput, {
    nullable: false
  })
  data!: PatientCreateInput;
}
