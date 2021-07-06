import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceName } from "../../enums/TrafficSourceName.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TrafficSourceName, {
    nullable: false
  })
  name!: "CONTENT_AD" | "OUTBRAIN" | "TABOOLA";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
