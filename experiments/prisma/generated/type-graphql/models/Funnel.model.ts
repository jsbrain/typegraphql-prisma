import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { FunnelAccount } from "../models/FunnelAccount.model";
import { FunnelCount } from "../resolvers/outputs/FunnelCount.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Funnel {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  /** Order for list sorting */
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: "Order for list sorting"
  })
  order?: number | null;

  /** Used for later on analytics and data crunching */
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: "Used for later on analytics and data crunching"
  })
  trafficFirstSeen?: Date | null;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: false
  })
  cards!: number[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  browserProfile!: string;

  /** Accounts linked to the funnel, to track all belonging settings etc. */
  linkedAccounts?: FunnelAccount[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => FunnelCount, {
    nullable: true
  })
  _count?: FunnelCount | null;
}
