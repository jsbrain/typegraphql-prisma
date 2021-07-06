import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientUpdateInput } from "../../../inputs/ClientUpdateInput.input";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateClientArgs {
  @TypeGraphQL.Field(_type => ClientUpdateInput, {
    nullable: false
  })
  data!: ClientUpdateInput;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;
}
