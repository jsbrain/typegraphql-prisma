import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostUpdateManyMutationInput } from "../../../inputs/PostUpdateManyMutationInput.input";
import { PostWhereInput } from "../../../inputs/PostWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyPostArgs {
  @TypeGraphQL.Field(_type => PostUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
