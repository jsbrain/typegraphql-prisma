import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceWhereInput } from "../inputs/TrafficSourceWhereInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceRelationFilter {
  @TypeGraphQL.Field(_type => TrafficSourceWhereInput, {
    nullable: true
  })
  is?: TrafficSourceWhereInput | undefined;

  @TypeGraphQL.Field(_type => TrafficSourceWhereInput, {
    nullable: true
  })
  isNot?: TrafficSourceWhereInput | undefined;
}
