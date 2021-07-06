import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClientSumAggregate } from "../outputs/Clie.output.tsumAggregate.output";
import { ClientAvgAggregate } from "../outputs/ClientAvgAggregate.output";
import { ClientCountAggregate } from "../outputs/ClientCountAggregate.output";
import { ClientMaxAggregate } from "../outputs/ClientMaxAggregate.output";
import { ClientMinAggregate } from "../outputs/ClientMinAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateClient {
  @TypeGraphQL.Field(_type => ClientCountAggregate, {
    nullable: true
  })
  _count!: ClientCountAggregate | null;

  @TypeGraphQL.Field(_type => ClientAvgAggregate, {
    nullable: true
  })
  _avg!: ClientAvgAggregate | null;

  @TypeGraphQL.Field(_type => ClientSumAggregate, {
    nullable: true
  })
  _sum!: ClientSumAggregate | null;

  @TypeGraphQL.Field(_type => ClientMinAggregate, {
    nullable: true
  })
  _min!: ClientMinAggregate | null;

  @TypeGraphQL.Field(_type => ClientMaxAggregate, {
    nullable: true
  })
  _max!: ClientMaxAggregate | null;
}
