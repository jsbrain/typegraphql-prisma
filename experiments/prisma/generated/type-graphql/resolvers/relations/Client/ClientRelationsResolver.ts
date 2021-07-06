import * as TypeGraphQL from "type-graphql";
import { Client } from "../../../models/Client.model";
import { Post } from "../../../models/Post.model";
import { ClientPostsArgs } from "./args/ClientPostsArgs.arg";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class ClientRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async clientPosts(@TypeGraphQL.Root() client: Client, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ClientPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: client.id,
      },
    }).posts(args);
  }
}
