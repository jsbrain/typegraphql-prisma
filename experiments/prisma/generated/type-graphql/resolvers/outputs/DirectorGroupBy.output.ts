import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorCountAggregate } from "../outputs/DirectorCountAggregate.output";
import { DirectorMaxAggregate } from "../outputs/DirectorMaxAggregate.output";
import { DirectorMinAggregate } from "../outputs/DirectorMinAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DirectorGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => DirectorCountAggregate, {
    nullable: true
  })
  _count!: DirectorCountAggregate | null;

  @TypeGraphQL.Field(_type => DirectorMinAggregate, {
    nullable: true
  })
  _min!: DirectorMinAggregate | null;

  @TypeGraphQL.Field(_type => DirectorMaxAggregate, {
    nullable: true
  })
  _max!: DirectorMaxAggregate | null;
}
