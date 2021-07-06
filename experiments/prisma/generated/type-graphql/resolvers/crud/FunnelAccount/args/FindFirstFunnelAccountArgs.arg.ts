import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelAccountOrderByWithRelationInput } from "../../../inputs/FunnelAccountOrderByWithRelationInput.input";
import { FunnelAccountWhereInput } from "../../../inputs/FunnelAccountWhereInput.input";
import { FunnelAccountWhereUniqueInput } from "../../../inputs/FunnelAccountWhereUniqueInput.input";
import { FunnelAccountScalarFieldEnum } from "../../../../enums/FunnelAccountScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class FindFirstFunnelAccountArgs {
  @TypeGraphQL.Field(_type => FunnelAccountWhereInput, {
    nullable: true
  })
  where?: FunnelAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FunnelAccountOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountWhereUniqueInput, {
    nullable: true
  })
  cursor?: FunnelAccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "name" | "createdAt" | "updatedAt" | "funnelId"> | undefined;
}
