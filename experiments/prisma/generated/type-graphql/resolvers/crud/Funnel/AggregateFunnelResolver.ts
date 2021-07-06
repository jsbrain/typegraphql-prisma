import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFunnelArgs } from "./args/AggregateFunnelArgs.arg";
import { Funnel } from "../../../models/Funnel.model";
import { AggregateFunnel } from "../../outputs/AggregateFunnel.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Funnel)
export class AggregateFunnelResolver {
  @TypeGraphQL.Query(_returns => AggregateFunnel, {
    nullable: false
  })
  async aggregateFunnel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFunnelArgs): Promise<AggregateFunnel> {
    return getPrismaFromContext(ctx).funnel.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
