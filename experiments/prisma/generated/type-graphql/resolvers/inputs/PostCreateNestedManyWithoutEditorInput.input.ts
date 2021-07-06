import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyEditorInputEnvelope } from "../inputs/PostCreateManyEditorInputEnvelope.input";
import { PostCreateOrConnectWithoutEditorInput } from "../inputs/PostCreateOrConnectWithoutEditorInput.input";
import { PostCreateWithoutEditorInput } from "../inputs/PostCreateWithoutEditorInput.input";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutEditorInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutEditorInput], {
    nullable: true
  })
  create?: PostCreateWithoutEditorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutEditorInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutEditorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyEditorInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyEditorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
