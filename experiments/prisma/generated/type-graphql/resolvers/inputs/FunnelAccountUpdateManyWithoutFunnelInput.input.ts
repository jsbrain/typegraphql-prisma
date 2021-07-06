import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCreateManyFunnelInputEnvelope } from "../inputs/FunnelAccountCreateManyFunnelInputEnvelope.input";
import { FunnelAccountCreateOrConnectWithoutFunnelInput } from "../inputs/FunnelAccountCreateOrConnectWithoutFunnelInput.input";
import { FunnelAccountCreateWithoutFunnelInput } from "../inputs/FunnelAccountCreateWithoutFunnelInput.input";
import { FunnelAccountScalarWhereInput } from "../inputs/FunnelAccountScalarWhereInput.input";
import { FunnelAccountUpdateManyWithWhereWithoutFunnelInput } from "../inputs/FunnelAccountUpdateManyWithWhereWithoutFunnelInput.input";
import { FunnelAccountUpdateWithWhereUniqueWithoutFunnelInput } from "../inputs/FunnelAccountUpdateWithWhereUniqueWithoutFunnelInput.input";
import { FunnelAccountUpsertWithWhereUniqueWithoutFunnelInput } from "../inputs/FunnelAccountUpsertWithWhereUniqueWithoutFunnelInput.input";
import { FunnelAccountWhereUniqueInput } from "../inputs/FunnelAccountWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountUpdateManyWithoutFunnelInput {
  @TypeGraphQL.Field(_type => [FunnelAccountCreateWithoutFunnelInput], {
    nullable: true
  })
  create?: FunnelAccountCreateWithoutFunnelInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountCreateOrConnectWithoutFunnelInput], {
    nullable: true
  })
  connectOrCreate?: FunnelAccountCreateOrConnectWithoutFunnelInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountUpsertWithWhereUniqueWithoutFunnelInput], {
    nullable: true
  })
  upsert?: FunnelAccountUpsertWithWhereUniqueWithoutFunnelInput[] | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountCreateManyFunnelInputEnvelope, {
    nullable: true
  })
  createMany?: FunnelAccountCreateManyFunnelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountWhereUniqueInput], {
    nullable: true
  })
  connect?: FunnelAccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountWhereUniqueInput], {
    nullable: true
  })
  set?: FunnelAccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FunnelAccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountWhereUniqueInput], {
    nullable: true
  })
  delete?: FunnelAccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountUpdateWithWhereUniqueWithoutFunnelInput], {
    nullable: true
  })
  update?: FunnelAccountUpdateWithWhereUniqueWithoutFunnelInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountUpdateManyWithWhereWithoutFunnelInput], {
    nullable: true
  })
  updateMany?: FunnelAccountUpdateManyWithWhereWithoutFunnelInput[] | undefined;

  @TypeGraphQL.Field(_type => [FunnelAccountScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FunnelAccountScalarWhereInput[] | undefined;
}
