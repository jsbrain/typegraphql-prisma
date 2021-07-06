import * as TypeGraphQL from "type-graphql";
import { Domain } from "../../../models/Domain.model";
import { Funnel } from "../../../models/Funnel.model";
import { FunnelAccount } from "../../../models/FunnelAccount.model";
import { FunnelAccountDomainsArgs } from "./args/FunnelAccountDomainsArgs.arg";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FunnelAccount)
export class FunnelAccountRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Domain], {
    nullable: false,
    description: "Domains linked to the account. Only applies to certain account types."
  })
  async domains(@TypeGraphQL.Root() funnelAccount: FunnelAccount, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FunnelAccountDomainsArgs): Promise<Domain[]> {
    return getPrismaFromContext(ctx).funnelAccount.findUnique({
      where: {
        id: funnelAccount.id,
      },
    }).domains(args);
  }

  @TypeGraphQL.FieldResolver(_type => Funnel, {
    nullable: true
  })
  async Funnel(@TypeGraphQL.Root() funnelAccount: FunnelAccount, @TypeGraphQL.Ctx() ctx: any): Promise<Funnel | null> {
    return getPrismaFromContext(ctx).funnelAccount.findUnique({
      where: {
        id: funnelAccount.id,
      },
    }).Funnel({});
  }
}
