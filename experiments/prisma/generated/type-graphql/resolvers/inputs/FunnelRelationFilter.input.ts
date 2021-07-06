import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelWhereInput } from "../inputs/FunnelWhereInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelRelationFilter {
  @TypeGraphQL.Field(_type => FunnelWhereInput, {
    nullable: true
  })
  is?: FunnelWhereInput | undefined;

  @TypeGraphQL.Field(_type => FunnelWhereInput, {
    nullable: true
  })
  isNot?: FunnelWhereInput | undefined;
}
