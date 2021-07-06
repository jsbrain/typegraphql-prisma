import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter.input";
import { EnumTrafficSourceNameWithAggregatesFilter } from "../inputs/EnumTrafficSourceNameWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TrafficSourceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TrafficSourceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrafficSourceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TrafficSourceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrafficSourceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TrafficSourceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTrafficSourceNameWithAggregatesFilter, {
    nullable: true
  })
  name?: EnumTrafficSourceNameWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
