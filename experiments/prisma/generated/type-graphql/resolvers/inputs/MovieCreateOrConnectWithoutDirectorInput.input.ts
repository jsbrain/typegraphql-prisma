import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutDirectorInput } from "../inputs/MovieCreateWithoutDirectorInput.input";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateOrConnectWithoutDirectorInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutDirectorInput, {
    nullable: false
  })
  create!: MovieCreateWithoutDirectorInput;
}
