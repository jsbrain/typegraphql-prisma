import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrafficSourceCreateInput } from "../../../inputs/TrafficSourceCreateInput.input";
import { TrafficSourceUpdateInput } from "../../../inputs/TrafficSourceUpdateInput.input";
import { TrafficSourceWhereUniqueInput } from "../../../inputs/TrafficSourceWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertTrafficSourceArgs {
  @TypeGraphQL.Field(_type => TrafficSourceWhereUniqueInput, {
    nullable: false
  })
  where!: TrafficSourceWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrafficSourceCreateInput, {
    nullable: false
  })
  create!: TrafficSourceCreateInput;

  @TypeGraphQL.Field(_type => TrafficSourceUpdateInput, {
    nullable: false
  })
  update!: TrafficSourceUpdateInput;
}
