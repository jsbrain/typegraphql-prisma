import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorCountOrderByAggregateInput } from "../inputs/DirectorCountOrderByAggregateInput.input";
import { DirectorMaxOrderByAggregateInput } from "../inputs/DirectorMaxOrderByAggregateInput.input";
import { DirectorMinOrderByAggregateInput } from "../inputs/DirectorMinOrderByAggregateInput.input";
import { SortOrder } from "../../enums/SortOrder.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DirectorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DirectorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DirectorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DirectorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DirectorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DirectorMinOrderByAggregateInput | undefined;
}
