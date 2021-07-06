import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DomainCreateWithoutFunnelAccountInput } from "../inputs/DomainCreateWithoutFunnelAccountInput.input";
import { DomainUpdateWithoutFunnelAccountInput } from "../inputs/DomainUpdateWithoutFunnelAccountInput.input";
import { DomainWhereUniqueInput } from "../inputs/DomainWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DomainUpsertWithWhereUniqueWithoutFunnelAccountInput {
  @TypeGraphQL.Field(_type => DomainWhereUniqueInput, {
    nullable: false
  })
  where!: DomainWhereUniqueInput;

  @TypeGraphQL.Field(_type => DomainUpdateWithoutFunnelAccountInput, {
    nullable: false
  })
  update!: DomainUpdateWithoutFunnelAccountInput;

  @TypeGraphQL.Field(_type => DomainCreateWithoutFunnelAccountInput, {
    nullable: false
  })
  create!: DomainCreateWithoutFunnelAccountInput;
}
