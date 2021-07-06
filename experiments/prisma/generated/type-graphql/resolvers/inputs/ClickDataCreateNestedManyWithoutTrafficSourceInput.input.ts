import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataCreateManyTrafficSourceInputEnvelope } from "../inputs/ClickDataCreateManyTrafficSourceInputEnvelope.input";
import { ClickDataCreateOrConnectWithoutTrafficSourceInput } from "../inputs/ClickDataCreateOrConnectWithoutTrafficSourceInput.input";
import { ClickDataCreateWithoutTrafficSourceInput } from "../inputs/ClickDataCreateWithoutTrafficSourceInput.input";
import { ClickDataWhereUniqueInput } from "../inputs/ClickDataWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClickDataCreateNestedManyWithoutTrafficSourceInput {
  @TypeGraphQL.Field(_type => [ClickDataCreateWithoutTrafficSourceInput], {
    nullable: true
  })
  create?: ClickDataCreateWithoutTrafficSourceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClickDataCreateOrConnectWithoutTrafficSourceInput], {
    nullable: true
  })
  connectOrCreate?: ClickDataCreateOrConnectWithoutTrafficSourceInput[] | undefined;

  @TypeGraphQL.Field(_type => ClickDataCreateManyTrafficSourceInputEnvelope, {
    nullable: true
  })
  createMany?: ClickDataCreateManyTrafficSourceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ClickDataWhereUniqueInput], {
    nullable: true
  })
  connect?: ClickDataWhereUniqueInput[] | undefined;
}
