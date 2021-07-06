import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAvgAggregate } from "../outputs/FunnelAvgAggregate.output";
import { FunnelCountAggregate } from "../outputs/FunnelCountAggregate.output";
import { FunnelMaxAggregate } from "../outputs/FunnelMaxAggregate.output";
import { FunnelMinAggregate } from "../outputs/FunnelMinAggregate.output";
import { FunnelSumAggregate } from "../outputs/FunnelSumAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateFunnel {
  @TypeGraphQL.Field(_type => FunnelCountAggregate, {
    nullable: true
  })
  _count!: FunnelCountAggregate | null;

  @TypeGraphQL.Field(_type => FunnelAvgAggregate, {
    nullable: true
  })
  _avg!: FunnelAvgAggregate | null;

  @TypeGraphQL.Field(_type => FunnelSumAggregate, {
    nullable: true
  })
  _sum!: FunnelSumAggregate | null;

  @TypeGraphQL.Field(_type => FunnelMinAggregate, {
    nullable: true
  })
  _min!: FunnelMinAggregate | null;

  @TypeGraphQL.Field(_type => FunnelMaxAggregate, {
    nullable: true
  })
  _max!: FunnelMaxAggregate | null;
}
