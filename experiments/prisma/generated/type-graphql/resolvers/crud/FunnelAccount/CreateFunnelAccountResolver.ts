import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateFunnelAccountArgs } from "./args/CreateFunnelAccountArgs.arg";
import { FunnelAccount } from "../../../models/FunnelAccount.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FunnelAccount)
export class CreateFunnelAccountResolver {
  @TypeGraphQL.Mutation(_returns => FunnelAccount, {
    nullable: false
  })
  async createFunnelAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateFunnelAccountArgs): Promise<FunnelAccount> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).funnelAccount.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
