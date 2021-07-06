import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TrafficSourceCreateOrConnectWithoutClickDataInput } from "../inputs/TrafficSourceCreateOrConnectWithoutClickDataInput.input";
import { TrafficSourceCreateWithoutClickDataInput } from "../inputs/TrafficSourceCreateWithoutClickDataInput.input";
import { TrafficSourceWhereUniqueInput } from "../inputs/TrafficSourceWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceCreateNestedOneWithoutClickDataInput {
  @TypeGraphQL.Field(_type => TrafficSourceCreateWithoutClickDataInput, {
    nullable: true
  })
  create?: TrafficSourceCreateWithoutClickDataInput | undefined;

  @TypeGraphQL.Field(_type => TrafficSourceCreateOrConnectWithoutClickDataInput, {
    nullable: true
  })
  connectOrCreate?: TrafficSourceCreateOrConnectWithoutClickDataInput | undefined;

  @TypeGraphQL.Field(_type => TrafficSourceWhereUniqueInput, {
    nullable: true
  })
  connect?: TrafficSourceWhereUniqueInput | undefined;
}
