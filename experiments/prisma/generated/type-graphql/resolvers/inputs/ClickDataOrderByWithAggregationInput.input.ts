import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataAvgOrderByAggregateInput } from "../inputs/ClickDataAvgOrderByAggregateInput.input";
import { ClickDataCountOrderByAggregateInput } from "../inputs/ClickDataCountOrderByAggregateInput.input";
import { ClickDataMaxOrderByAggregateInput } from "../inputs/ClickDataMaxOrderByAggregateInput.input";
import { ClickDataMinOrderByAggregateInput } from "../inputs/ClickDataMinOrderByAggregateInput.input";
import { ClickDataSumOrderByAggregateInput } from "../inputs/ClickDataSumOrderByAggregateInput.input";
import { SortOrder } from "../../enums/SortOrder.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClickDataOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trafficSourceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  campaignId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  campaignName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  adId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  device?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  domainId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  clicks?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  spend?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  excludedClicks?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  conversions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ecpc?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ecpa?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ClickDataCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ClickDataCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClickDataAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ClickDataAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClickDataMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ClickDataMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClickDataMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ClickDataMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClickDataSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ClickDataSumOrderByAggregateInput | undefined;
}
