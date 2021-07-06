import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceName } from "../../enums/TrafficSourceName.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumTrafficSourceNameFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTrafficSourceNameFilter, {
    nullable: true
  })
  not?: NestedEnumTrafficSourceNameFilter | undefined;
}
