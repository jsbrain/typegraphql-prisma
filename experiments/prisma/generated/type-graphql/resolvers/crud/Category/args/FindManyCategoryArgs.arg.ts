import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryOrderByWithRelationInput } from "../../../inputs/CategoryOrderByWithRelationInput.input";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput.input";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput.input";
import { CategoryScalarFieldEnum } from "../../../../enums/CategoryScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class FindManyCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"name" | "slug" | "number"> | undefined;
}
