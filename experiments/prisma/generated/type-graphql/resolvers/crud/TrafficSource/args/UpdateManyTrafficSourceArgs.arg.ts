import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrafficSourceUpdateManyMutationInput } from "../../../inputs/TrafficSourceUpdateManyMutationInput.input";
import { TrafficSourceWhereInput } from "../../../inputs/TrafficSourceWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyTrafficSourceArgs {
  @TypeGraphQL.Field(_type => TrafficSourceUpdateManyMutationInput, {
    nullable: false
  })
  data!: TrafficSourceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TrafficSourceWhereInput, {
    nullable: true
  })
  where?: TrafficSourceWhereInput | undefined;
}
