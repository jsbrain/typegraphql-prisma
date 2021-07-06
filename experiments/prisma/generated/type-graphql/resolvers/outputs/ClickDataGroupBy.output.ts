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
export class ClickDataGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  trafficSourceId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  campaignId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  campaignName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  adId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  device!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  domainId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  clicks!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  spend!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  excludedClicks!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  conversions!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  ecpc!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  ecpa!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
