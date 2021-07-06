import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAvgOrderByAggregateInput } from "../inputs/FunnelAvgOrderByAggregateInput.input";
import { FunnelCountOrderByAggregateInput } from "../inputs/FunnelCountOrderByAggregateInput.input";
import { FunnelMaxOrderByAggregateInput } from "../inputs/FunnelMaxOrderByAggregateInput.input";
import { FunnelMinOrderByAggregateInput } from "../inputs/FunnelMinOrderByAggregateInput.input";
import { FunnelSumOrderByAggregateInput } from "../inputs/FunnelSumOrderByAggregateInput.input";
import { SortOrder } from "../../enums/SortOrder.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trafficFirstSeen?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cards?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  browserProfile?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FunnelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FunnelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FunnelAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FunnelAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FunnelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FunnelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FunnelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FunnelMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FunnelSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FunnelSumOrderByAggregateInput | undefined;
}
