import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelCreateInput } from "../../../inputs/FunnelCreateInput.input";
import { FunnelUpdateInput } from "../../../inputs/FunnelUpdateInput.input";
import { FunnelWhereUniqueInput } from "../../../inputs/FunnelWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertFunnelArgs {
  @TypeGraphQL.Field(_type => FunnelWhereUniqueInput, {
    nullable: false
  })
  where!: FunnelWhereUniqueInput;

  @TypeGraphQL.Field(_type => FunnelCreateInput, {
    nullable: false
  })
  create!: FunnelCreateInput;

  @TypeGraphQL.Field(_type => FunnelUpdateInput, {
    nullable: false
  })
  update!: FunnelUpdateInput;
}
