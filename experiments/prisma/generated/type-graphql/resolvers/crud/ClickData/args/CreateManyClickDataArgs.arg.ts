import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClickDataCreateManyInput } from "../../../inputs/ClickDataCreateManyInput.input";

@TypeGraphQL.ArgsType()
export class CreateManyClickDataArgs {
  @TypeGraphQL.Field(_type => [ClickDataCreateManyInput], {
    nullable: false
  })
  data!: ClickDataCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
