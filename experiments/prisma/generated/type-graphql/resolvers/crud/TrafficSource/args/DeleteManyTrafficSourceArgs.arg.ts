import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrafficSourceWhereInput } from "../../../inputs/TrafficSourceWhereInput.input";

@TypeGraphQL.ArgsType()
export class DeleteManyTrafficSourceArgs {
  @TypeGraphQL.Field(_type => TrafficSourceWhereInput, {
    nullable: true
  })
  where?: TrafficSourceWhereInput | undefined;
}
