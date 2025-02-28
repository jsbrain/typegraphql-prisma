import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProblemArgs } from "./args/AggregateProblemArgs.arg";
import { Problem } from "../../../models/Problem.model";
import { AggregateProblem } from "../../outputs/AggregateProblem.output";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class AggregateProblemResolver {
  @TypeGraphQL.Query(_returns => AggregateProblem, {
    nullable: false
  })
  async aggregateProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProblemArgs): Promise<AggregateProblem> {
    return getPrismaFromContext(ctx).problem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
