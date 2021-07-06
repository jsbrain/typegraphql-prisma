import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceName } from "../../enums/TrafficSourceName.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumTrafficSourceNameFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TrafficSourceName, {
    nullable: true
  })
  set?: "CONTENT_AD" | "OUTBRAIN" | "TABOOLA" | undefined;
}
