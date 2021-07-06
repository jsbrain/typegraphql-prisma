import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCreateInput } from "../../../inputs/PostCreateInput.input";
import { PostUpdateInput } from "../../../inputs/PostUpdateInput.input";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertPostArgs {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateInput, {
    nullable: false
  })
  create!: PostCreateInput;

  @TypeGraphQL.Field(_type => PostUpdateInput, {
    nullable: false
  })
  update!: PostUpdateInput;
}
