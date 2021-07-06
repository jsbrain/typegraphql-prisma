import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostSumAggregate } from "../outputs/Po.output.tsumAggregate.output";
import { PostAvgAggregate } from "../outputs/PostAvgAggregate.output";
import { PostCountAggregate } from "../outputs/PostCountAggregate.output";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate.output";
import { PostMinAggregate } from "../outputs/PostMinAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregatePost {
  @TypeGraphQL.Field(_type => PostCountAggregate, {
    nullable: true
  })
  _count!: PostCountAggregate | null;

  @TypeGraphQL.Field(_type => PostAvgAggregate, {
    nullable: true
  })
  _avg!: PostAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostSumAggregate, {
    nullable: true
  })
  _sum!: PostSumAggregate | null;

  @TypeGraphQL.Field(_type => PostMinAggregate, {
    nullable: true
  })
  _min!: PostMinAggregate | null;

  @TypeGraphQL.Field(_type => PostMaxAggregate, {
    nullable: true
  })
  _max!: PostMaxAggregate | null;
}
