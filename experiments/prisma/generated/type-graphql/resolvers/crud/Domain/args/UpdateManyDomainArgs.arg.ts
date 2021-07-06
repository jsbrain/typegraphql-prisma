import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DomainUpdateManyMutationInput } from "../../../inputs/DomainUpdateManyMutationInput.input";
import { DomainWhereInput } from "../../../inputs/DomainWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyDomainArgs {
  @TypeGraphQL.Field(_type => DomainUpdateManyMutationInput, {
    nullable: false
  })
  data!: DomainUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DomainWhereInput, {
    nullable: true
  })
  where?: DomainWhereInput | undefined;
}
