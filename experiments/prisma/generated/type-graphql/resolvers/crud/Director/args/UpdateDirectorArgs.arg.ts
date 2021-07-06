import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorUpdateInput } from "../../../inputs/DirectorUpdateInput.input";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorUpdateInput, {
    nullable: false
  })
  data!: DirectorUpdateInput;

  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: false
  })
  where!: DirectorWhereUniqueInput;
}
