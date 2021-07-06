import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrafficSourceCreateManyInput } from "../../../inputs/TrafficSourceCreateManyInput.input";

@TypeGraphQL.ArgsType()
export class CreateManyTrafficSourceArgs {
  @TypeGraphQL.Field(_type => [TrafficSourceCreateManyInput], {
    nullable: false
  })
  data!: TrafficSourceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
