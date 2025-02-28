import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutDirectorInput } from "../inputs/MovieCreateNestedManyWithoutDirectorInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutDirectorInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutDirectorInput | undefined;
}
