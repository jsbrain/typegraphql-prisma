import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateManyDirectorInputEnvelope } from "../inputs/MovieCreateManyDirectorInputEnvelope.input";
import { MovieCreateOrConnectWithoutDirectorInput } from "../inputs/MovieCreateOrConnectWithoutDirectorInput.input";
import { MovieCreateWithoutDirectorInput } from "../inputs/MovieCreateWithoutDirectorInput.input";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput.input";
import { MovieUpdateManyWithWhereWithoutDirectorInput } from "../inputs/MovieUpdateManyWithWhereWithoutDirectorInput.input";
import { MovieUpdateWithWhereUniqueWithoutDirectorInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutDirectorInput.input";
import { MovieUpsertWithWhereUniqueWithoutDirectorInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutDirectorInput.input";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithoutDirectorInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutDirectorInput], {
    nullable: true
  })
  create?: MovieCreateWithoutDirectorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutDirectorInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutDirectorInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutDirectorInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieCreateManyDirectorInputEnvelope, {
    nullable: true
  })
  createMany?: MovieCreateManyDirectorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutDirectorInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutDirectorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutDirectorInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutDirectorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
