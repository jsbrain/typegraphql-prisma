import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountUpdateWithoutFunnelInput } from "../inputs/FunnelAccountUpdateWithoutFunnelInput.input";
import { FunnelAccountWhereUniqueInput } from "../inputs/FunnelAccountWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountUpdateWithWhereUniqueWithoutFunnelInput {
  @TypeGraphQL.Field(_type => FunnelAccountWhereUniqueInput, {
    nullable: false
  })
  where!: FunnelAccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => FunnelAccountUpdateWithoutFunnelInput, {
    nullable: false
  })
  data!: FunnelAccountUpdateWithoutFunnelInput;
}
