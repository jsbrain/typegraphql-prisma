import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelUpdateInput } from "../../../inputs/FunnelUpdateInput.input";
import { FunnelWhereUniqueInput } from "../../../inputs/FunnelWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateFunnelArgs {
  @TypeGraphQL.Field(_type => FunnelUpdateInput, {
    nullable: false
  })
  data!: FunnelUpdateInput;

  @TypeGraphQL.Field(_type => FunnelWhereUniqueInput, {
    nullable: false
  })
  where!: FunnelWhereUniqueInput;
}
