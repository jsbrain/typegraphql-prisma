import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataCreateManyTrafficSourceInput } from "../inputs/ClickDataCreateManyTrafficSourceInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClickDataCreateManyTrafficSourceInputEnvelope {
  @TypeGraphQL.Field(_type => [ClickDataCreateManyTrafficSourceInput], {
    nullable: false
  })
  data!: ClickDataCreateManyTrafficSourceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
