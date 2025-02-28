import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostOrderByWithAggregationInput } from "../../../inputs/PostOrderByWithAggregationInput.input";
import { PostScalarWhereWithAggregatesInput } from "../../../inputs/PostScalarWhereWithAggregatesInput.input";
import { PostWhereInput } from "../../../inputs/PostWhereInput.input";
import { PostScalarFieldEnum } from "../../../../enums/PostScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByPostArgs {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"uuid" | "createdAt" | "updatedAt" | "published" | "title" | "subtitle" | "content" | "authorId" | "editorId" | "kind" | "metadata">;

  @TypeGraphQL.Field(_type => PostScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
