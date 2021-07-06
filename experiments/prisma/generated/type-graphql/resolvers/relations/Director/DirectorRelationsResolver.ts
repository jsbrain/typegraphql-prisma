import * as TypeGraphQL from "type-graphql";
import { Director } from "../../../models/Director.model";
import { Movie } from "../../../models/Movie.model";
import { DirectorMoviesArgs } from "./args/DirectorMoviesArgs.arg";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class DirectorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() director: Director, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DirectorMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).director.findUnique({
      where: {
        firstName_lastName: {
          firstName: director.firstName,
          lastName: director.lastName,
        },
      },
    }).movies(args);
  }
}
