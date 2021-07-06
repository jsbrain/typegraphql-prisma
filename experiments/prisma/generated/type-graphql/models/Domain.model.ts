import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { FunnelAccount } from "../models/FunnelAccount.model";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Domain {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  state!: string;

  /** When domain was first rent. // TODO: Change to required */
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: "When domain was first rent. // TODO: Change to required"
  })
  creationDate?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  FunnelAccount?: FunnelAccount | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  funnelAccountId?: string | null;
}
