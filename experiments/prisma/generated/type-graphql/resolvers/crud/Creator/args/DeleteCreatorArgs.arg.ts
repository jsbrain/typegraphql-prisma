import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class DeleteCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;
}
