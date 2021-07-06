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
export class DomainGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  state!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  creationDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  funnelAccountId!: string | null;

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
