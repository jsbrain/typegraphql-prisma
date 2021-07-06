import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelCreateWithoutLinkedAccountsInput } from "../inputs/FunnelCreateWithoutLinkedAccountsInput.input";
import { FunnelUpdateWithoutLinkedAccountsInput } from "../inputs/FunnelUpdateWithoutLinkedAccountsInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelUpsertWithoutLinkedAccountsInput {
  @TypeGraphQL.Field(_type => FunnelUpdateWithoutLinkedAccountsInput, {
    nullable: false
  })
  update!: FunnelUpdateWithoutLinkedAccountsInput;

  @TypeGraphQL.Field(_type => FunnelCreateWithoutLinkedAccountsInput, {
    nullable: false
  })
  create!: FunnelCreateWithoutLinkedAccountsInput;
}
