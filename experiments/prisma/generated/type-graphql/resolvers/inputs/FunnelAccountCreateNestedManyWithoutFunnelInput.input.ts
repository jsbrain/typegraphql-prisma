import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCreateManyFunnelInputEnvelope } from "../inputs/FunnelAccountCreateManyFunnelInputEnvelope.input";
import { FunnelAccountCreateOrConnectWithoutFunnelInput } from "../inputs/FunnelAccountCreateOrConnectWithoutFunnelInput.input";
import { FunnelAccountCreateWithoutFunnelInput } from "../inputs/FunnelAccountCreateWithoutFunnelInput.input";
import { FunnelAccountWhereUniqueInput } from "../inputs/FunnelAccountWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountCreateNestedManyWithoutFunnelInput {
  @TypeGraphQL.Field(_type => [FunnelAccountCreateWithoutFunnelInput], {
    nullable: true
  })
  create?: FunnelAccountCreateWithoutFunnelInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountCreateOrConnectWithoutFunnelInput], {
    nullable: true
  })
  connectOrCreate?: FunnelAccountCreateOrConnectWithoutFunnelInput[] | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountCreateManyFunnelInputEnvelope, {
    nullable: true
  })
  createMany?: FunnelAccountCreateManyFunnelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountWhereUniqueInput], {
    nullable: true
  })
  connect?: FunnelAccountWhereUniqueInput[] | undefined;
}
