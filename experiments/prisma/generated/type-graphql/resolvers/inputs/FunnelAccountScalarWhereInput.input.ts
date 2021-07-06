import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter.input";
import { EnumAccountTypeFilter } from "../inputs/EnumAccountTypeFilter.input";
import { StringFilter } from "../inputs/StringFilter.input";
import { StringNullableFilter } from "../inputs/StringNullableFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountScalarWhereInput {
  @TypeGraphQL.Field(_type => [FunnelAccountScalarWhereInput], {
    nullable: true
  })
  AND?: FunnelAccountScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountScalarWhereInput], {
    nullable: true
  })
  OR?: FunnelAccountScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountScalarWhereInput], {
    nullable: true
  })
  NOT?: FunnelAccountScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  funnelId?: StringNullableFilter | undefined;
}
