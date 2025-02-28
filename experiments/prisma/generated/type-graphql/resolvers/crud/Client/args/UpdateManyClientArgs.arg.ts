import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientUpdateManyMutationInput } from "../../../inputs/ClientUpdateManyMutationInput.input";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyClientArgs {
  @TypeGraphQL.Field(_type => ClientUpdateManyMutationInput, {
    nullable: false
  })
  data!: ClientUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  where?: ClientWhereInput | undefined;
}
