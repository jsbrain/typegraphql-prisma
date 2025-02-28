import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueNativeTypeModelArgs } from "./args/FindUniqueNativeTypeModelArgs.arg";
import { NativeTypeModel } from "../../../models/NativeTypeModel.model";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class FindUniqueNativeTypeModelResolver {
  @TypeGraphQL.Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async nativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
