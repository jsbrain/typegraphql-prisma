import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateOrConnectWithoutProblemsInput } from "../inputs/CreatorCreateOrConnectWithoutProblemsInput.input";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput.input";
import { CreatorUpdateWithoutProblemsInput } from "../inputs/CreatorUpdateWithoutProblemsInput.input";
import { CreatorUpsertWithoutProblemsInput } from "../inputs/CreatorUpsertWithoutProblemsInput.input";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpdateOneWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: true
  })
  create?: CreatorCreateWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorCreateOrConnectWithoutProblemsInput, {
    nullable: true
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpsertWithoutProblemsInput, {
    nullable: true
  })
  upsert?: CreatorUpsertWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateWithoutProblemsInput, {
    nullable: true
  })
  update?: CreatorUpdateWithoutProblemsInput | undefined;
}
