import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelWhereUniqueInput } from "../../../inputs/FunnelWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class FindUniqueFunnelArgs {
  @TypeGraphQL.Field(_type => FunnelWhereUniqueInput, {
    nullable: false
  })
  where!: FunnelWhereUniqueInput;
}
