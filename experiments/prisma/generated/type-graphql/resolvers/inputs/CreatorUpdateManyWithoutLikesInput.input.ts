import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateOrConnectWithoutLikesInput } from "../inputs/CreatorCreateOrConnectWithoutLikesInput.input";
import { CreatorCreateWithoutLikesInput } from "../inputs/CreatorCreateWithoutLikesInput.input";
import { CreatorScalarWhereInput } from "../inputs/CreatorScalarWhereInput.input";
import { CreatorUpdateManyWithWhereWithoutLikesInput } from "../inputs/CreatorUpdateManyWithWhereWithoutLikesInput.input";
import { CreatorUpdateWithWhereUniqueWithoutLikesInput } from "../inputs/CreatorUpdateWithWhereUniqueWithoutLikesInput.input";
import { CreatorUpsertWithWhereUniqueWithoutLikesInput } from "../inputs/CreatorUpsertWithWhereUniqueWithoutLikesInput.input";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpdateManyWithoutLikesInput {
  @TypeGraphQL.Field(_type => [CreatorCreateWithoutLikesInput], {
    nullable: true
  })
  create?: CreatorCreateWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorCreateOrConnectWithoutLikesInput], {
    nullable: true
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorUpsertWithWhereUniqueWithoutLikesInput], {
    nullable: true
  })
  upsert?: CreatorUpsertWithWhereUniqueWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  set?: CreatorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CreatorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  delete?: CreatorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorUpdateWithWhereUniqueWithoutLikesInput], {
    nullable: true
  })
  update?: CreatorUpdateWithWhereUniqueWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorUpdateManyWithWhereWithoutLikesInput], {
    nullable: true
  })
  updateMany?: CreatorUpdateManyWithWhereWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CreatorScalarWhereInput[] | undefined;
}
