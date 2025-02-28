import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter.input";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter.input";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter.input";
import { IntFilter } from "../inputs/IntFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NativeTypeModelWhereInput {
  @TypeGraphQL.Field(_type => [NativeTypeModelWhereInput], {
    nullable: true
  })
  AND?: NativeTypeModelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelWhereInput], {
    nullable: true
  })
  OR?: NativeTypeModelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelWhereInput], {
    nullable: true
  })
  NOT?: NativeTypeModelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  bigInt?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  byteA?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  decimal?: DecimalNullableFilter | undefined;
}
