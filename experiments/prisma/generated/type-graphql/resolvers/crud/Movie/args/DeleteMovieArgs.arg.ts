import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class DeleteMovieArgs {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;
}
