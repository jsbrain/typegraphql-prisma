import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostOrderByWithRelationInput } from "../../../inputs/PostOrderByWithRelationInput.input";
import { PostWhereInput } from "../../../inputs/PostWhereInput.input";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput.input";
import { PostScalarFieldEnum } from "../../../../enums/PostScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class ClientPostsArgs {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PostScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"uuid" | "createdAt" | "updatedAt" | "published" | "title" | "subtitle" | "content" | "authorId" | "editorId" | "kind" | "metadata"> | undefined;
}
