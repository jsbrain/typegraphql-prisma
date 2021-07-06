import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelAccountWhereUniqueInput } from "../../../inputs/FunnelAccountWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class DeleteFunnelAccountArgs {
  @TypeGraphQL.Field(_type => FunnelAccountWhereUniqueInput, {
    nullable: false
  })
  where!: FunnelAccountWhereUniqueInput;
}
