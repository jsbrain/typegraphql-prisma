import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieOrderByWithRelationInput } from "../../../inputs/MovieOrderByWithRelationInput.input";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput.input";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput.input";
import { MovieScalarFieldEnum } from "../../../../enums/MovieScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class FindManyMovieArgs {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MovieOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"directorFirstName" | "directorLastName" | "title"> | undefined;
}
