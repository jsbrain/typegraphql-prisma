import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClickDataWhereInput } from "../../../inputs/ClickDataWhereInput.input";

@TypeGraphQL.ArgsType()
export class DeleteManyClickDataArgs {
  @TypeGraphQL.Field(_type => ClickDataWhereInput, {
    nullable: true
  })
  where?: ClickDataWhereInput | undefined;
}
