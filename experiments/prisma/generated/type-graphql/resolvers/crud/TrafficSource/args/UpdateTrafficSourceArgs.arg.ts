import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrafficSourceUpdateInput } from "../../../inputs/TrafficSourceUpdateInput.input";
import { TrafficSourceWhereUniqueInput } from "../../../inputs/TrafficSourceWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateTrafficSourceArgs {
  @TypeGraphQL.Field(_type => TrafficSourceUpdateInput, {
    nullable: false
  })
  data!: TrafficSourceUpdateInput;

  @TypeGraphQL.Field(_type => TrafficSourceWhereUniqueInput, {
    nullable: false
  })
  where!: TrafficSourceWhereUniqueInput;
}
