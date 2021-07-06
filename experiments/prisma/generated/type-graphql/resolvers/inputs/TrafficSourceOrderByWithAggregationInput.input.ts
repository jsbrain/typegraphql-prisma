import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceCountOrderByAggregateInput } from "../inputs/TrafficSourceCountOrderByAggregateInput.input";
import { TrafficSourceMaxOrderByAggregateInput } from "../inputs/TrafficSourceMaxOrderByAggregateInput.input";
import { TrafficSourceMinOrderByAggregateInput } from "../inputs/TrafficSourceMinOrderByAggregateInput.input";
import { SortOrder } from "../../enums/SortOrder.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceOrderByWithAggregationInput {
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
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TrafficSourceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TrafficSourceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrafficSourceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TrafficSourceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrafficSourceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TrafficSourceMinOrderByAggregateInput | undefined;
}
