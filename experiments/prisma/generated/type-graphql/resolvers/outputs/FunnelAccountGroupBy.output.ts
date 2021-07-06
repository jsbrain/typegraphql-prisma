import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCountAggregate } from "../outputs/FunnelAccountCountAggregate.output";
import { FunnelAccountMaxAggregate } from "../outputs/FunnelAccountMaxAggregate.output";
import { FunnelAccountMinAggregate } from "../outputs/FunnelAccountMinAggregate.output";
import { AccountType } from "../../enums/AccountType.enum";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class FunnelAccountGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => AccountType, {
    nullable: false
  })
  type!: "BING_ADS" | "GOOGLE_ADS" | "CLICKBANK" | "MAXWEB";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  funnelId!: string | null;

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
