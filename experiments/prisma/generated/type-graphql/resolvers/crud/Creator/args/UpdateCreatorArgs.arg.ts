import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorUpdateInput } from "../../../inputs/CreatorUpdateInput.input";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpdateCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorUpdateInput, {
    nullable: false
  })
  data!: CreatorUpdateInput;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;
}
