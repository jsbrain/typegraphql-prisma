import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelOrderByWithRelationInput } from "../../../inputs/NativeTypeModelOrderByWithRelationInput.input";
import { NativeTypeModelWhereInput } from "../../../inputs/NativeTypeModelWhereInput.input";
import { NativeTypeModelWhereUniqueInput } from "../../../inputs/NativeTypeModelWhereUniqueInput.input";
import { NativeTypeModelScalarFieldEnum } from "../../../../enums/NativeTypeModelScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class FindManyNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => NativeTypeModelWhereInput, {
    nullable: true
  })
  where?: NativeTypeModelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NativeTypeModelOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelWhereUniqueInput, {
    nullable: true
  })
  cursor?: NativeTypeModelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "bigInt" | "byteA" | "decimal"> | undefined;
}
