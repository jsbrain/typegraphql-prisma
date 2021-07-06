import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter.input";
import { EnumAccountTypeWithAggregatesFilter } from "../inputs/EnumAccountTypeWithAggregatesFilter.input";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FunnelAccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FunnelAccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FunnelAccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FunnelAccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAccountTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumAccountTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  funnelId?: StringNullableWithAggregatesFilter | undefined;
}
