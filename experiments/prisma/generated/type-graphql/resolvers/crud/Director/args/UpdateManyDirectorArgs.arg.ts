import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorUpdateManyMutationInput } from "../../../inputs/DirectorUpdateManyMutationInput.input";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput.input";

@TypeGraphQL.ArgsType()
export class UpdateManyDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorUpdateManyMutationInput, {
    nullable: false
  })
  data!: DirectorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DirectorWhereInput, {
    nullable: true
  })
  where?: DirectorWhereInput | undefined;
}
