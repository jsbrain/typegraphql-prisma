import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClickDataOrderByWithAggregationInput } from "../../../inputs/ClickDataOrderByWithAggregationInput.input";
import { ClickDataScalarWhereWithAggregatesInput } from "../../../inputs/ClickDataScalarWhereWithAggregatesInput.input";
import { ClickDataWhereInput } from "../../../inputs/ClickDataWhereInput.input";
import { ClickDataScalarFieldEnum } from "../../../../enums/ClickDataScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByClickDataArgs {
  @TypeGraphQL.Field(_type => ClickDataWhereInput, {
    nullable: true
  })
  where?: ClickDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClickDataOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ClickDataOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClickDataScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "trafficSourceId" | "date" | "campaignId" | "campaignName" | "adId" | "device" | "country" | "domainId" | "clicks" | "spend" | "excludedClicks" | "conversions" | "ecpc" | "ecpa" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ClickDataScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ClickDataScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
