import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertFunnelAccountArgs } from "./args/UpsertFunnelAccountArgs.arg";
import { FunnelAccount } from "../../../models/FunnelAccount.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FunnelAccount)
export class UpsertFunnelAccountResolver {
  @TypeGraphQL.Mutation(_returns => FunnelAccount, {
    nullable: false
  })
  async upsertFunnelAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertFunnelAccountArgs): Promise<FunnelAccount> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).funnelAccount.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
