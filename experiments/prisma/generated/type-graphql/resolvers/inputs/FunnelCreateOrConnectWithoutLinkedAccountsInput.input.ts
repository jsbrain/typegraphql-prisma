import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelCreateWithoutLinkedAccountsInput } from "../inputs/FunnelCreateWithoutLinkedAccountsInput.input";
import { FunnelWhereUniqueInput } from "../inputs/FunnelWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelCreateOrConnectWithoutLinkedAccountsInput {
  @TypeGraphQL.Field(_type => FunnelWhereUniqueInput, {
    nullable: false
  })
  where!: FunnelWhereUniqueInput;

  @TypeGraphQL.Field(_type => FunnelCreateWithoutLinkedAccountsInput, {
    nullable: false
  })
  create!: FunnelCreateWithoutLinkedAccountsInput;
}
