import * as TypeGraphQL from "type-graphql";

export enum TrafficSourceScalarFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(TrafficSourceScalarFieldEnum, {
  name: "TrafficSourceScalarFieldEnum",
  description: undefined,
});
