import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NestedBoolFilter } from "../inputs/NestedBoolFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BoolFilter {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  equals?: boolean | undefined;

  @TypeGraphQL.Field(_type => NestedBoolFilter, {
    nullable: true
  })
  not?: NestedBoolFilter | undefined;
}
