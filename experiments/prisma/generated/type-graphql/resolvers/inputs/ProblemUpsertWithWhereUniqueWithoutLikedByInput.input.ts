import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemCreateWithoutLikedByInput } from "../inputs/ProblemCreateWithoutLikedByInput.input";
import { ProblemUpdateWithoutLikedByInput } from "../inputs/ProblemUpdateWithoutLikedByInput.input";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpsertWithWhereUniqueWithoutLikedByInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemUpdateWithoutLikedByInput, {
    nullable: false
  })
  update!: ProblemUpdateWithoutLikedByInput;

  @TypeGraphQL.Field(_type => ProblemCreateWithoutLikedByInput, {
    nullable: false
  })
  create!: ProblemCreateWithoutLikedByInput;
}
