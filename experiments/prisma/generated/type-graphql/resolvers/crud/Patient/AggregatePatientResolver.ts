import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePatientArgs } from "./args/AggregatePatientArgs.arg";
import { Patient } from "../../../models/Patient.model";
import { AggregatePatient } from "../../outputs/AggregatePatient.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class AggregatePatientResolver {
  @TypeGraphQL.Query(_returns => AggregatePatient, {
    nullable: false
  })
  async aggregatePatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePatientArgs): Promise<AggregatePatient> {
    return getPrismaFromContext(ctx).patient.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
