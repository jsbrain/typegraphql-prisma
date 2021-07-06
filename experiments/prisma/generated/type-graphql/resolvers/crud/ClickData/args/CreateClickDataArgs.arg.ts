import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClickDataCreateInput } from "../../../inputs/ClickDataCreateInput.input";

@TypeGraphQL.ArgsType()
export class CreateClickDataArgs {
  @TypeGraphQL.Field(_type => ClickDataCreateInput, {
    nullable: false
  })
  data!: ClickDataCreateInput;
}
