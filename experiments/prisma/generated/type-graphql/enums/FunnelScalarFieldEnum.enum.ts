import * as TypeGraphQL from "type-graphql";

export enum FunnelScalarFieldEnum {
  id = "id",
  name = "name",
  order = "order",
  trafficFirstSeen = "trafficFirstSeen",
  cards = "cards",
  browserProfile = "browserProfile",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(FunnelScalarFieldEnum, {
  name: "FunnelScalarFieldEnum",
  description: undefined,
});
