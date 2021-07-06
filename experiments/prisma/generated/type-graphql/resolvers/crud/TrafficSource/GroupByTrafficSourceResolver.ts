import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTrafficSourceArgs } from "./args/GroupByTrafficSourceArgs.arg";
import { TrafficSource } from "../../../models/TrafficSource.model";
import { TrafficSourceGroupBy } from "../../outputs/TrafficSourceGroupBy.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrafficSource)
export class GroupByTrafficSourceResolver {
  @TypeGraphQL.Query(_returns => [TrafficSourceGroupBy], {
    nullable: false
  })
  async groupByTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTrafficSourceArgs): Promise<TrafficSourceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
