import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter.input";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter.input";
import { FunnelAccountListRelationFilter } from "../inputs/FunnelAccountListRelationFilter.input";
import { IntNullableFilter } from "../inputs/IntNullableFilter.input";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter.input";
import { StringFilter } from "../inputs/StringFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelWhereInput {
  @TypeGraphQL.Field(_type => [FunnelWhereInput], {
    nullable: true
  })
  AND?: FunnelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelWhereInput], {
    nullable: true
  })
  OR?: FunnelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelWhereInput], {
    nullable: true
  })
  NOT?: FunnelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  order?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  trafficFirstSeen?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  cards?: IntNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  browserProfile?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountListRelationFilter, {
    nullable: true
  })
  linkedAccounts?: FunnelAccountListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
