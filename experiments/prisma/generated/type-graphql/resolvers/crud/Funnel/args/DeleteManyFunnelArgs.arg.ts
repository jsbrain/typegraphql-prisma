import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelWhereInput } from "../../../inputs/FunnelWhereInput.input";

@TypeGraphQL.ArgsType()
export class DeleteManyFunnelArgs {
  @TypeGraphQL.Field(_type => FunnelWhereInput, {
    nullable: true
  })
  where?: FunnelWhereInput | undefined;
}
