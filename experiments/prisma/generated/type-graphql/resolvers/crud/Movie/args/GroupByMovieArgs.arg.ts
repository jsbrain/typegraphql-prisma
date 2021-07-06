import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieOrderByWithAggregationInput } from "../../../inputs/MovieOrderByWithAggregationInput.input";
import { MovieScalarWhereWithAggregatesInput } from "../../../inputs/MovieScalarWhereWithAggregatesInput.input";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput.input";
import { MovieScalarFieldEnum } from "../../../../enums/MovieScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByMovieArgs {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"directorFirstName" | "directorLastName" | "title">;

  @TypeGraphQL.Field(_type => MovieScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
