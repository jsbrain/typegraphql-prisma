import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceName } from "../../enums/TrafficSourceName.enum";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TrafficSourceMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => TrafficSourceName, {
    nullable: true
  })
  name!: "CONTENT_AD" | "OUTBRAIN" | "TABOOLA" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
