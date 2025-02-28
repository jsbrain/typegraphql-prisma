import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryOrderByWithAggregationInput } from "../../../inputs/CategoryOrderByWithAggregationInput.input";
import { CategoryScalarWhereWithAggregatesInput } from "../../../inputs/CategoryScalarWhereWithAggregatesInput.input";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput.input";
import { CategoryScalarFieldEnum } from "../../../../enums/CategoryScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CategoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"name" | "slug" | "number">;

  @TypeGraphQL.Field(_type => CategoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CategoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
