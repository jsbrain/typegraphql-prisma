import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorOrderByWithAggregationInput } from "../../../inputs/CreatorOrderByWithAggregationInput.input";
import { CreatorScalarWhereWithAggregatesInput } from "../../../inputs/CreatorScalarWhereWithAggregatesInput.input";
import { CreatorWhereInput } from "../../../inputs/CreatorWhereInput.input";
import { CreatorScalarFieldEnum } from "../../../../enums/CreatorScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CreatorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CreatorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => CreatorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CreatorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
