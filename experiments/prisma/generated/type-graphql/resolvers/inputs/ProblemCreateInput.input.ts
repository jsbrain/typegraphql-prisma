import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateNestedManyWithoutLikesInput } from "../inputs/CreatorCreateNestedManyWithoutLikesInput.input";
import { CreatorCreateNestedOneWithoutProblemsInput } from "../inputs/CreatorCreateNestedOneWithoutProblemsInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @TypeGraphQL.Field(_type => CreatorCreateNestedManyWithoutLikesInput, {
    nullable: true
  })
  likedBy?: CreatorCreateNestedManyWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => CreatorCreateNestedOneWithoutProblemsInput, {
    nullable: true
  })
  creator?: CreatorCreateNestedOneWithoutProblemsInput | undefined;
}
