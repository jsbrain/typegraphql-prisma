import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter.input";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter.input";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DomainScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DomainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DomainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DomainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DomainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  state?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  creationDate?: DateTimeNullableWithAggregatesFilter | undefined;

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
  funnelAccountId?: StringNullableWithAggregatesFilter | undefined;
}
