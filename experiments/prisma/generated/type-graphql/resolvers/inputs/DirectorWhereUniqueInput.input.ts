import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorFirstNameLastNameCompoundUniqueInput } from "../inputs/DirectorFirstNameLastNameCompoundUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorWhereUniqueInput {
  @TypeGraphQL.Field(_type => DirectorFirstNameLastNameCompoundUniqueInput, {
    nullable: true
  })
  firstName_lastName?: DirectorFirstNameLastNameCompoundUniqueInput | undefined;
}
