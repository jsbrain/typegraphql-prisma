import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter.input";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter.input";
import { EnumPostKindNullableWithAggregatesFilter } from "../inputs/EnumPostKindNullableWithAggregatesFilter.input";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter.input";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter.input";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  uuid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  published?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  subtitle?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  content?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  authorId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  editorId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPostKindNullableWithAggregatesFilter, {
    nullable: true
  })
  kind?: EnumPostKindNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  metadata?: JsonWithAggregatesFilter | undefined;
}
