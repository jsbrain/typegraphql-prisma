import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DomainWhereInput } from "../inputs/DomainWhereInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DomainListRelationFilter {
  @TypeGraphQL.Field(_type => DomainWhereInput, {
    nullable: true
  })
  every?: DomainWhereInput | undefined;

  @TypeGraphQL.Field(_type => DomainWhereInput, {
    nullable: true
  })
  some?: DomainWhereInput | undefined;

  @TypeGraphQL.Field(_type => DomainWhereInput, {
    nullable: true
  })
  none?: DomainWhereInput | undefined;
}
