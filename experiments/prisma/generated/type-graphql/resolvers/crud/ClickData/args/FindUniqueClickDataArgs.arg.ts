import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClickDataWhereUniqueInput } from "../../../inputs/ClickDataWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class FindUniqueClickDataArgs {
  @TypeGraphQL.Field(_type => ClickDataWhereUniqueInput, {
    nullable: false
  })
  where!: ClickDataWhereUniqueInput;
}
