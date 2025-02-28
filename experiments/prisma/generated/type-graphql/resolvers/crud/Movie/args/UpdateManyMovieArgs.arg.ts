import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieUpdateManyMutationInput } from "../../../inputs/MovieUpdateManyMutationInput.input";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieArgs {
  @TypeGraphQL.Field(_type => MovieUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;
}
