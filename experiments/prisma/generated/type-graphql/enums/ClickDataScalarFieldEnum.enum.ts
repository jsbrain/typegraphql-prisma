import * as TypeGraphQL from "type-graphql";

export enum ClickDataScalarFieldEnum {
  id = "id",
  trafficSourceId = "trafficSourceId",
  date = "date",
  campaignId = "campaignId",
  campaignName = "campaignName",
  adId = "adId",
  device = "device",
  country = "country",
  domainId = "domainId",
  clicks = "clicks",
  spend = "spend",
  excludedClicks = "excludedClicks",
  conversions = "conversions",
  ecpc = "ecpc",
  ecpa = "ecpa",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ClickDataScalarFieldEnum, {
  name: "ClickDataScalarFieldEnum",
  description: undefined,
});
