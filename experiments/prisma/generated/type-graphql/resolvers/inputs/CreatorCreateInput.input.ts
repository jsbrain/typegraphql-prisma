import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemCreateNestedManyWithoutCreatorInput } from "../inputs/ProblemCreateNestedManyWithoutCreatorInput.input";
import { ProblemCreateNestedManyWithoutLikedByInput } from "../inputs/ProblemCreateNestedManyWithoutLikedByInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProblemCreateNestedManyWithoutLikedByInput, {
    nullable: true
  })
  likes?: ProblemCreateNestedManyWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => ProblemCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  problems?: ProblemCreateNestedManyWithoutCreatorInput | undefined;
}
