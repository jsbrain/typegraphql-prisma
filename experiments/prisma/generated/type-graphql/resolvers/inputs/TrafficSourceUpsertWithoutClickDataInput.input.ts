import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceCreateWithoutClickDataInput } from "../inputs/TrafficSourceCreateWithoutClickDataInput.input";
import { TrafficSourceUpdateWithoutClickDataInput } from "../inputs/TrafficSourceUpdateWithoutClickDataInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceUpsertWithoutClickDataInput {
  @TypeGraphQL.Field(_type => TrafficSourceUpdateWithoutClickDataInput, {
    nullable: false
  })
  update!: TrafficSourceUpdateWithoutClickDataInput;

  @TypeGraphQL.Field(_type => TrafficSourceCreateWithoutClickDataInput, {
    nullable: false
  })
  create!: TrafficSourceCreateWithoutClickDataInput;
}
