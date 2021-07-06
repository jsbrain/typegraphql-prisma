import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter.input";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter.input";
import { StringFilter } from "../inputs/StringFilter.input";
import { StringNullableFilter } from "../inputs/StringNullableFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DomainScalarWhereInput {
  @TypeGraphQL.Field(_type => [DomainScalarWhereInput], {
    nullable: true
  })
  AND?: DomainScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainScalarWhereInput], {
    nullable: true
  })
  OR?: DomainScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainScalarWhereInput], {
    nullable: true
  })
  NOT?: DomainScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  funnelAccountId?: StringNullableFilter | undefined;
}
