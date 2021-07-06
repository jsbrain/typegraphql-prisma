import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCountOrderByAggregateInput } from "../inputs/FunnelAccountCountOrderByAggregateInput.input";
import { FunnelAccountMaxOrderByAggregateInput } from "../inputs/FunnelAccountMaxOrderByAggregateInput.input";
import { FunnelAccountMinOrderByAggregateInput } from "../inputs/FunnelAccountMinOrderByAggregateInput.input";
import { SortOrder } from "../../enums/SortOrder.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  funnelId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FunnelAccountCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FunnelAccountMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FunnelAccountMinOrderByAggregateInput | undefined;
}
