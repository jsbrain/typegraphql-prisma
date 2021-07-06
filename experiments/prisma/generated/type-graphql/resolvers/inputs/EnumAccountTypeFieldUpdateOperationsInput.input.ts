import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { AccountType } from "../../enums/AccountType.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumAccountTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => AccountType, {
    nullable: true
  })
  set?: "BING_ADS" | "GOOGLE_ADS" | "CLICKBANK" | "MAXWEB" | undefined;
}
