import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataScalarWhereInput } from "../inputs/ClickDataScalarWhereInput.input";
import { ClickDataUpdateManyMutationInput } from "../inputs/ClickDataUpdateManyMutationInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClickDataUpdateManyWithWhereWithoutTrafficSourceInput {
  @TypeGraphQL.Field(_type => ClickDataScalarWhereInput, {
    nullable: false
  })
  where!: ClickDataScalarWhereInput;

  @TypeGraphQL.Field(_type => ClickDataUpdateManyMutationInput, {
    nullable: false
  })
  data!: ClickDataUpdateManyMutationInput;
}
