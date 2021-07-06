import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieUpdateInput } from "../../../inputs/MovieUpdateInput.input";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateMovieArgs {
  @TypeGraphQL.Field(_type => MovieUpdateInput, {
    nullable: false
  })
  data!: MovieUpdateInput;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;
}
