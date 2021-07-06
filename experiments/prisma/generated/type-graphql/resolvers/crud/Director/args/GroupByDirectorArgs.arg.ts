import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorOrderByWithAggregationInput } from "../../../inputs/DirectorOrderByWithAggregationInput.input";
import { DirectorScalarWhereWithAggregatesInput } from "../../../inputs/DirectorScalarWhereWithAggregatesInput.input";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput.input";
import { DirectorScalarFieldEnum } from "../../../../enums/DirectorScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorWhereInput, {
    nullable: true
  })
  where?: DirectorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DirectorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DirectorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DirectorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"firstName" | "lastName">;

  @TypeGraphQL.Field(_type => DirectorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DirectorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
