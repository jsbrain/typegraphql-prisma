import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientOrderByWithRelationInput } from "../../../inputs/ClientOrderByWithRelationInput.input";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput.input";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput.input";

@TypeGraphQL.ArgsType()
export class AggregateClientArgs {
  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  where?: ClientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClientOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ClientOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  cursor?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
