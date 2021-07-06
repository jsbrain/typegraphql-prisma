import * as TypeGraphQL from "type-graphql";

export enum TrafficSourceName {
  CONTENT_AD = "CONTENT_AD",
  OUTBRAIN = "OUTBRAIN",
  TABOOLA = "TABOOLA"
}
TypeGraphQL.registerEnumType(TrafficSourceName, {
  name: "TrafficSourceName",
  description: undefined,
});
