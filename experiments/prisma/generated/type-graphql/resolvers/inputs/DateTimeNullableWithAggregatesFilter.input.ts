import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NestedDateTimeNullableFilter } from "../inputs/NestedDateTimeNullableFilter.input";
import { NestedDateTimeNullableWithAggregatesFilter } from "../inputs/NestedDateTimeNullableWithAggregatesFilter.input";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DateTimeNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  equals?: Date | undefined;

  @TypeGraphQL.Field(_type => [Date], {
    nullable: true
  })
  in?: Date[] | undefined;

  @TypeGraphQL.Field(_type => [Date], {
    nullable: true
  })
  notIn?: Date[] | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lte?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  gt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  gte?: Date | undefined;

  @TypeGraphQL.Field(_type => NestedDateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedDateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedDateTimeNullableFilter, {
    nullable: true
  })
  _min?: NestedDateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedDateTimeNullableFilter, {
    nullable: true
  })
  _max?: NestedDateTimeNullableFilter | undefined;
}
