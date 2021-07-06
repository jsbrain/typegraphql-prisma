import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTrafficSourceArgs } from "./args/AggregateTrafficSourceArgs.arg";
import { TrafficSource } from "../../../models/TrafficSource.model";
import { AggregateTrafficSource } from "../../outputs/AggregateTrafficSource.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrafficSource)
export class AggregateTrafficSourceResolver {
  @TypeGraphQL.Query(_returns => AggregateTrafficSource, {
    nullable: false
  })
  async aggregateTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTrafficSourceArgs): Promise<AggregateTrafficSource> {
    return getPrismaFromContext(ctx).trafficSource.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
