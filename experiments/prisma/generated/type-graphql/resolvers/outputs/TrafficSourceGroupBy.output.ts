import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceCountAggregate } from "../outputs/TrafficSourceCountAggregate.output";
import { TrafficSourceMaxAggregate } from "../outputs/TrafficSourceMaxAggregate.output";
import { TrafficSourceMinAggregate } from "../outputs/TrafficSourceMinAggregate.output";
import { TrafficSourceName } from "../../enums/TrafficSourceName.enum";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TrafficSourceGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TrafficSourceName, {
    nullable: false
  })
  name!: "CONTENT_AD" | "OUTBRAIN" | "TABOOLA";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
