import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemUpdateWithoutLikedByInput } from "../inputs/ProblemUpdateWithoutLikedByInput.input";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpdateWithWhereUniqueWithoutLikedByInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemUpdateWithoutLikedByInput, {
    nullable: false
  })
  data!: ProblemUpdateWithoutLikedByInput;
}
