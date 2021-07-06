import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTrafficSourceArgs } from "./args/AggregateTrafficSourceArgs.arg";
import { CreateManyTrafficSourceArgs } from "./args/CreateManyTrafficSourceArgs.arg";
import { CreateTrafficSourceArgs } from "./args/CreateTrafficSourceArgs.arg";
import { DeleteManyTrafficSourceArgs } from "./args/DeleteManyTrafficSourceArgs.arg";
import { DeleteTrafficSourceArgs } from "./args/DeleteTrafficSourceArgs.arg";
import { FindFirstTrafficSourceArgs } from "./args/FindFirstTrafficSourceArgs.arg";
import { FindManyTrafficSourceArgs } from "./args/FindManyTrafficSourceArgs.arg";
import { FindUniqueTrafficSourceArgs } from "./args/FindUniqueTrafficSourceArgs.arg";
import { GroupByTrafficSourceArgs } from "./args/GroupByTrafficSourceArgs.arg";
import { UpdateManyTrafficSourceArgs } from "./args/UpdateManyTrafficSourceArgs.arg";
import { UpdateTrafficSourceArgs } from "./args/UpdateTrafficSourceArgs.arg";
import { UpsertTrafficSourceArgs } from "./args/UpsertTrafficSourceArgs.arg";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TrafficSource } from "../../../models/TrafficSource.model";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput.output";
import { AggregateTrafficSource } from "../../outputs/AggregateTrafficSource.output";
import { TrafficSourceGroupBy } from "../../outputs/TrafficSourceGroupBy.output";

@TypeGraphQL.Resolver(_of => TrafficSource)
export class TrafficSourceCrudResolver {
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

  @TypeGraphQL.Query(_returns => TrafficSource, {
    nullable: true
  })
  async findFirstTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTrafficSourceArgs): Promise<TrafficSource | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTrafficSourceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TrafficSource, {
    nullable: true
  })
  async deleteTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTrafficSourceArgs): Promise<TrafficSource | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TrafficSource, {
    nullable: true
  })
  async updateTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateTrafficSourceArgs): Promise<TrafficSource | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTrafficSourceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTrafficSourceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TrafficSource, {
    nullable: false
  })
  async upsertTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTrafficSourceArgs): Promise<TrafficSource> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trafficSource.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateTrafficSource, {
    nullable: false
  })
  async aggregateTrafficSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTrafficSourceArgs): Promise<AggregateTrafficSource> {
    return getPrismaFromContext(ctx).trafficSource.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
