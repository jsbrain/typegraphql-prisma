import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceCountAggregate } from "../outputs/TrafficSourceCountAggregate.output";
import { TrafficSourceMaxAggregate } from "../outputs/TrafficSourceMaxAggregate.output";
import { TrafficSourceMinAggregate } from "../outputs/TrafficSourceMinAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTrafficSource {
  @TypeGraphQL.Field(_type => TrafficSourceCountAggregate, {
    nullable: true
  })
  _count!: TrafficSourceCountAggregate | null;

  @TypeGraphQL.Field(_type => TrafficSourceMinAggregate, {
    nullable: true
  })
  _min!: TrafficSourceMinAggregate | null;

  @TypeGraphQL.Field(_type => TrafficSourceMaxAggregate, {
    nullable: true
  })
  _max!: TrafficSourceMaxAggregate | null;
}
