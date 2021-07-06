import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCreateWithoutDomainsInput } from "../inputs/FunnelAccountCreateWithoutDomainsInput.input";
import { FunnelAccountUpdateWithoutDomainsInput } from "../inputs/FunnelAccountUpdateWithoutDomainsInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountUpsertWithoutDomainsInput {
  @TypeGraphQL.Field(_type => FunnelAccountUpdateWithoutDomainsInput, {
    nullable: false
  })
  update!: FunnelAccountUpdateWithoutDomainsInput;

  @TypeGraphQL.Field(_type => FunnelAccountCreateWithoutDomainsInput, {
    nullable: false
  })
  create!: FunnelAccountCreateWithoutDomainsInput;
}
