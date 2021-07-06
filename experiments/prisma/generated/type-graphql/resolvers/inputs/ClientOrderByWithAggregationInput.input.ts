import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClientAvgOrderByAggregateInput } from "../inputs/ClientAvgOrderByAggregateInput.input";
import { ClientCountOrderByAggregateInput } from "../inputs/ClientCountOrderByAggregateInput.input";
import { ClientMaxOrderByAggregateInput } from "../inputs/ClientMaxOrderByAggregateInput.input";
import { ClientMinOrderByAggregateInput } from "../inputs/ClientMinOrderByAggregateInput.input";
import { ClientSumOrderByAggregateInput } from "../inputs/ClientSumOrderByAggregateInput.input";
import { SortOrder } from "../../enums/SortOrder.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  age?: "asc" | "desc" | undefined;

  balance?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  grades?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  aliases?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ClientCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ClientCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClientAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ClientAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClientMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ClientMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClientMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ClientMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClientSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ClientSumOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: "asc" | "desc" | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: "asc" | "desc" | undefined) {
    this.balance = balance;
  }
}
