import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreatealiasesInput } from "../inputs/ClientCreatealiasesInput.input";
import { ClientCreategradesInput } from "../inputs/ClientCreategradesInput.input";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput.input";
import { Role } from "../../enums/Role.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  age!: number;

  balance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => ClientCreategradesInput, {
    nullable: true
  })
  grades?: ClientCreategradesInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreatealiasesInput, {
    nullable: true
  })
  aliases?: ClientCreatealiasesInput | undefined;

  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: string | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: number) {
    this.balance = balance;
  }

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostCreateNestedManyWithoutAuthorInput | undefined) {
    this.posts = posts;
  }
}
