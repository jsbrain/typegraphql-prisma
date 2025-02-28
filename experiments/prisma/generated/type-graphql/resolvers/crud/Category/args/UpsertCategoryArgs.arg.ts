import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput.input";
import { CategoryUpdateInput } from "../../../inputs/CategoryUpdateInput.input";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateInput, {
    nullable: false
  })
  create!: CategoryCreateInput;

  @TypeGraphQL.Field(_type => CategoryUpdateInput, {
    nullable: false
  })
  update!: CategoryUpdateInput;
}
