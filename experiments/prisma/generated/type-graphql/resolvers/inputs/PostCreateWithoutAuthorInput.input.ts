import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateNestedOneWithoutEditorPostsInput } from "../inputs/ClientCreateNestedOneWithoutEditorPostsInput.input";
import { PostKind } from "../../enums/PostKind.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subtitle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true
  })
  kind?: "BLOG" | "ADVERT" | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  metadata!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutEditorPostsInput, {
    nullable: true
  })
  editor?: ClientCreateNestedOneWithoutEditorPostsInput | undefined;
}
