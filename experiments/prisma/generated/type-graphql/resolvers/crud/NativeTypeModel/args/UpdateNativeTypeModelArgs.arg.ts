import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelUpdateInput } from "../../../inputs/NativeTypeModelUpdateInput.input";
import { NativeTypeModelWhereUniqueInput } from "../../../inputs/NativeTypeModelWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => NativeTypeModelUpdateInput, {
    nullable: false
  })
  data!: NativeTypeModelUpdateInput;

  @TypeGraphQL.Field(_type => NativeTypeModelWhereUniqueInput, {
    nullable: false
  })
  where!: NativeTypeModelWhereUniqueInput;
}
