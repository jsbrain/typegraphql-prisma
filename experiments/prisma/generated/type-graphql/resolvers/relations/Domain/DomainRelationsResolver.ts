import * as TypeGraphQL from "type-graphql";
import { Domain } from "../../../models/Domain.model";
import { FunnelAccount } from "../../../models/FunnelAccount.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Domain)
export class DomainRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => FunnelAccount, {
    nullable: true
  })
  async FunnelAccount(@TypeGraphQL.Root() domain: Domain, @TypeGraphQL.Ctx() ctx: any): Promise<FunnelAccount | null> {
    return getPrismaFromContext(ctx).domain.findUnique({
      where: {
        id: domain.id,
      },
    }).FunnelAccount({});
  }
}
