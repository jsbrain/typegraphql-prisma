import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelCreatecardsInput {
  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: false
  })
  set!: number[];
}
