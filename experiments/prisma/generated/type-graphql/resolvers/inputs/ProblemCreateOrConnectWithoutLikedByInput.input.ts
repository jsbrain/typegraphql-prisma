import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemCreateWithoutLikedByInput } from "../inputs/ProblemCreateWithoutLikedByInput.input";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateOrConnectWithoutLikedByInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemCreateWithoutLikedByInput, {
    nullable: false
  })
  create!: ProblemCreateWithoutLikedByInput;
}
