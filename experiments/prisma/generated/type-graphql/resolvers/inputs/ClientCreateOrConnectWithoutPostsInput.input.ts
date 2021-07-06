import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput.input";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClientCreateWithoutPostsInput, {
    nullable: false
  })
  create!: ClientCreateWithoutPostsInput;
}
