import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCreateWithoutFunnelInput } from "../inputs/FunnelAccountCreateWithoutFunnelInput.input";
import { FunnelAccountUpdateWithoutFunnelInput } from "../inputs/FunnelAccountUpdateWithoutFunnelInput.input";
import { FunnelAccountWhereUniqueInput } from "../inputs/FunnelAccountWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountUpsertWithWhereUniqueWithoutFunnelInput {
  @TypeGraphQL.Field(_type => FunnelAccountWhereUniqueInput, {
    nullable: false
  })
  where!: FunnelAccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => FunnelAccountUpdateWithoutFunnelInput, {
    nullable: false
  })
  update!: FunnelAccountUpdateWithoutFunnelInput;

  @TypeGraphQL.Field(_type => FunnelAccountCreateWithoutFunnelInput, {
    nullable: false
  })
  create!: FunnelAccountCreateWithoutFunnelInput;
}
