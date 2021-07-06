import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class FindUniqueCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;
}
