import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput.input";
import { ProblemUpdateManyMutationInput } from "../inputs/ProblemUpdateManyMutationInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpdateManyWithWhereWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ProblemScalarWhereInput, {
    nullable: false
  })
  where!: ProblemScalarWhereInput;

  @TypeGraphQL.Field(_type => ProblemUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProblemUpdateManyMutationInput;
}
