import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryUpdateManyMutationInput } from "../../../inputs/CategoryUpdateManyMutationInput.input";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: CategoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
