import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyTrafficSourceArgs } from "./args/FindManyTrafficSourceArgs.arg";
import { TrafficSource } from "../../../models/TrafficSource.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrafficSource)
export class FindManyTrafficSourceResolver {
  @TypeGraphQL.Query(_returns => [TrafficSource], {
    nullable: false
  })
  async trafficSources(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTrafficSourceArgs): Promise<TrafficSource[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
