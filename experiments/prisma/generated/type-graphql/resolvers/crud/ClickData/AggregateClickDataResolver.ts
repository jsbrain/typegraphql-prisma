import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateClickDataArgs } from "./args/AggregateClickDataArgs.arg";
import { ClickData } from "../../../models/ClickData.model";
import { AggregateClickData } from "../../outputs/AggregateClickData.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClickData)
export class AggregateClickDataResolver {
  @TypeGraphQL.Query(_returns => AggregateClickData, {
    nullable: false
  })
  async aggregateClickData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateClickDataArgs): Promise<AggregateClickData> {
    return getPrismaFromContext(ctx).clickData.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
