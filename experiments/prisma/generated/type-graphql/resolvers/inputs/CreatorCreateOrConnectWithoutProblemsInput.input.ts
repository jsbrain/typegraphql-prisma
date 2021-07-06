import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput.input";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateOrConnectWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: false
  })
  create!: CreatorCreateWithoutProblemsInput;
}
