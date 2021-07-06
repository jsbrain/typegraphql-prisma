import * as TypeGraphQL from "type-graphql";

export enum AccountType {
  BING_ADS = "BING_ADS",
  GOOGLE_ADS = "GOOGLE_ADS",
  CLICKBANK = "CLICKBANK",
  MAXWEB = "MAXWEB"
}
TypeGraphQL.registerEnumType(AccountType, {
  name: "AccountType",
  description: undefined,
});
