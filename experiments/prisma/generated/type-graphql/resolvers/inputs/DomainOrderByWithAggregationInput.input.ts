import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DomainCountOrderByAggregateInput } from "../inputs/DomainCountOrderByAggregateInput.input";
import { DomainMaxOrderByAggregateInput } from "../inputs/DomainMaxOrderByAggregateInput.input";
import { DomainMinOrderByAggregateInput } from "../inputs/DomainMinOrderByAggregateInput.input";
import { SortOrder } from "../../enums/SortOrder.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DomainOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  creationDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  funnelAccountId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DomainCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DomainCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DomainMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DomainMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DomainMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DomainMinOrderByAggregateInput | undefined;
}
