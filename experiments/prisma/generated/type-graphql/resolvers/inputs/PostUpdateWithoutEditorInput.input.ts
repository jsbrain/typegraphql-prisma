import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput.input";
import { ClientUpdateOneRequiredWithoutPostsInput } from "../inputs/ClientUpdateOneRequiredWithoutPostsInput.input";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput.input";
import { NullableEnumPostKindFieldUpdateOperationsInput } from "../inputs/NullableEnumPostKindFieldUpdateOperationsInput.input";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateWithoutEditorInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  uuid?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  subtitle?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumPostKindFieldUpdateOperationsInput, {
    nullable: true
  })
  kind?: NullableEnumPostKindFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  metadata?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => ClientUpdateOneRequiredWithoutPostsInput, {
    nullable: true
  })
  author?: ClientUpdateOneRequiredWithoutPostsInput | undefined;
}
