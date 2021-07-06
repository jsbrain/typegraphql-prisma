import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelWhereUniqueInput } from "../../../inputs/NativeTypeModelWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class FindUniqueNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => NativeTypeModelWhereUniqueInput, {
    nullable: false
  })
  where!: NativeTypeModelWhereUniqueInput;
}
