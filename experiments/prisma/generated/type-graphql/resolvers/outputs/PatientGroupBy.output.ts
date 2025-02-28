import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCountAggregate } from "../outputs/PatientCountAggregate.output";
import { PatientMaxAggregate } from "../outputs/PatientMaxAggregate.output";
import { PatientMinAggregate } from "../outputs/PatientMinAggregate.output";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PatientGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => PatientCountAggregate, {
    nullable: true
  })
  _count!: PatientCountAggregate | null;

  @TypeGraphQL.Field(_type => PatientMinAggregate, {
    nullable: true
  })
  _min!: PatientMinAggregate | null;

  @TypeGraphQL.Field(_type => PatientMaxAggregate, {
    nullable: true
  })
  _max!: PatientMaxAggregate | null;
}
