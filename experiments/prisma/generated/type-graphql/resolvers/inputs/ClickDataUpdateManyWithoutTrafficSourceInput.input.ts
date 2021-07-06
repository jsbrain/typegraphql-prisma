import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataCreateManyTrafficSourceInputEnvelope } from "../inputs/ClickDataCreateManyTrafficSourceInputEnvelope.input";
import { ClickDataCreateOrConnectWithoutTrafficSourceInput } from "../inputs/ClickDataCreateOrConnectWithoutTrafficSourceInput.input";
import { ClickDataCreateWithoutTrafficSourceInput } from "../inputs/ClickDataCreateWithoutTrafficSourceInput.input";
import { ClickDataScalarWhereInput } from "../inputs/ClickDataScalarWhereInput.input";
import { ClickDataUpdateManyWithWhereWithoutTrafficSourceInput } from "../inputs/ClickDataUpdateManyWithWhereWithoutTrafficSourceInput.input";
import { ClickDataUpdateWithWhereUniqueWithoutTrafficSourceInput } from "../inputs/ClickDataUpdateWithWhereUniqueWithoutTrafficSourceInput.input";
import { ClickDataUpsertWithWhereUniqueWithoutTrafficSourceInput } from "../inputs/ClickDataUpsertWithWhereUniqueWithoutTrafficSourceInput.input";
import { ClickDataWhereUniqueInput } from "../inputs/ClickDataWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClickDataUpdateManyWithoutTrafficSourceInput {
  @TypeGraphQL.Field(_type => [ClickDataCreateWithoutTrafficSourceInput], {
    nullable: true
  })
  create?: ClickDataCreateWithoutTrafficSourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClickDataCreateOrConnectWithoutTrafficSourceInput], {
    nullable: true
  })
  connectOrCreate?: ClickDataCreateOrConnectWithoutTrafficSourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClickDataUpsertWithWhereUniqueWithoutTrafficSourceInput], {
    nullable: true
  })
  upsert?: ClickDataUpsertWithWhereUniqueWithoutTrafficSourceInput[] | undefined;

  @TypeGraphQL.Field(_type => ClickDataCreateManyTrafficSourceInputEnvelope, {
    nullable: true
  })
  createMany?: ClickDataCreateManyTrafficSourceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ClickDataWhereUniqueInput], {
    nullable: true
  })
  connect?: ClickDataWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClickDataWhereUniqueInput], {
    nullable: true
  })
  set?: ClickDataWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClickDataWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ClickDataWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClickDataWhereUniqueInput], {
    nullable: true
  })
  delete?: ClickDataWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClickDataUpdateWithWhereUniqueWithoutTrafficSourceInput], {
    nullable: true
  })
  update?: ClickDataUpdateWithWhereUniqueWithoutTrafficSourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClickDataUpdateManyWithWhereWithoutTrafficSourceInput], {
    nullable: true
  })
  updateMany?: ClickDataUpdateManyWithWhereWithoutTrafficSourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClickDataScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ClickDataScalarWhereInput[] | undefined;
}
