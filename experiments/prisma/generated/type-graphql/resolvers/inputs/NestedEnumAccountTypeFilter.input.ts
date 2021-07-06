import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { AccountType } from "../../enums/AccountType.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumAccountTypeFilter {
  @TypeGraphQL.Field(_type => AccountType, {
    nullable: true
  })
  equals?: "BING_ADS" | "GOOGLE_ADS" | "CLICKBANK" | "MAXWEB" | undefined;

  @TypeGraphQL.Field(_type => [AccountType], {
    nullable: true
  })
  in?: Array<"BING_ADS" | "GOOGLE_ADS" | "CLICKBANK" | "MAXWEB"> | undefined;

  @TypeGraphQL.Field(_type => [AccountType], {
    nullable: true
  })
  notIn?: Array<"BING_ADS" | "GOOGLE_ADS" | "CLICKBANK" | "MAXWEB"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAccountTypeFilter, {
    nullable: true
  })
  not?: NestedEnumAccountTypeFilter | undefined;
}
