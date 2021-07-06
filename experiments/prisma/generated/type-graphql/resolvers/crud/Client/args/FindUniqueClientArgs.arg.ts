import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class FindUniqueClientArgs {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;
}
