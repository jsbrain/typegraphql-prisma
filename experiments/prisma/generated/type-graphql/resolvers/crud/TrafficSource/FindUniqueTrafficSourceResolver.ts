import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTrafficSourceArgs } from "./args/FindUniqueTrafficSourceArgs.arg";
import { TrafficSource } from "../../../models/TrafficSource.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrafficSource)
export class FindUniqueTrafficSourceResolver {
  @TypeGraphQL.Query(_returns => TrafficSource, {
    nullable: true
  })
  async trafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTrafficSourceArgs): Promise<TrafficSource | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
