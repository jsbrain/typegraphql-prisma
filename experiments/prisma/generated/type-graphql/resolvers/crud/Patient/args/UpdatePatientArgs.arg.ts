import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientUpdateInput } from "../../../inputs/PatientUpdateInput.input";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdatePatientArgs {
  @TypeGraphQL.Field(_type => PatientUpdateInput, {
    nullable: false
  })
  data!: PatientUpdateInput;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;
}
