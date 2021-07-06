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
export class FunnelGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  trafficFirstSeen!: Date | null;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  cards!: number[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  browserProfile!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
