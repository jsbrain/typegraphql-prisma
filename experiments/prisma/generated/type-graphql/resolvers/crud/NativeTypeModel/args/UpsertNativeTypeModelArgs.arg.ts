import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelCreateInput } from "../../../inputs/NativeTypeModelCreateInput.input";
import { NativeTypeModelUpdateInput } from "../../../inputs/NativeTypeModelUpdateInput.input";
import { NativeTypeModelWhereUniqueInput } from "../../../inputs/NativeTypeModelWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => NativeTypeModelWhereUniqueInput, {
    nullable: false
  })
  where!: NativeTypeModelWhereUniqueInput;

  @TypeGraphQL.Field(_type => NativeTypeModelCreateInput, {
    nullable: false
  })
  create!: NativeTypeModelCreateInput;

  @TypeGraphQL.Field(_type => NativeTypeModelUpdateInput, {
    nullable: false
  })
  update!: NativeTypeModelUpdateInput;
}
