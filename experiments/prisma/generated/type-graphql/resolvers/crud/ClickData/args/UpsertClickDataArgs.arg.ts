import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClickDataCreateInput } from "../../../inputs/ClickDataCreateInput.input";
import { ClickDataUpdateInput } from "../../../inputs/ClickDataUpdateInput.input";
import { ClickDataWhereUniqueInput } from "../../../inputs/ClickDataWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertClickDataArgs {
  @TypeGraphQL.Field(_type => ClickDataWhereUniqueInput, {
    nullable: false
  })
  where!: ClickDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClickDataCreateInput, {
    nullable: false
  })
  create!: ClickDataCreateInput;

  @TypeGraphQL.Field(_type => ClickDataUpdateInput, {
    nullable: false
  })
  update!: ClickDataUpdateInput;
}
