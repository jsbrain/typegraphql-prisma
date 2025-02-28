import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelOrderByWithAggregationInput } from "../../../inputs/NativeTypeModelOrderByWithAggregationInput.input";
import { NativeTypeModelScalarWhereWithAggregatesInput } from "../../../inputs/NativeTypeModelScalarWhereWithAggregatesInput.input";
import { NativeTypeModelWhereInput } from "../../../inputs/NativeTypeModelWhereInput.input";
import { NativeTypeModelScalarFieldEnum } from "../../../../enums/NativeTypeModelScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => NativeTypeModelWhereInput, {
    nullable: true
  })
  where?: NativeTypeModelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NativeTypeModelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "bigInt" | "byteA" | "decimal">;

  @TypeGraphQL.Field(_type => NativeTypeModelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NativeTypeModelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
