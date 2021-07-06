import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorCreateInput } from "../../../inputs/DirectorCreateInput.input";
import { DirectorUpdateInput } from "../../../inputs/DirectorUpdateInput.input";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: false
  })
  where!: DirectorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DirectorCreateInput, {
    nullable: false
  })
  create!: DirectorCreateInput;

  @TypeGraphQL.Field(_type => DirectorUpdateInput, {
    nullable: false
  })
  update!: DirectorUpdateInput;
}
