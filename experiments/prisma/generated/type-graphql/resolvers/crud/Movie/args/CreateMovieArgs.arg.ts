import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCreateInput } from "../../../inputs/MovieCreateInput.input";

@TypeGraphQL.ArgsType()
export class CreateMovieArgs {
  @TypeGraphQL.Field(_type => MovieCreateInput, {
    nullable: false
  })
  data!: MovieCreateInput;
}
