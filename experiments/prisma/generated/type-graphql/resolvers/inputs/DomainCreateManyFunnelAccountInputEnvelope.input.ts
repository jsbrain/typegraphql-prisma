import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DomainCreateManyFunnelAccountInput } from "../inputs/DomainCreateManyFunnelAccountInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DomainCreateManyFunnelAccountInputEnvelope {
  @TypeGraphQL.Field(_type => [DomainCreateManyFunnelAccountInput], {
    nullable: false
  })
  data!: DomainCreateManyFunnelAccountInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
