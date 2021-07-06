import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateTrafficSourceArgs } from "./args/CreateTrafficSourceArgs.arg";
import { TrafficSource } from "../../../models/TrafficSource.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrafficSource)
export class CreateTrafficSourceResolver {
  @TypeGraphQL.Mutation(_returns => TrafficSource, {
    nullable: false
  })
  async createTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateTrafficSourceArgs): Promise<TrafficSource> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
