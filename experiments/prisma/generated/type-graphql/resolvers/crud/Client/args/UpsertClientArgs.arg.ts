import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientCreateInput } from "../../../inputs/ClientCreateInput.input";
import { ClientUpdateInput } from "../../../inputs/ClientUpdateInput.input";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertClientArgs {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClientCreateInput, {
    nullable: false
  })
  create!: ClientCreateInput;

  @TypeGraphQL.Field(_type => ClientUpdateInput, {
    nullable: false
  })
  update!: ClientUpdateInput;
}
