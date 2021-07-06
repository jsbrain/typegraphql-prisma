import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClickDataUpdateManyMutationInput } from "../../../inputs/ClickDataUpdateManyMutationInput.input";
import { ClickDataWhereInput } from "../../../inputs/ClickDataWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyClickDataArgs {
  @TypeGraphQL.Field(_type => ClickDataUpdateManyMutationInput, {
    nullable: false
  })
  data!: ClickDataUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ClickDataWhereInput, {
    nullable: true
  })
  where?: ClickDataWhereInput | undefined;
}
