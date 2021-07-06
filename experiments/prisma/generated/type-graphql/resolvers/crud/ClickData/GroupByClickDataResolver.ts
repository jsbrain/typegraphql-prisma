import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByClickDataArgs } from "./args/GroupByClickDataArgs.arg";
import { ClickData } from "../../../models/ClickData.model";
import { ClickDataGroupBy } from "../../outputs/ClickDataGroupBy.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClickData)
export class GroupByClickDataResolver {
  @TypeGraphQL.Query(_returns => [ClickDataGroupBy], {
    nullable: false
  })
  async groupByClickData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByClickDataArgs): Promise<ClickDataGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).clickData.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
