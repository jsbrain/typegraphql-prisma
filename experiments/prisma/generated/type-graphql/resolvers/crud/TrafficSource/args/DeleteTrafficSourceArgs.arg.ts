import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrafficSourceWhereUniqueInput } from "../../../inputs/TrafficSourceWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class DeleteTrafficSourceArgs {
  @TypeGraphQL.Field(_type => TrafficSourceWhereUniqueInput, {
    nullable: false
  })
  where!: TrafficSourceWhereUniqueInput;
}
