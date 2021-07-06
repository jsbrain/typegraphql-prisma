import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCreateWithoutDomainsInput } from "../inputs/FunnelAccountCreateWithoutDomainsInput.input";
import { FunnelAccountWhereUniqueInput } from "../inputs/FunnelAccountWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountCreateOrConnectWithoutDomainsInput {
  @TypeGraphQL.Field(_type => FunnelAccountWhereUniqueInput, {
    nullable: false
  })
  where!: FunnelAccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => FunnelAccountCreateWithoutDomainsInput, {
    nullable: false
  })
  create!: FunnelAccountCreateWithoutDomainsInput;
}
