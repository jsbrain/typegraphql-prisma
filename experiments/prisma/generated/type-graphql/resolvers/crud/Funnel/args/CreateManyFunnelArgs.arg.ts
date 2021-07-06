import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FunnelCreateManyInput } from "../../../inputs/FunnelCreateManyInput.input";

@TypeGraphQL.ArgsType()
export class CreateManyFunnelArgs {
  @TypeGraphQL.Field(_type => [FunnelCreateManyInput], {
    nullable: false
  })
  data!: FunnelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
