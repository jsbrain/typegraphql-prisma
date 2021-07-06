import * as TypeGraphQL from "type-graphql";

export enum DomainScalarFieldEnum {
  id = "id",
  name = "name",
  state = "state",
  creationDate = "creationDate",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  funnelAccountId = "funnelAccountId"
}
TypeGraphQL.registerEnumType(DomainScalarFieldEnum, {
  name: "DomainScalarFieldEnum",
  description: undefined,
});
