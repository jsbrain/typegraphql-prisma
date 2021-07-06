import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelCreateOrConnectWithoutLinkedAccountsInput } from "../inputs/FunnelCreateOrConnectWithoutLinkedAccountsInput.input";
import { FunnelCreateWithoutLinkedAccountsInput } from "../inputs/FunnelCreateWithoutLinkedAccountsInput.input";
import { FunnelWhereUniqueInput } from "../inputs/FunnelWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelCreateNestedOneWithoutLinkedAccountsInput {
  @TypeGraphQL.Field(_type => FunnelCreateWithoutLinkedAccountsInput, {
    nullable: true
  })
  create?: FunnelCreateWithoutLinkedAccountsInput | undefined;

  @TypeGraphQL.Field(_type => FunnelCreateOrConnectWithoutLinkedAccountsInput, {
    nullable: true
  })
  connectOrCreate?: FunnelCreateOrConnectWithoutLinkedAccountsInput | undefined;

  @TypeGraphQL.Field(_type => FunnelWhereUniqueInput, {
    nullable: true
  })
  connect?: FunnelWhereUniqueInput | undefined;
}
