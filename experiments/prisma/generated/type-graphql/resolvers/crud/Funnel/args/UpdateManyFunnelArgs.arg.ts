import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelUpdateManyMutationInput } from "../../../inputs/FunnelUpdateManyMutationInput.input";
import { FunnelWhereInput } from "../../../inputs/FunnelWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyFunnelArgs {
  @TypeGraphQL.Field(_type => FunnelUpdateManyMutationInput, {
    nullable: false
  })
  data!: FunnelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FunnelWhereInput, {
    nullable: true
  })
  where?: FunnelWhereInput | undefined;
}
