import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput.input";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: false
  })
  where!: DirectorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DirectorCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: DirectorCreateWithoutMoviesInput;
}
