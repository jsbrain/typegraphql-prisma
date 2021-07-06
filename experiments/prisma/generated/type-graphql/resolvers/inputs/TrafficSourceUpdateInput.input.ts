import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataUpdateManyWithoutTrafficSourceInput } from "../inputs/ClickDataUpdateManyWithoutTrafficSourceInput.input";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput.input";
import { EnumTrafficSourceNameFieldUpdateOperationsInput } from "../inputs/EnumTrafficSourceNameFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumTrafficSourceNameFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumTrafficSourceNameFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ClickDataUpdateManyWithoutTrafficSourceInput, {
    nullable: true
  })
  clickData?: ClickDataUpdateManyWithoutTrafficSourceInput | undefined;
}
