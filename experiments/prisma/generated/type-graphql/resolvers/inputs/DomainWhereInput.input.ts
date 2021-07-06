import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter.input";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter.input";
import { FunnelAccountRelationFilter } from "../inputs/FunnelAccountRelationFilter.input";
import { StringFilter } from "../inputs/StringFilter.input";
import { StringNullableFilter } from "../inputs/StringNullableFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DomainWhereInput {
  @TypeGraphQL.Field(_type => [DomainWhereInput], {
    nullable: true
  })
  AND?: DomainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainWhereInput], {
    nullable: true
  })
  OR?: DomainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainWhereInput], {
    nullable: true
  })
  NOT?: DomainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  state?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  creationDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountRelationFilter, {
    nullable: true
  })
  FunnelAccount?: FunnelAccountRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  funnelAccountId?: StringNullableFilter | undefined;
}
