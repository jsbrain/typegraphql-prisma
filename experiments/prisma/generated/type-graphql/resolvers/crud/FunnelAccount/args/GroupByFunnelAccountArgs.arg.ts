import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelAccountOrderByWithAggregationInput } from "../../../inputs/FunnelAccountOrderByWithAggregationInput.input";
import { FunnelAccountScalarWhereWithAggregatesInput } from "../../../inputs/FunnelAccountScalarWhereWithAggregatesInput.input";
import { FunnelAccountWhereInput } from "../../../inputs/FunnelAccountWhereInput.input";
import { FunnelAccountScalarFieldEnum } from "../../../../enums/FunnelAccountScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByFunnelAccountArgs {
  @TypeGraphQL.Field(_type => FunnelAccountWhereInput, {
    nullable: true
  })
  where?: FunnelAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FunnelAccountOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "name" | "createdAt" | "updatedAt" | "funnelId">;

  @TypeGraphQL.Field(_type => FunnelAccountScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FunnelAccountScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
