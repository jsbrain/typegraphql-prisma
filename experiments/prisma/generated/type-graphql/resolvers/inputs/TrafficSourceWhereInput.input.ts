import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataListRelationFilter } from "../inputs/ClickDataListRelationFilter.input";
import { DateTimeFilter } from "../inputs/DateTimeFilter.input";
import { EnumTrafficSourceNameFilter } from "../inputs/EnumTrafficSourceNameFilter.input";
import { StringFilter } from "../inputs/StringFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceWhereInput {
  @TypeGraphQL.Field(_type => [TrafficSourceWhereInput], {
    nullable: true
  })
  AND?: TrafficSourceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrafficSourceWhereInput], {
    nullable: true
  })
  OR?: TrafficSourceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrafficSourceWhereInput], {
    nullable: true
  })
  NOT?: TrafficSourceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTrafficSourceNameFilter, {
    nullable: true
  })
  name?: EnumTrafficSourceNameFilter | undefined;

  @TypeGraphQL.Field(_type => ClickDataListRelationFilter, {
    nullable: true
  })
  clickData?: ClickDataListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
