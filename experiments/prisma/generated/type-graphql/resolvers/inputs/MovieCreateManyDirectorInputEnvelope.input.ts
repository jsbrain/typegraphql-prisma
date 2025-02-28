import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateManyDirectorInput } from "../inputs/MovieCreateManyDirectorInput.input";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateManyDirectorInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieCreateManyDirectorInput], {
    nullable: false
  })
  data!: MovieCreateManyDirectorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
