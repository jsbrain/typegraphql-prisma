import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostUpdateInput } from "../../../inputs/PostUpdateInput.input";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdatePostArgs {
  @TypeGraphQL.Field(_type => PostUpdateInput, {
    nullable: false
  })
  data!: PostUpdateInput;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;
}
