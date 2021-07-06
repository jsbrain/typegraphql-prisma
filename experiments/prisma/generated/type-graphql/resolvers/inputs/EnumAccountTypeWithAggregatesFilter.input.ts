import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAccountTypeFilter } from "../inputs/NestedEnumAccountTypeFilter.input";
import { NestedEnumAccountTypeWithAggregatesFilter } from "../inputs/NestedEnumAccountTypeWithAggregatesFilter.input";
import { NestedIntFilter } from "../inputs/NestedIntFilter.input";
import { AccountType } from "../../enums/AccountType.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumAccountTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumAccountTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumAccountTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAccountTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumAccountTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAccountTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumAccountTypeFilter | undefined;
}
