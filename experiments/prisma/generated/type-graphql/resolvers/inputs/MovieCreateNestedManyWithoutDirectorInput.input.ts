import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateManyDirectorInputEnvelope } from "../inputs/MovieCreateManyDirectorInputEnvelope.input";
import { MovieCreateOrConnectWithoutDirectorInput } from "../inputs/MovieCreateOrConnectWithoutDirectorInput.input";
import { MovieCreateWithoutDirectorInput } from "../inputs/MovieCreateWithoutDirectorInput.input";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateNestedManyWithoutDirectorInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutDirectorInput], {
    nullable: true
  })
  create?: MovieCreateWithoutDirectorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutDirectorInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieCreateManyDirectorInputEnvelope, {
    nullable: true
  })
  createMany?: MovieCreateManyDirectorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
