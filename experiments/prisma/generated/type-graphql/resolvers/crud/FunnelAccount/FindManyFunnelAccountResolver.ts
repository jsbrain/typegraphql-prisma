import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyFunnelAccountArgs } from "./args/FindManyFunnelAccountArgs.arg";
import { FunnelAccount } from "../../../models/FunnelAccount.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FunnelAccount)
export class FindManyFunnelAccountResolver {
  @TypeGraphQL.Query(_returns => [FunnelAccount], {
    nullable: false
  })
  async funnelAccounts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFunnelAccountArgs): Promise<FunnelAccount[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).funnelAccount.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
