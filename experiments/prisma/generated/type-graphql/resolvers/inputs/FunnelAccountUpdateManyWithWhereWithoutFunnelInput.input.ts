import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountScalarWhereInput } from "../inputs/FunnelAccountScalarWhereInput.input";
import { FunnelAccountUpdateManyMutationInput } from "../inputs/FunnelAccountUpdateManyMutationInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelAccountUpdateManyWithWhereWithoutFunnelInput {
  @TypeGraphQL.Field(_type => FunnelAccountScalarWhereInput, {
    nullable: false
  })
  where!: FunnelAccountScalarWhereInput;

  @TypeGraphQL.Field(_type => FunnelAccountUpdateManyMutationInput, {
    nullable: false
  })
  data!: FunnelAccountUpdateManyMutationInput;
}
