import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteFunnelAccountArgs } from "./args/DeleteFunnelAccountArgs.arg";
import { FunnelAccount } from "../../../models/FunnelAccount.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FunnelAccount)
export class DeleteFunnelAccountResolver {
  @TypeGraphQL.Mutation(_returns => FunnelAccount, {
    nullable: true
  })
  async deleteFunnelAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteFunnelAccountArgs): Promise<FunnelAccount | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).funnelAccount.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
