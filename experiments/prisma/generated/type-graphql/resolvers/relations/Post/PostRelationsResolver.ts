import * as TypeGraphQL from "type-graphql";
import { Client } from "../../../models/Client.model";
import { Post } from "../../../models/Post.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Client, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<Client> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        uuid: post.uuid,
      },
    }).author({});
  }
}
