import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { Domain } from "../models/Domain.model";
import { Funnel } from "../models/Funnel.model";
import { AccountType } from "../enums/AccountType.enum";
import { FunnelAccountCount } from "../resolvers/outputs/FunnelAccountCount.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class FunnelAccount {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  /** Type of the account to enable acount linking if type differs. */
  @TypeGraphQL.Field(_type => AccountType, {
    nullable: false,
    description: "Type of the account to enable acount linking if type differs."
  })
  type!: AccountType;

  /** Name or identifier of the account. If account is an affiliate account, this should be set to the affiliate id. */
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: "Name or identifier of the account. If account is an affiliate account, this should be set to the affiliate id."
  })
  name!: string;

  /** Domains linked to the account. Only applies to certain account types. */
  domains?: Domain[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  Funnel?: Funnel | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  funnelId?: string | null;

  @TypeGraphQL.Field(_type => FunnelAccountCount, {
    nullable: true
  })
  _count?: FunnelAccountCount | null;
}
