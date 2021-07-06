import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter.input";
import { FloatFilter } from "../inputs/FloatFilter.input";
import { IntFilter } from "../inputs/IntFilter.input";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter.input";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter.input";
import { StringFilter } from "../inputs/StringFilter.input";
import { StringNullableFilter } from "../inputs/StringNullableFilter.input";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientWhereInput {
  @TypeGraphQL.Field(_type => [ClientWhereInput], {
    nullable: true
  })
  AND?: ClientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereInput], {
    nullable: true
  })
  OR?: ClientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereInput], {
    nullable: true
  })
  NOT?: ClientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  age?: IntFilter | undefined;

  balance?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  amount?: FloatFilter | undefined;

  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  editorPosts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  grades?: IntNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  aliases?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: StringNullableFilter | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: FloatFilter | undefined) {
    this.balance = balance;
  }

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostListRelationFilter | undefined) {
    this.posts = posts;
  }
}
