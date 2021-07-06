import * as TypeGraphQL from "type-graphql";

export enum FunnelAccountScalarFieldEnum {
  id = "id",
  type = "type",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  funnelId = "funnelId"
}
TypeGraphQL.registerEnumType(FunnelAccountScalarFieldEnum, {
  name: "FunnelAccountScalarFieldEnum",
  description: undefined,
});
