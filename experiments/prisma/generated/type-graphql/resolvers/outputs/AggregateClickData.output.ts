import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataAvgAggregate } from "../outputs/ClickDataAvgAggregate.output";
import { ClickDataCountAggregate } from "../outputs/ClickDataCountAggregate.output";
import { ClickDataMaxAggregate } from "../outputs/ClickDataMaxAggregate.output";
import { ClickDataMinAggregate } from "../outputs/ClickDataMinAggregate.output";
import { ClickDataSumAggregate } from "../outputs/ClickDataSumAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateClickData {
  @TypeGraphQL.Field(_type => ClickDataCountAggregate, {
    nullable: true
  })
  _count!: ClickDataCountAggregate | null;

  @TypeGraphQL.Field(_type => ClickDataAvgAggregate, {
    nullable: true
  })
  _avg!: ClickDataAvgAggregate | null;

  @TypeGraphQL.Field(_type => ClickDataSumAggregate, {
    nullable: true
  })
  _sum!: ClickDataSumAggregate | null;

  @TypeGraphQL.Field(_type => ClickDataMinAggregate, {
    nullable: true
  })
  _min!: ClickDataMinAggregate | null;

  @TypeGraphQL.Field(_type => ClickDataMaxAggregate, {
    nullable: true
  })
  _max!: ClickDataMaxAggregate | null;
}
