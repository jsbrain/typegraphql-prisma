import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput.input";
import { PostUpdateWithoutAuthorInput } from "../inputs/PostUpdateWithoutAuthorInput.input";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: PostUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: PostCreateWithoutAuthorInput;
}
