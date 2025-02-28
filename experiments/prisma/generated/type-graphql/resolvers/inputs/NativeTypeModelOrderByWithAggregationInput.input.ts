import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NativeTypeModelAvgOrderByAggregateInput } from "../inputs/NativeTypeModelAvgOrderByAggregateInput.input";
import { NativeTypeModelCountOrderByAggregateInput } from "../inputs/NativeTypeModelCountOrderByAggregateInput.input";
import { NativeTypeModelMaxOrderByAggregateInput } from "../inputs/NativeTypeModelMaxOrderByAggregateInput.input";
import { NativeTypeModelMinOrderByAggregateInput } from "../inputs/NativeTypeModelMinOrderByAggregateInput.input";
import { NativeTypeModelSumOrderByAggregateInput } from "../inputs/NativeTypeModelSumOrderByAggregateInput.input";
import { SortOrder } from "../../enums/SortOrder.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NativeTypeModelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bigInt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  byteA?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  decimal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NativeTypeModelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: NativeTypeModelAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NativeTypeModelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NativeTypeModelMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: NativeTypeModelSumOrderByAggregateInput | undefined;
}
