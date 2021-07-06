import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelAccountCreateManyInput } from "../../../inputs/FunnelAccountCreateManyInput.input";

@TypeGraphQL.ArgsType()
export class CreateManyFunnelAccountArgs {
  @TypeGraphQL.Field(_type => [FunnelAccountCreateManyInput], {
    nullable: false
  })
  data!: FunnelAccountCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
