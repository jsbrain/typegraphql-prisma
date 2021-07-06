import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateWithoutLikesInput } from "../inputs/CreatorCreateWithoutLikesInput.input";
import { CreatorUpdateWithoutLikesInput } from "../inputs/CreatorUpdateWithoutLikesInput.input";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpsertWithWhereUniqueWithoutLikesInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: CreatorUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => CreatorCreateWithoutLikesInput, {
    nullable: false
  })
  create!: CreatorCreateWithoutLikesInput;
}
