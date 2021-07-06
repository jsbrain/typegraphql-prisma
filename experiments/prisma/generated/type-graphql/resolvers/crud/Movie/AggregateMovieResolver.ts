import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMovieArgs } from "./args/AggregateMovieArgs.arg";
import { Movie } from "../../../models/Movie.model";
import { AggregateMovie } from "../../outputs/AggregateMovie.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class AggregateMovieResolver {
  @TypeGraphQL.Query(_returns => AggregateMovie, {
    nullable: false
  })
  async aggregateMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieArgs): Promise<AggregateMovie> {
    return getPrismaFromContext(ctx).movie.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
