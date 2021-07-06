import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DomainCreateManyFunnelAccountInputEnvelope } from "../inputs/DomainCreateManyFunnelAccountInputEnvelope.input";
import { DomainCreateOrConnectWithoutFunnelAccountInput } from "../inputs/DomainCreateOrConnectWithoutFunnelAccountInput.input";
import { DomainCreateWithoutFunnelAccountInput } from "../inputs/DomainCreateWithoutFunnelAccountInput.input";
import { DomainScalarWhereInput } from "../inputs/DomainScalarWhereInput.input";
import { DomainUpdateManyWithWhereWithoutFunnelAccountInput } from "../inputs/DomainUpdateManyWithWhereWithoutFunnelAccountInput.input";
import { DomainUpdateWithWhereUniqueWithoutFunnelAccountInput } from "../inputs/DomainUpdateWithWhereUniqueWithoutFunnelAccountInput.input";
import { DomainUpsertWithWhereUniqueWithoutFunnelAccountInput } from "../inputs/DomainUpsertWithWhereUniqueWithoutFunnelAccountInput.input";
import { DomainWhereUniqueInput } from "../inputs/DomainWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DomainUpdateManyWithoutFunnelAccountInput {
  @TypeGraphQL.Field(_type => [DomainCreateWithoutFunnelAccountInput], {
    nullable: true
  })
  create?: DomainCreateWithoutFunnelAccountInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainCreateOrConnectWithoutFunnelAccountInput], {
    nullable: true
  })
  connectOrCreate?: DomainCreateOrConnectWithoutFunnelAccountInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainUpsertWithWhereUniqueWithoutFunnelAccountInput], {
    nullable: true
  })
  upsert?: DomainUpsertWithWhereUniqueWithoutFunnelAccountInput[] | undefined;

  @TypeGraphQL.Field(_type => DomainCreateManyFunnelAccountInputEnvelope, {
    nullable: true
  })
  createMany?: DomainCreateManyFunnelAccountInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DomainWhereUniqueInput], {
    nullable: true
  })
  connect?: DomainWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainWhereUniqueInput], {
    nullable: true
  })
  set?: DomainWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DomainWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainWhereUniqueInput], {
    nullable: true
  })
  delete?: DomainWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainUpdateWithWhereUniqueWithoutFunnelAccountInput], {
    nullable: true
  })
  update?: DomainUpdateWithWhereUniqueWithoutFunnelAccountInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainUpdateManyWithWhereWithoutFunnelAccountInput], {
    nullable: true
  })
  updateMany?: DomainUpdateManyWithWhereWithoutFunnelAccountInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DomainScalarWhereInput[] | undefined;
}
