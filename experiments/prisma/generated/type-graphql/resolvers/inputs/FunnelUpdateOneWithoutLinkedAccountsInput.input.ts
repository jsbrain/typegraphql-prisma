import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelCreateOrConnectWithoutLinkedAccountsInput } from "../inputs/FunnelCreateOrConnectWithoutLinkedAccountsInput.input";
import { FunnelCreateWithoutLinkedAccountsInput } from "../inputs/FunnelCreateWithoutLinkedAccountsInput.input";
import { FunnelUpdateWithoutLinkedAccountsInput } from "../inputs/FunnelUpdateWithoutLinkedAccountsInput.input";
import { FunnelUpsertWithoutLinkedAccountsInput } from "../inputs/FunnelUpsertWithoutLinkedAccountsInput.input";
import { FunnelWhereUniqueInput } from "../inputs/FunnelWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelUpdateOneWithoutLinkedAccountsInput {
  @TypeGraphQL.Field(_type => FunnelCreateWithoutLinkedAccountsInput, {
    nullable: true
  })
  create?: FunnelCreateWithoutLinkedAccountsInput | undefined;

  @TypeGraphQL.Field(_type => FunnelCreateOrConnectWithoutLinkedAccountsInput, {
    nullable: true
  })
  connectOrCreate?: FunnelCreateOrConnectWithoutLinkedAccountsInput | undefined;

  @TypeGraphQL.Field(_type => FunnelUpsertWithoutLinkedAccountsInput, {
    nullable: true
  })
  upsert?: FunnelUpsertWithoutLinkedAccountsInput | undefined;

  @TypeGraphQL.Field(_type => FunnelWhereUniqueInput, {
    nullable: true
  })
  connect?: FunnelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FunnelUpdateWithoutLinkedAccountsInput, {
    nullable: true
  })
  update?: FunnelUpdateWithoutLinkedAccountsInput | undefined;
}
