import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFunnelAccountArgs } from "./args/AggregateFunnelAccountArgs.arg";
import { FunnelAccount } from "../../../models/FunnelAccount.model";
import { AggregateFunnelAccount } from "../../outputs/AggregateFunnelAccount.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FunnelAccount)
export class AggregateFunnelAccountResolver {
  @TypeGraphQL.Query(_returns => AggregateFunnelAccount, {
    nullable: false
  })
  async aggregateFunnelAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFunnelAccountArgs): Promise<AggregateFunnelAccount> {
    return getPrismaFromContext(ctx).funnelAccount.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
