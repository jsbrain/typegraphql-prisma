import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DomainCreateInput } from "../../../inputs/DomainCreateInput.input";
import { DomainUpdateInput } from "../../../inputs/DomainUpdateInput.input";
import { DomainWhereUniqueInput } from "../../../inputs/DomainWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertDomainArgs {
  @TypeGraphQL.Field(_type => DomainWhereUniqueInput, {
    nullable: false
  })
  where!: DomainWhereUniqueInput;

  @TypeGraphQL.Field(_type => DomainCreateInput, {
    nullable: false
  })
  create!: DomainCreateInput;

  @TypeGraphQL.Field(_type => DomainUpdateInput, {
    nullable: false
  })
  update!: DomainUpdateInput;
}
