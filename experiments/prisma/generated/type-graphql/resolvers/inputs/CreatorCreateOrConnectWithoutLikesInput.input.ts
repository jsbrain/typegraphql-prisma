import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateWithoutLikesInput } from "../inputs/CreatorCreateWithoutLikesInput.input";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateOrConnectWithoutLikesInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorCreateWithoutLikesInput, {
    nullable: false
  })
  create!: CreatorCreateWithoutLikesInput;
}
