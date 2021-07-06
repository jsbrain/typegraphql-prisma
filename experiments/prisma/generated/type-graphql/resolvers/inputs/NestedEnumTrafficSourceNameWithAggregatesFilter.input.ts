import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTrafficSourceNameFilter } from "../inputs/NestedEnumTrafficSourceNameFilter.input";
import { NestedIntFilter } from "../inputs/NestedIntFilter.input";
import { TrafficSourceName } from "../../enums/TrafficSourceName.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumTrafficSourceNameWithAggregatesFilter {
  @TypeGraphQL.Field(_type => TrafficSourceName, {
    nullable: true
  })
  equals?: "CONTENT_AD" | "OUTBRAIN" | "TABOOLA" | undefined;

  @TypeGraphQL.Field(_type => [TrafficSourceName], {
    nullable: true
  })
  in?: Array<"CONTENT_AD" | "OUTBRAIN" | "TABOOLA"> | undefined;

  @TypeGraphQL.Field(_type => [TrafficSourceName], {
    nullable: true
  })
  notIn?: Array<"CONTENT_AD" | "OUTBRAIN" | "TABOOLA"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTrafficSourceNameWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTrafficSourceNameWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTrafficSourceNameFilter, {
    nullable: true
  })
  _min?: NestedEnumTrafficSourceNameFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTrafficSourceNameFilter, {
    nullable: true
  })
  _max?: NestedEnumTrafficSourceNameFilter | undefined;
}
