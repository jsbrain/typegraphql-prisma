import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCountOrderByAggregateInput } from "../inputs/MovieCountOrderByAggregateInput.input";
import { MovieMaxOrderByAggregateInput } from "../inputs/MovieMaxOrderByAggregateInput.input";
import { MovieMinOrderByAggregateInput } from "../inputs/MovieMinOrderByAggregateInput.input";
import { SortOrder } from "../../enums/SortOrder.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  directorFirstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  directorLastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieMinOrderByAggregateInput | undefined;
}
