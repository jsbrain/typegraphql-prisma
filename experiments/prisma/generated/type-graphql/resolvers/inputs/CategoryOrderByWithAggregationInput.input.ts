import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryAvgOrderByAggregateInput } from "../inputs/CategoryAvgOrderByAggregateInput.input";
import { CategoryCountOrderByAggregateInput } from "../inputs/CategoryCountOrderByAggregateInput.input";
import { CategoryMaxOrderByAggregateInput } from "../inputs/CategoryMaxOrderByAggregateInput.input";
import { CategoryMinOrderByAggregateInput } from "../inputs/CategoryMinOrderByAggregateInput.input";
import { CategorySumOrderByAggregateInput } from "../inputs/CategorySumOrderByAggregateInput.input";
import { SortOrder } from "../../enums/SortOrder.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CategoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CategoryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CategoryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategorySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CategorySumOrderByAggregateInput | undefined;
}
