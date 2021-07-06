import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClickDataUpdateInput } from "../../../inputs/ClickDataUpdateInput.input";
import { ClickDataWhereUniqueInput } from "../../../inputs/ClickDataWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateClickDataArgs {
  @TypeGraphQL.Field(_type => ClickDataUpdateInput, {
    nullable: false
  })
  data!: ClickDataUpdateInput;

  @TypeGraphQL.Field(_type => ClickDataWhereUniqueInput, {
    nullable: false
  })
  where!: ClickDataWhereUniqueInput;
}
