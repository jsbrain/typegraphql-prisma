import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemOrderByWithAggregationInput } from "../../../inputs/ProblemOrderByWithAggregationInput.input";
import { ProblemScalarWhereWithAggregatesInput } from "../../../inputs/ProblemScalarWhereWithAggregatesInput.input";
import { ProblemWhereInput } from "../../../inputs/ProblemWhereInput.input";
import { ProblemScalarFieldEnum } from "../../../../enums/ProblemScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class GroupByProblemArgs {
  @TypeGraphQL.Field(_type => ProblemWhereInput, {
    nullable: true
  })
  where?: ProblemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProblemOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProblemOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "problemText" | "creatorId">;

  @TypeGraphQL.Field(_type => ProblemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProblemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
