import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DomainOrderByWithAggregationInput } from "../../../inputs/DomainOrderByWithAggregationInput.input";
import { DomainScalarWhereWithAggregatesInput } from "../../../inputs/DomainScalarWhereWithAggregatesInput.input";
import { DomainWhereInput } from "../../../inputs/DomainWhereInput.input";
import { DomainScalarFieldEnum } from "../../../../enums/DomainScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByDomainArgs {
  @TypeGraphQL.Field(_type => DomainWhereInput, {
    nullable: true
  })
  where?: DomainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DomainOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DomainOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "state" | "creationDate" | "createdAt" | "updatedAt" | "funnelAccountId">;

  @TypeGraphQL.Field(_type => DomainScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DomainScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
