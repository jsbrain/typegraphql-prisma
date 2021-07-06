import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataUpdateWithoutTrafficSourceInput } from "../inputs/ClickDataUpdateWithoutTrafficSourceInput.input";
import { ClickDataWhereUniqueInput } from "../inputs/ClickDataWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClickDataUpdateWithWhereUniqueWithoutTrafficSourceInput {
  @TypeGraphQL.Field(_type => ClickDataWhereUniqueInput, {
    nullable: false
  })
  where!: ClickDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClickDataUpdateWithoutTrafficSourceInput, {
    nullable: false
  })
  data!: ClickDataUpdateWithoutTrafficSourceInput;
}
