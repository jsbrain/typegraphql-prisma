import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCreateOrConnectWithoutDomainsInput } from "../inputs/FunnelAccountCreateOrConnectWithoutDomainsInput.input";
import { FunnelAccountCreateWithoutDomainsInput } from "../inputs/FunnelAccountCreateWithoutDomainsInput.input";
import { FunnelAccountWhereUniqueInput } from "../inputs/FunnelAccountWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountCreateNestedOneWithoutDomainsInput {
  @TypeGraphQL.Field(_type => FunnelAccountCreateWithoutDomainsInput, {
    nullable: true
  })
  create?: FunnelAccountCreateWithoutDomainsInput | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountCreateOrConnectWithoutDomainsInput, {
    nullable: true
  })
  connectOrCreate?: FunnelAccountCreateOrConnectWithoutDomainsInput | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountWhereUniqueInput, {
    nullable: true
  })
  connect?: FunnelAccountWhereUniqueInput | undefined;
}
