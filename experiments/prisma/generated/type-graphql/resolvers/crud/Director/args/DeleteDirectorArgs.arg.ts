import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class DeleteDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: false
  })
  where!: DirectorWhereUniqueInput;
}
