import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCreateManyFunnelInput } from "../inputs/FunnelAccountCreateManyFunnelInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountCreateManyFunnelInputEnvelope {
  @TypeGraphQL.Field(_type => [FunnelAccountCreateManyFunnelInput], {
    nullable: false
  })
  data!: FunnelAccountCreateManyFunnelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
