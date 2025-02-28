import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateNativeTypeModelArgs } from "./args/AggregateNativeTypeModelArgs.arg";
import { CreateManyNativeTypeModelArgs } from "./args/CreateManyNativeTypeModelArgs.arg";
import { CreateNativeTypeModelArgs } from "./args/CreateNativeTypeModelArgs.arg";
import { DeleteManyNativeTypeModelArgs } from "./args/DeleteManyNativeTypeModelArgs.arg";
import { DeleteNativeTypeModelArgs } from "./args/DeleteNativeTypeModelArgs.arg";
import { FindFirstNativeTypeModelArgs } from "./args/FindFirstNativeTypeModelArgs.arg";
import { FindManyNativeTypeModelArgs } from "./args/FindManyNativeTypeModelArgs.arg";
import { FindUniqueNativeTypeModelArgs } from "./args/FindUniqueNativeTypeModelArgs.arg";
import { GroupByNativeTypeModelArgs } from "./args/GroupByNativeTypeModelArgs.arg";
import { UpdateManyNativeTypeModelArgs } from "./args/UpdateManyNativeTypeModelArgs.arg";
import { UpdateNativeTypeModelArgs } from "./args/UpdateNativeTypeModelArgs.arg";
import { UpsertNativeTypeModelArgs } from "./args/UpsertNativeTypeModelArgs.arg";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { NativeTypeModel } from "../../../models/NativeTypeModel.model";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput.output";
import { AggregateNativeTypeModel } from "../../outputs/AggregateNativeTypeModel.output";
import { NativeTypeModelGroupBy } from "../../outputs/NativeTypeModelGroupBy.output";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class NativeTypeModelCrudResolver {
  @TypeGraphQL.Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async nativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async findFirstNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NativeTypeModel], {
    nullable: false
  })
  async nativeTypeModels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNativeTypeModelArgs): Promise<NativeTypeModel[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async createNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateNativeTypeModelArgs): Promise<NativeTypeModel> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: true
  })
  async deleteNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: true
  })
  async updateNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async upsertNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertNativeTypeModelArgs): Promise<NativeTypeModel> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateNativeTypeModel, {
    nullable: false
  })
  async aggregateNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNativeTypeModelArgs): Promise<AggregateNativeTypeModel> {
    return getPrismaFromContext(ctx).nativeTypeModel.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [NativeTypeModelGroupBy], {
    nullable: false
  })
  async groupByNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNativeTypeModelArgs): Promise<NativeTypeModelGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
