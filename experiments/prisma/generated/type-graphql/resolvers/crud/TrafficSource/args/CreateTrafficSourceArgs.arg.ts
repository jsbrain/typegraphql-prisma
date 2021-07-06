import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrafficSourceCreateInput } from "../../../inputs/TrafficSourceCreateInput.input";

@TypeGraphQL.ArgsType()
export class CreateTrafficSourceArgs {
  @TypeGraphQL.Field(_type => TrafficSourceCreateInput, {
    nullable: false
  })
  data!: TrafficSourceCreateInput;
}
