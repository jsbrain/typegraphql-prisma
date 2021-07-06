import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCreateInput } from "../../../inputs/MovieCreateInput.input";
import { MovieUpdateInput } from "../../../inputs/MovieUpdateInput.input";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertMovieArgs {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCreateInput, {
    nullable: false
  })
  create!: MovieCreateInput;

  @TypeGraphQL.Field(_type => MovieUpdateInput, {
    nullable: false
  })
  update!: MovieUpdateInput;
}
