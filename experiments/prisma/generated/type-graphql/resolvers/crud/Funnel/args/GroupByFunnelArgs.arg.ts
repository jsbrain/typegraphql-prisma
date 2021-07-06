import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelOrderByWithAggregationInput } from "../../../inputs/FunnelOrderByWithAggregationInput.input";
import { FunnelScalarWhereWithAggregatesInput } from "../../../inputs/FunnelScalarWhereWithAggregatesInput.input";
import { FunnelWhereInput } from "../../../inputs/FunnelWhereInput.input";
import { FunnelScalarFieldEnum } from "../../../../enums/FunnelScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByFunnelArgs {
  @TypeGraphQL.Field(_type => FunnelWhereInput, {
    nullable: true
  })
  where?: FunnelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FunnelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FunnelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "order" | "trafficFirstSeen" | "cards" | "browserProfile" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => FunnelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FunnelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
