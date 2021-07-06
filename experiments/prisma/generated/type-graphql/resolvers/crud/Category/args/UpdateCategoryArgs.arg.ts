import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryUpdateInput } from "../../../inputs/CategoryUpdateInput.input";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryUpdateInput, {
    nullable: false
  })
  data!: CategoryUpdateInput;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;
}
