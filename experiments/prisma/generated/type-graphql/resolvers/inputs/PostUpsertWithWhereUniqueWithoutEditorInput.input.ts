import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutEditorInput } from "../inputs/PostCreateWithoutEditorInput.input";
import { PostUpdateWithoutEditorInput } from "../inputs/PostUpdateWithoutEditorInput.input";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutEditorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutEditorInput, {
    nullable: false
  })
  update!: PostUpdateWithoutEditorInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutEditorInput, {
    nullable: false
  })
  create!: PostCreateWithoutEditorInput;
}
