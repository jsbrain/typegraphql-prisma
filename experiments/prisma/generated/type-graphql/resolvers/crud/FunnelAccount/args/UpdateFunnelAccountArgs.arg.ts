import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelAccountUpdateInput } from "../../../inputs/FunnelAccountUpdateInput.input";
import { FunnelAccountWhereUniqueInput } from "../../../inputs/FunnelAccountWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateFunnelAccountArgs {
  @TypeGraphQL.Field(_type => FunnelAccountUpdateInput, {
    nullable: false
  })
  data!: FunnelAccountUpdateInput;

  @TypeGraphQL.Field(_type => FunnelAccountWhereUniqueInput, {
    nullable: false
  })
  where!: FunnelAccountWhereUniqueInput;
}
