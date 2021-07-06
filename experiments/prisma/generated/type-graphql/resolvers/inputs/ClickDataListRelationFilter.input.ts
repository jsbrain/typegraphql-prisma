import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataWhereInput } from "../inputs/ClickDataWhereInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClickDataListRelationFilter {
  @TypeGraphQL.Field(_type => ClickDataWhereInput, {
    nullable: true
  })
  every?: ClickDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClickDataWhereInput, {
    nullable: true
  })
  some?: ClickDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClickDataWhereInput, {
    nullable: true
  })
  none?: ClickDataWhereInput | undefined;
}
