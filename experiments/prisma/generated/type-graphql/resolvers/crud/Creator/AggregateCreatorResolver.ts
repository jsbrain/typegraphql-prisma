import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCreatorArgs } from "./args/AggregateCreatorArgs.arg";
import { Creator } from "../../../models/Creator.model";
import { AggregateCreator } from "../../outputs/AggregateCreator.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class AggregateCreatorResolver {
  @TypeGraphQL.Query(_returns => AggregateCreator, {
    nullable: false
  })
  async aggregateCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCreatorArgs): Promise<AggregateCreator> {
    return getPrismaFromContext(ctx).creator.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
