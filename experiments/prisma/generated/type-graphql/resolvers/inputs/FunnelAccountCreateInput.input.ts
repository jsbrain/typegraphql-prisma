import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DomainCreateNestedManyWithoutFunnelAccountInput } from "../inputs/DomainCreateNestedManyWithoutFunnelAccountInput.input";
import { FunnelCreateNestedOneWithoutLinkedAccountsInput } from "../inputs/FunnelCreateNestedOneWithoutLinkedAccountsInput.input";
import { AccountType } from "../../enums/AccountType.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => AccountType, {
    nullable: false
  })
  type!: "BING_ADS" | "GOOGLE_ADS" | "CLICKBANK" | "MAXWEB";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => DomainCreateNestedManyWithoutFunnelAccountInput, {
    nullable: true
  })
  domains?: DomainCreateNestedManyWithoutFunnelAccountInput | undefined;

  @TypeGraphQL.Field(_type => FunnelCreateNestedOneWithoutLinkedAccountsInput, {
    nullable: true
  })
  Funnel?: FunnelCreateNestedOneWithoutLinkedAccountsInput | undefined;
}
