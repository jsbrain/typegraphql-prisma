import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DomainWhereUniqueInput } from "../../../inputs/DomainWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class DeleteDomainArgs {
  @TypeGraphQL.Field(_type => DomainWhereUniqueInput, {
    nullable: false
  })
  where!: DomainWhereUniqueInput;
}
