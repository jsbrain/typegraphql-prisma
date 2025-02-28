import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemAvgAggregate } from "../outputs/ProblemAvgAggregate.output";
import { ProblemCountAggregate } from "../outputs/ProblemCountAggregate.output";
import { ProblemMaxAggregate } from "../outputs/ProblemMaxAggregate.output";
import { ProblemMinAggregate } from "../outputs/ProblemMinAggregate.output";
import { ProblemSumAggregate } from "../outputs/ProblemSumAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProblemGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  creatorId!: number | null;

  @TypeGraphQL.Field(_type => ProblemCountAggregate, {
    nullable: true
  })
  _count!: ProblemCountAggregate | null;

  @TypeGraphQL.Field(_type => ProblemAvgAggregate, {
    nullable: true
  })
  _avg!: ProblemAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProblemSumAggregate, {
    nullable: true
  })
  _sum!: ProblemSumAggregate | null;

  @TypeGraphQL.Field(_type => ProblemMinAggregate, {
    nullable: true
  })
  _min!: ProblemMinAggregate | null;

  @TypeGraphQL.Field(_type => ProblemMaxAggregate, {
    nullable: true
  })
  _max!: ProblemMaxAggregate | null;
}
