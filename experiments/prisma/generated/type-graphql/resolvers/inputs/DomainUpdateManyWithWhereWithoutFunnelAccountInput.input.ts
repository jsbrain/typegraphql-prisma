import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DomainScalarWhereInput } from "../inputs/DomainScalarWhereInput.input";
import { DomainUpdateManyMutationInput } from "../inputs/DomainUpdateManyMutationInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DomainUpdateManyWithWhereWithoutFunnelAccountInput {
  @TypeGraphQL.Field(_type => DomainScalarWhereInput, {
    nullable: false
  })
  where!: DomainScalarWhereInput;

  @TypeGraphQL.Field(_type => DomainUpdateManyMutationInput, {
    nullable: false
  })
  data!: DomainUpdateManyMutationInput;
}
