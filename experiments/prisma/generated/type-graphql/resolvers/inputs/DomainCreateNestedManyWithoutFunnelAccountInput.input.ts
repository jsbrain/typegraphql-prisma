import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DomainCreateManyFunnelAccountInputEnvelope } from "../inputs/DomainCreateManyFunnelAccountInputEnvelope.input";
import { DomainCreateOrConnectWithoutFunnelAccountInput } from "../inputs/DomainCreateOrConnectWithoutFunnelAccountInput.input";
import { DomainCreateWithoutFunnelAccountInput } from "../inputs/DomainCreateWithoutFunnelAccountInput.input";
import { DomainWhereUniqueInput } from "../inputs/DomainWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DomainCreateNestedManyWithoutFunnelAccountInput {
  @TypeGraphQL.Field(_type => [DomainCreateWithoutFunnelAccountInput], {
    nullable: true
  })
  create?: DomainCreateWithoutFunnelAccountInput[] | undefined;

  @TypeGraphQL.Field(_type => [DomainCreateOrConnectWithoutFunnelAccountInput], {
    nullable: true
  })
  connectOrCreate?: DomainCreateOrConnectWithoutFunnelAccountInput[] | undefined;

  @TypeGraphQL.Field(_type => DomainCreateManyFunnelAccountInputEnvelope, {
    nullable: true
  })
  createMany?: DomainCreateManyFunnelAccountInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DomainWhereUniqueInput], {
    nullable: true
  })
  connect?: DomainWhereUniqueInput[] | undefined;
}
