import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorOrderByWithRelationInput } from "../../../inputs/DirectorOrderByWithRelationInput.input";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput.input";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput.input";
import { DirectorScalarFieldEnum } from "../../../../enums/DirectorScalarFieldEnum.enum";

@TypeGraphQL.ArgsType()
export class FindFirstDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorWhereInput, {
    nullable: true
  })
  where?: DirectorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DirectorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DirectorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: true
  })
  cursor?: DirectorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DirectorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"firstName" | "lastName"> | undefined;
}
