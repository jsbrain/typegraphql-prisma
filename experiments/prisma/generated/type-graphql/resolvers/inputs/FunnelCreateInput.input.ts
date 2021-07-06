import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { FunnelAccountCreateNestedManyWithoutFunnelInput } from "../inputs/FunnelAccountCreateNestedManyWithoutFunnelInput.input";
import { FunnelCreatecardsInput } from "../inputs/FunnelCreatecardsInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FunnelCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  trafficFirstSeen?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  browserProfile!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => FunnelCreatecardsInput, {
    nullable: true
  })
  cards?: FunnelCreatecardsInput | undefined;

  @TypeGraphQL.Field(_type => FunnelAccountCreateNestedManyWithoutFunnelInput, {
    nullable: true
  })
  linkedAccounts?: FunnelAccountCreateNestedManyWithoutFunnelInput | undefined;
}
