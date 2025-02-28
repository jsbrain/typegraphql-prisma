import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter.input";
import { ProblemListRelationFilter } from "../inputs/ProblemListRelationFilter.input";
import { StringFilter } from "../inputs/StringFilter.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorWhereInput {
  @TypeGraphQL.Field(_type => [CreatorWhereInput], {
    nullable: true
  })
  AND?: CreatorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereInput], {
    nullable: true
  })
  OR?: CreatorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereInput], {
    nullable: true
  })
  NOT?: CreatorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProblemListRelationFilter, {
    nullable: true
  })
  likes?: ProblemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProblemListRelationFilter, {
    nullable: true
  })
  problems?: ProblemListRelationFilter | undefined;
}
