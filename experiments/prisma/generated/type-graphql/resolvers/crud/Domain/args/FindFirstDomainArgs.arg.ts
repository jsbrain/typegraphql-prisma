import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DomainOrderByWithRelationInput } from "../../../inputs/DomainOrderByWithRelationInput.input";
import { DomainWhereInput } from "../../../inputs/DomainWhereInput.input";
import { DomainWhereUniqueInput } from "../../../inputs/DomainWhereUniqueInput.input";
import { DomainScalarFieldEnum } from "../../../../enums/DomainScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class FindFirstDomainArgs {
  @TypeGraphQL.Field(_type => DomainWhereInput, {
    nullable: true
  })
  where?: DomainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DomainOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DomainOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DomainWhereUniqueInput, {
    nullable: true
  })
  cursor?: DomainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DomainScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "state" | "creationDate" | "createdAt" | "updatedAt" | "funnelAccountId"> | undefined;
}
