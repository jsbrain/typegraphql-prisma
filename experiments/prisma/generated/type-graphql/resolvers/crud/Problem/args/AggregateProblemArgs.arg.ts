import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemOrderByWithRelationInput } from "../../../inputs/ProblemOrderByWithRelationInput.input";
import { ProblemWhereInput } from "../../../inputs/ProblemWhereInput.input";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class AggregateProblemArgs {
  @TypeGraphQL.Field(_type => ProblemWhereInput, {
    nullable: true
  })
  where?: ProblemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProblemOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProblemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProblemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
