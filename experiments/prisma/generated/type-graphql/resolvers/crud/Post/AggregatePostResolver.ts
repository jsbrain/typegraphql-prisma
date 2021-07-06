import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePostArgs } from "./args/AggregatePostArgs.arg";
import { Post } from "../../../models/Post.model";
import { AggregatePost } from "../../outputs/AggregatePost.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class AggregatePostResolver {
  @TypeGraphQL.Query(_returns => AggregatePost, {
    nullable: false
  })
  async aggregatePost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostArgs): Promise<AggregatePost> {
    return getPrismaFromContext(ctx).post.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
