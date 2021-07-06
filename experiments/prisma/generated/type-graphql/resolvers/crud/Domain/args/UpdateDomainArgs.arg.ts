import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DomainUpdateInput } from "../../../inputs/DomainUpdateInput.input";
import { DomainWhereUniqueInput } from "../../../inputs/DomainWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateDomainArgs {
  @TypeGraphQL.Field(_type => DomainUpdateInput, {
    nullable: false
  })
  data!: DomainUpdateInput;

  @TypeGraphQL.Field(_type => DomainWhereUniqueInput, {
    nullable: false
  })
  where!: DomainWhereUniqueInput;
}
