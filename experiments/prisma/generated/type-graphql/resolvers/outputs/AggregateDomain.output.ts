import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DomainCountAggregate } from "../outputs/DomainCountAggregate.output";
import { DomainMaxAggregate } from "../outputs/DomainMaxAggregate.output";
import { DomainMinAggregate } from "../outputs/DomainMinAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateDomain {
  @TypeGraphQL.Field(_type => DomainCountAggregate, {
    nullable: true
  })
  _count!: DomainCountAggregate | null;

  @TypeGraphQL.Field(_type => DomainMinAggregate, {
    nullable: true
  })
  _min!: DomainMinAggregate | null;

  @TypeGraphQL.Field(_type => DomainMaxAggregate, {
    nullable: true
  })
  _max!: DomainMaxAggregate | null;
}
