import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCountAggregate } from "../outputs/FunnelAccountCountAggregate.output";
import { FunnelAccountMaxAggregate } from "../outputs/FunnelAccountMaxAggregate.output";
import { FunnelAccountMinAggregate } from "../outputs/FunnelAccountMinAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateFunnelAccount {
  @TypeGraphQL.Field(_type => FunnelAccountCountAggregate, {
    nullable: true
  })
  _count!: FunnelAccountCountAggregate | null;

  @TypeGraphQL.Field(_type => FunnelAccountMinAggregate, {
    nullable: true
  })
  _min!: FunnelAccountMinAggregate | null;

  @TypeGraphQL.Field(_type => FunnelAccountMaxAggregate, {
    nullable: true
  })
  _max!: FunnelAccountMaxAggregate | null;
}
