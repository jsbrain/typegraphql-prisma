import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorCreateInput } from "../../../inputs/CreatorCreateInput.input";
import { CreatorUpdateInput } from "../../../inputs/CreatorUpdateInput.input";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class UpsertCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorCreateInput, {
    nullable: false
  })
  create!: CreatorCreateInput;

  @TypeGraphQL.Field(_type => CreatorUpdateInput, {
    nullable: false
  })
  update!: CreatorUpdateInput;
}
