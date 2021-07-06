import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrafficSourceOrderByWithAggregationInput } from "../../../inputs/TrafficSourceOrderByWithAggregationInput.input";
import { TrafficSourceScalarWhereWithAggregatesInput } from "../../../inputs/TrafficSourceScalarWhereWithAggregatesInput.input";
import { TrafficSourceWhereInput } from "../../../inputs/TrafficSourceWhereInput.input";
import { TrafficSourceScalarFieldEnum } from "../../../../enums/TrafficSourceScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByTrafficSourceArgs {
  @TypeGraphQL.Field(_type => TrafficSourceWhereInput, {
    nullable: true
  })
  where?: TrafficSourceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrafficSourceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TrafficSourceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrafficSourceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => TrafficSourceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TrafficSourceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
