import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelAccountWhereInput } from "../../../inputs/FunnelAccountWhereInput.input";

@TypeGraphQL.ArgsType()
export class DeleteManyFunnelAccountArgs {
  @TypeGraphQL.Field(_type => FunnelAccountWhereInput, {
    nullable: true
  })
  where?: FunnelAccountWhereInput | undefined;
}
