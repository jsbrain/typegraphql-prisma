import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { EnumRoleWithAggregatesFilter } from "../inputs/EnumRoleWithAggregatesFilter.input";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter.input";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter.input";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter.input";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter.input";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ClientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ClientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ClientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ClientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  age?: IntWithAggregatesFilter | undefined;

  balance?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  amount?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleWithAggregatesFilter, {
    nullable: true
  })
  role?: EnumRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  grades?: IntNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  aliases?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: StringNullableWithAggregatesFilter | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: FloatWithAggregatesFilter | undefined) {
    this.balance = balance;
  }
}
