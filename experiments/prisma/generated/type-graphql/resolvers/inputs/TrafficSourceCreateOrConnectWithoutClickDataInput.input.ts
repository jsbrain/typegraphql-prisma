import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceCreateWithoutClickDataInput } from "../inputs/TrafficSourceCreateWithoutClickDataInput.input";
import { TrafficSourceWhereUniqueInput } from "../inputs/TrafficSourceWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceCreateOrConnectWithoutClickDataInput {
  @TypeGraphQL.Field(_type => TrafficSourceWhereUniqueInput, {
    nullable: false
  })
  where!: TrafficSourceWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrafficSourceCreateWithoutClickDataInput, {
    nullable: false
  })
  create!: TrafficSourceCreateWithoutClickDataInput;
}
