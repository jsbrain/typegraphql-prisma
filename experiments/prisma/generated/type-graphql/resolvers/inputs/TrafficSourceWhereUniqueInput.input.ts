import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceName } from "../../enums/TrafficSourceName.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TrafficSourceName, {
    nullable: true
  })
  name?: "CONTENT_AD" | "OUTBRAIN" | "TABOOLA" | undefined;
}
