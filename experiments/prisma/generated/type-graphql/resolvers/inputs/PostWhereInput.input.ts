import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter.input";
import { ClientRelationFilter } from "../inputs/ClientRelationFilter.input";
import { DateTimeFilter } from "../inputs/DateTimeFilter.input";
import { EnumPostKindNullableFilter } from "../inputs/EnumPostKindNullableFilter.input";
import { IntFilter } from "../inputs/IntFilter.input";
import { IntNullableFilter } from "../inputs/IntNullableFilter.input";
import { JsonFilter } from "../inputs/JsonFilter.input";
import { StringFilter } from "../inputs/StringFilter.input";
import { StringNullableFilter } from "../inputs/StringNullableFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostWhereInput {
  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  AND?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  OR?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  NOT?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  published?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  subtitle?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  content?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ClientRelationFilter, {
    nullable: true
  })
  author?: ClientRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  authorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ClientRelationFilter, {
    nullable: true
  })
  editor?: ClientRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  editorId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPostKindNullableFilter, {
    nullable: true
  })
  kind?: EnumPostKindNullableFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  metadata?: JsonFilter | undefined;
}
