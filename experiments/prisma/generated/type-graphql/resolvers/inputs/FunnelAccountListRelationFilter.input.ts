import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountWhereInput } from "../inputs/FunnelAccountWhereInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountListRelationFilter {
  @TypeGraphQL.Field(_type => FunnelAccountWhereInput, {
    nullable: true
  })
  every?: FunnelAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountWhereInput, {
    nullable: true
  })
  some?: FunnelAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountWhereInput, {
    nullable: true
  })
  none?: FunnelAccountWhereInput | undefined;
}
