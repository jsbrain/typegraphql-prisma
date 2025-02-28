import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorListRelationFilter } from "../inputs/CreatorListRelationFilter.input";
import { CreatorRelationFilter } from "../inputs/CreatorRelationFilter.input";
import { IntFilter } from "../inputs/IntFilter.input";
import { IntNullableFilter } from "../inputs/IntNullableFilter.input";
import { StringFilter } from "../inputs/StringFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemWhereInput {
  @TypeGraphQL.Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  AND?: ProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  OR?: ProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  NOT?: ProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  problemText?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CreatorListRelationFilter, {
    nullable: true
  })
  likedBy?: CreatorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CreatorRelationFilter, {
    nullable: true
  })
  creator?: CreatorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  creatorId?: IntNullableFilter | undefined;
}
