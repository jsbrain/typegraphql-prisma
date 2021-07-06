import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelCreateInput } from "../../../inputs/FunnelCreateInput.input";

@TypeGraphQL.ArgsType()
export class CreateFunnelArgs {
  @TypeGraphQL.Field(_type => FunnelCreateInput, {
    nullable: false
  })
  data!: FunnelCreateInput;
}
