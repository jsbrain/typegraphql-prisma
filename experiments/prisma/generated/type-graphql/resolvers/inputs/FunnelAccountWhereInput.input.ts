import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter.input";
import { DomainListRelationFilter } from "../inputs/DomainListRelationFilter.input";
import { EnumAccountTypeFilter } from "../inputs/EnumAccountTypeFilter.input";
import { FunnelRelationFilter } from "../inputs/FunnelRelationFilter.input";
import { StringFilter } from "../inputs/StringFilter.input";
import { StringNullableFilter } from "../inputs/StringNullableFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountWhereInput {
  @TypeGraphQL.Field(_type => [FunnelAccountWhereInput], {
    nullable: true
  })
  AND?: FunnelAccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountWhereInput], {
    nullable: true
  })
  OR?: FunnelAccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountWhereInput], {
    nullable: true
  })
  NOT?: FunnelAccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAccountTypeFilter, {
    nullable: true
  })
  type?: EnumAccountTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DomainListRelationFilter, {
    nullable: true
  })
  domains?: DomainListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FunnelRelationFilter, {
    nullable: true
  })
  Funnel?: FunnelRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  funnelId?: StringNullableFilter | undefined;
}
