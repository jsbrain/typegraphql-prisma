import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelOrderByWithRelationInput } from "../../../inputs/FunnelOrderByWithRelationInput.input";
import { FunnelWhereInput } from "../../../inputs/FunnelWhereInput.input";
import { FunnelWhereUniqueInput } from "../../../inputs/FunnelWhereUniqueInput.input";
import { FunnelScalarFieldEnum } from "../../../../enums/FunnelScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class FindManyFunnelArgs {
  @TypeGraphQL.Field(_type => FunnelWhereInput, {
    nullable: true
  })
  where?: FunnelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FunnelOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FunnelOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FunnelWhereUniqueInput, {
    nullable: true
  })
  cursor?: FunnelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FunnelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "order" | "trafficFirstSeen" | "cards" | "browserProfile" | "createdAt" | "updatedAt"> | undefined;
}
