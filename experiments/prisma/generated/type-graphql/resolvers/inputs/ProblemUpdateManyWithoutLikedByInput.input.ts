import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemCreateOrConnectWithoutLikedByInput } from "../inputs/ProblemCreateOrConnectWithoutLikedByInput.input";
import { ProblemCreateWithoutLikedByInput } from "../inputs/ProblemCreateWithoutLikedByInput.input";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput.input";
import { ProblemUpdateManyWithWhereWithoutLikedByInput } from "../inputs/ProblemUpdateManyWithWhereWithoutLikedByInput.input";
import { ProblemUpdateWithWhereUniqueWithoutLikedByInput } from "../inputs/ProblemUpdateWithWhereUniqueWithoutLikedByInput.input";
import { ProblemUpsertWithWhereUniqueWithoutLikedByInput } from "../inputs/ProblemUpsertWithWhereUniqueWithoutLikedByInput.input";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpdateManyWithoutLikedByInput {
  @TypeGraphQL.Field(_type => [ProblemCreateWithoutLikedByInput], {
    nullable: true
  })
  create?: ProblemCreateWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemCreateOrConnectWithoutLikedByInput], {
    nullable: true
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpsertWithWhereUniqueWithoutLikedByInput], {
    nullable: true
  })
  upsert?: ProblemUpsertWithWhereUniqueWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  connect?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  set?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  delete?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpdateWithWhereUniqueWithoutLikedByInput], {
    nullable: true
  })
  update?: ProblemUpdateWithWhereUniqueWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpdateManyWithWhereWithoutLikedByInput], {
    nullable: true
  })
  updateMany?: ProblemUpdateManyWithWhereWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProblemScalarWhereInput[] | undefined;
}
