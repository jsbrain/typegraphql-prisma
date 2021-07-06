import * as TypeGraphQL from "type-graphql";
import { ClickData } from "../../../models/ClickData.model";
import { TrafficSource } from "../../../models/TrafficSource.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClickData)
export class ClickDataRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => TrafficSource, {
    nullable: false
  })
  async trafficSource(@TypeGraphQL.Root() clickData: ClickData, @TypeGraphQL.Ctx() ctx: any): Promise<TrafficSource> {
    return getPrismaFromContext(ctx).clickData.findUnique({
      where: {
        id: clickData.id,
      },
    }).trafficSource({});
  }
}
