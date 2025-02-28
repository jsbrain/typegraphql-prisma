import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorRelationFilter {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  is?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  isNot?: CreatorWhereInput | undefined;
}
