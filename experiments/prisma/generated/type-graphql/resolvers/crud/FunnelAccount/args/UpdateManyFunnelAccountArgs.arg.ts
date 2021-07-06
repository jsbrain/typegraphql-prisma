import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelAccountUpdateManyMutationInput } from "../../../inputs/FunnelAccountUpdateManyMutationInput.input";
import { FunnelAccountWhereInput } from "../../../inputs/FunnelAccountWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyFunnelAccountArgs {
  @TypeGraphQL.Field(_type => FunnelAccountUpdateManyMutationInput, {
    nullable: false
  })
  data!: FunnelAccountUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FunnelAccountWhereInput, {
    nullable: true
  })
  where?: FunnelAccountWhereInput | undefined;
}
