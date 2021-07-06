import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateOrConnectWithoutPostsInput } from "../inputs/ClientCreateOrConnectWithoutPostsInput.input";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput.input";
import { ClientUpdateWithoutPostsInput } from "../inputs/ClientUpdateWithoutPostsInput.input";
import { ClientUpsertWithoutPostsInput } from "../inputs/ClientUpsertWithoutPostsInput.input";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateOneRequiredWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientCreateWithoutPostsInput, {
    nullable: true
  })
  create?: ClientCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: ClientUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: ClientUpdateWithoutPostsInput | undefined;
}
