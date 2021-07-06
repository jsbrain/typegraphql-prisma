import * as TypeGraphQL from "type-graphql";
import { Funnel } from "../../../models/Funnel.model";
import { FunnelAccount } from "../../../models/FunnelAccount.model";
import { FunnelLinkedAccountsArgs } from "./args/FunnelLinkedAccountsArgs.arg";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Funnel)
export class FunnelRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [FunnelAccount], {
    nullable: false,
    description: "Accounts linked to the funnel, to track all belonging settings etc."
  })
  async linkedAccounts(@TypeGraphQL.Root() funnel: Funnel, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FunnelLinkedAccountsArgs): Promise<FunnelAccount[]> {
    return getPrismaFromContext(ctx).funnel.findUnique({
      where: {
        id: funnel.id,
      },
    }).linkedAccounts(args);
  }
}
