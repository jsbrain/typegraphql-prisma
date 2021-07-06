import * as TypeGraphQL from "type-graphql";
import { ClickData } from "../../../models/ClickData.model";
import { TrafficSource } from "../../../models/TrafficSource.model";
import { TrafficSourceClickDataArgs } from "./args/TrafficSourceClickDataArgs.arg";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrafficSource)
export class TrafficSourceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ClickData], {
    nullable: false
  })
  async clickData(@TypeGraphQL.Root() trafficSource: TrafficSource, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TrafficSourceClickDataArgs): Promise<ClickData[]> {
    return getPrismaFromContext(ctx).trafficSource.findUnique({
      where: {
        id: trafficSource.id,
      },
    }).clickData(args);
  }
}
