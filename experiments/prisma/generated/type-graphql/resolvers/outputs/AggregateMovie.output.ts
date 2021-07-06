import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCountAggregate } from "../outputs/MovieCountAggregate.output";
import { MovieMaxAggregate } from "../outputs/MovieMaxAggregate.output";
import { MovieMinAggregate } from "../outputs/MovieMinAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateMovie {
  @TypeGraphQL.Field(_type => MovieCountAggregate, {
    nullable: true
  })
  _count!: MovieCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieMinAggregate, {
    nullable: true
  })
  _min!: MovieMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieMaxAggregate, {
    nullable: true
  })
  _max!: MovieMaxAggregate | null;
}
