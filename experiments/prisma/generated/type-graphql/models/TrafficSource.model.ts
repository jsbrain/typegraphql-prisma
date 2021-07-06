import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { ClickData } from "../models/ClickData.model";
import { TrafficSourceName } from "../enums/TrafficSourceName.enum";
import { TrafficSourceCount } from "../resolvers/outputs/TrafficSourceCount.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TrafficSource {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TrafficSourceName, {
    nullable: false
  })
  name!: "CONTENT_AD" | "OUTBRAIN" | "TABOOLA";

  clickData?: ClickData[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TrafficSourceCount, {
    nullable: true
  })
  _count?: TrafficSourceCount | null;
}
