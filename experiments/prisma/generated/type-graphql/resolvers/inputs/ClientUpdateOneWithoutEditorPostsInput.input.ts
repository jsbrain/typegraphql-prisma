import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateOrConnectWithoutEditorPostsInput } from "../inputs/ClientCreateOrConnectWithoutEditorPostsInput.input";
import { ClientCreateWithoutEditorPostsInput } from "../inputs/ClientCreateWithoutEditorPostsInput.input";
import { ClientUpdateWithoutEditorPostsInput } from "../inputs/ClientUpdateWithoutEditorPostsInput.input";
import { ClientUpsertWithoutEditorPostsInput } from "../inputs/ClientUpsertWithoutEditorPostsInput.input";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateOneWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => ClientCreateWithoutEditorPostsInput, {
    nullable: true
  })
  create?: ClientCreateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutEditorPostsInput, {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpsertWithoutEditorPostsInput, {
    nullable: true
  })
  upsert?: ClientUpsertWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ClientUpdateWithoutEditorPostsInput, {
    nullable: true
  })
  update?: ClientUpdateWithoutEditorPostsInput | undefined;
}
