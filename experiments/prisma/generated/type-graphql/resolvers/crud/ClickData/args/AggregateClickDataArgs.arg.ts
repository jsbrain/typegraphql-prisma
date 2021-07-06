import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClickDataOrderByWithRelationInput } from "../../../inputs/ClickDataOrderByWithRelationInput.input";
import { ClickDataWhereInput } from "../../../inputs/ClickDataWhereInput.input";
import { ClickDataWhereUniqueInput } from "../../../inputs/ClickDataWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class AggregateClickDataArgs {
  @TypeGraphQL.Field(_type => ClickDataWhereInput, {
    nullable: true
  })
  where?: ClickDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClickDataOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ClickDataOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ClickDataWhereUniqueInput, {
    nullable: true
  })
  cursor?: ClickDataWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
