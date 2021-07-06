import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorAvgAggregate } from "../outputs/CreatorAvgAggregate.output";
import { CreatorCountAggregate } from "../outputs/CreatorCountAggregate.output";
import { CreatorMaxAggregate } from "../outputs/CreatorMaxAggregate.output";
import { CreatorMinAggregate } from "../outputs/CreatorMinAggregate.output";
import { CreatorSumAggregate } from "../outputs/CreatorSumAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CreatorGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => CreatorCountAggregate, {
    nullable: true
  })
  _count!: CreatorCountAggregate | null;

  @TypeGraphQL.Field(_type => CreatorAvgAggregate, {
    nullable: true
  })
  _avg!: CreatorAvgAggregate | null;

  @TypeGraphQL.Field(_type => CreatorSumAggregate, {
    nullable: true
  })
  _sum!: CreatorSumAggregate | null;

  @TypeGraphQL.Field(_type => CreatorMinAggregate, {
    nullable: true
  })
  _min!: CreatorMinAggregate | null;

  @TypeGraphQL.Field(_type => CreatorMaxAggregate, {
    nullable: true
  })
  _max!: CreatorMaxAggregate | null;
}
