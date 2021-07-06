import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput.input";
import { ClientUpdateWithoutPostsInput } from "../inputs/ClientUpdateWithoutPostsInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: ClientUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => ClientCreateWithoutPostsInput, {
    nullable: false
  })
  create!: ClientCreateWithoutPostsInput;
}
