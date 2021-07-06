import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemUpdateManyMutationInput } from "../../../inputs/ProblemUpdateManyMutationInput.input";
import { ProblemWhereInput } from "../../../inputs/ProblemWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyProblemArgs {
  @TypeGraphQL.Field(_type => ProblemUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProblemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProblemWhereInput, {
    nullable: true
  })
  where?: ProblemWhereInput | undefined;
}
