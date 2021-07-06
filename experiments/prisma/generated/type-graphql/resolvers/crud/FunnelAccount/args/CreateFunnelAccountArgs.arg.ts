import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelAccountCreateInput } from "../../../inputs/FunnelAccountCreateInput.input";

@TypeGraphQL.ArgsType()
export class CreateFunnelAccountArgs {
  @TypeGraphQL.Field(_type => FunnelAccountCreateInput, {
    nullable: false
  })
  data!: FunnelAccountCreateInput;
}
