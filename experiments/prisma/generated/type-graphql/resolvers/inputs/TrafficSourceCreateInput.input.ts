import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClickDataCreateNestedManyWithoutTrafficSourceInput } from "../inputs/ClickDataCreateNestedManyWithoutTrafficSourceInput.input";
import { TrafficSourceName } from "../../enums/TrafficSourceName.enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TrafficSourceCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TrafficSourceName, {
    nullable: false
  })
  name!: "CONTENT_AD" | "OUTBRAIN" | "TABOOLA";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ClickDataCreateNestedManyWithoutTrafficSourceInput, {
    nullable: true
  })
  clickData?: ClickDataCreateNestedManyWithoutTrafficSourceInput | undefined;
}
