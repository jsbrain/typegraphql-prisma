import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrafficSourceOrderByWithRelationInput } from "../../../inputs/TrafficSourceOrderByWithRelationInput.input";
import { TrafficSourceWhereInput } from "../../../inputs/TrafficSourceWhereInput.input";
import { TrafficSourceWhereUniqueInput } from "../../../inputs/TrafficSourceWhereUniqueInput.input";
import { TrafficSourceScalarFieldEnum } from "../../../../enums/TrafficSourceScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class FindManyTrafficSourceArgs {
  @TypeGraphQL.Field(_type => TrafficSourceWhereInput, {
    nullable: true
  })
  where?: TrafficSourceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrafficSourceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TrafficSourceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TrafficSourceWhereUniqueInput, {
    nullable: true
  })
  cursor?: TrafficSourceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TrafficSourceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "createdAt" | "updatedAt"> | undefined;
}
