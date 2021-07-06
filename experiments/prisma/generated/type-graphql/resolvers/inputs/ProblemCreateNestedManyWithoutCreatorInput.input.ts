import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemCreateManyCreatorInputEnvelope } from "../inputs/ProblemCreateManyCreatorInputEnvelope.input";
import { ProblemCreateOrConnectWithoutCreatorInput } from "../inputs/ProblemCreateOrConnectWithoutCreatorInput.input";
import { ProblemCreateWithoutCreatorInput } from "../inputs/ProblemCreateWithoutCreatorInput.input";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [ProblemCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: ProblemCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => ProblemCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: ProblemCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  connect?: ProblemWhereUniqueInput[] | undefined;
}
