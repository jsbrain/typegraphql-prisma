import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelAccountCreateInput } from "../../../inputs/FunnelAccountCreateInput.input";
import { FunnelAccountUpdateInput } from "../../../inputs/FunnelAccountUpdateInput.input";
import { FunnelAccountWhereUniqueInput } from "../../../inputs/FunnelAccountWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertFunnelAccountArgs {
  @TypeGraphQL.Field(_type => FunnelAccountWhereUniqueInput, {
    nullable: false
  })
  where!: FunnelAccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => FunnelAccountCreateInput, {
    nullable: false
  })
  create!: FunnelAccountCreateInput;

  @TypeGraphQL.Field(_type => FunnelAccountUpdateInput, {
    nullable: false
  })
  update!: FunnelAccountUpdateInput;
}
