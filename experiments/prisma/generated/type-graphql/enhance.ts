import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  TrafficSource: crudResolvers.TrafficSourceCrudResolver,
  ClickData: crudResolvers.ClickDataCrudResolver,
  FunnelAccount: crudResolvers.FunnelAccountCrudResolver,
  Domain: crudResolvers.DomainCrudResolver,
  Funnel: crudResolvers.FunnelCrudResolver
};
const relationResolversMap = {
  TrafficSource: relationResolvers.TrafficSourceRelationsResolver,
  ClickData: relationResolvers.ClickDataRelationsResolver,
  FunnelAccount: relationResolvers.FunnelAccountRelationsResolver,
  Domain: relationResolvers.DomainRelationsResolver,
  Funnel: relationResolvers.FunnelRelationsResolver
};
const actionResolversMap = {
  TrafficSource: {
    trafficSource: actionResolvers.FindUniqueTrafficSourceResolver,
    findFirstTrafficSource: actionResolvers.FindFirstTrafficSourceResolver,
    trafficSources: actionResolvers.FindManyTrafficSourceResolver,
    createTrafficSource: actionResolvers.CreateTrafficSourceResolver,
    createManyTrafficSource: actionResolvers.CreateManyTrafficSourceResolver,
    deleteTrafficSource: actionResolvers.DeleteTrafficSourceResolver,
    updateTrafficSource: actionResolvers.UpdateTrafficSourceResolver,
    deleteManyTrafficSource: actionResolvers.DeleteManyTrafficSourceResolver,
    updateManyTrafficSource: actionResolvers.UpdateManyTrafficSourceResolver,
    upsertTrafficSource: actionResolvers.UpsertTrafficSourceResolver,
    aggregateTrafficSource: actionResolvers.AggregateTrafficSourceResolver,
    groupByTrafficSource: actionResolvers.GroupByTrafficSourceResolver
  },
  ClickData: {
    findUniqueClickData: actionResolvers.FindUniqueClickDataResolver,
    findFirstClickData: actionResolvers.FindFirstClickDataResolver,
    findManyClickData: actionResolvers.FindManyClickDataResolver,
    createClickData: actionResolvers.CreateClickDataResolver,
    createManyClickData: actionResolvers.CreateManyClickDataResolver,
    deleteClickData: actionResolvers.DeleteClickDataResolver,
    updateClickData: actionResolvers.UpdateClickDataResolver,
    deleteManyClickData: actionResolvers.DeleteManyClickDataResolver,
    updateManyClickData: actionResolvers.UpdateManyClickDataResolver,
    upsertClickData: actionResolvers.UpsertClickDataResolver,
    aggregateClickData: actionResolvers.AggregateClickDataResolver,
    groupByClickData: actionResolvers.GroupByClickDataResolver
  },
  FunnelAccount: {
    funnelAccount: actionResolvers.FindUniqueFunnelAccountResolver,
    findFirstFunnelAccount: actionResolvers.FindFirstFunnelAccountResolver,
    funnelAccounts: actionResolvers.FindManyFunnelAccountResolver,
    createFunnelAccount: actionResolvers.CreateFunnelAccountResolver,
    createManyFunnelAccount: actionResolvers.CreateManyFunnelAccountResolver,
    deleteFunnelAccount: actionResolvers.DeleteFunnelAccountResolver,
    updateFunnelAccount: actionResolvers.UpdateFunnelAccountResolver,
    deleteManyFunnelAccount: actionResolvers.DeleteManyFunnelAccountResolver,
    updateManyFunnelAccount: actionResolvers.UpdateManyFunnelAccountResolver,
    upsertFunnelAccount: actionResolvers.UpsertFunnelAccountResolver,
    aggregateFunnelAccount: actionResolvers.AggregateFunnelAccountResolver,
    groupByFunnelAccount: actionResolvers.GroupByFunnelAccountResolver
  },
  Domain: {
    domain: actionResolvers.FindUniqueDomainResolver,
    findFirstDomain: actionResolvers.FindFirstDomainResolver,
    domains: actionResolvers.FindManyDomainResolver,
    createDomain: actionResolvers.CreateDomainResolver,
    createManyDomain: actionResolvers.CreateManyDomainResolver,
    deleteDomain: actionResolvers.DeleteDomainResolver,
    updateDomain: actionResolvers.UpdateDomainResolver,
    deleteManyDomain: actionResolvers.DeleteManyDomainResolver,
    updateManyDomain: actionResolvers.UpdateManyDomainResolver,
    upsertDomain: actionResolvers.UpsertDomainResolver,
    aggregateDomain: actionResolvers.AggregateDomainResolver,
    groupByDomain: actionResolvers.GroupByDomainResolver
  },
  Funnel: {
    funnel: actionResolvers.FindUniqueFunnelResolver,
    findFirstFunnel: actionResolvers.FindFirstFunnelResolver,
    funnels: actionResolvers.FindManyFunnelResolver,
    createFunnel: actionResolvers.CreateFunnelResolver,
    createManyFunnel: actionResolvers.CreateManyFunnelResolver,
    deleteFunnel: actionResolvers.DeleteFunnelResolver,
    updateFunnel: actionResolvers.UpdateFunnelResolver,
    deleteManyFunnel: actionResolvers.DeleteManyFunnelResolver,
    updateManyFunnel: actionResolvers.UpdateManyFunnelResolver,
    upsertFunnel: actionResolvers.UpsertFunnelResolver,
    aggregateFunnel: actionResolvers.AggregateFunnelResolver,
    groupByFunnel: actionResolvers.GroupByFunnelResolver
  }
};
const resolversInfo = {
  TrafficSource: ["trafficSource", "findFirstTrafficSource", "trafficSources", "createTrafficSource", "createManyTrafficSource", "deleteTrafficSource", "updateTrafficSource", "deleteManyTrafficSource", "updateManyTrafficSource", "upsertTrafficSource", "aggregateTrafficSource", "groupByTrafficSource"],
  ClickData: ["findUniqueClickData", "findFirstClickData", "findManyClickData", "createClickData", "createManyClickData", "deleteClickData", "updateClickData", "deleteManyClickData", "updateManyClickData", "upsertClickData", "aggregateClickData", "groupByClickData"],
  FunnelAccount: ["funnelAccount", "findFirstFunnelAccount", "funnelAccounts", "createFunnelAccount", "createManyFunnelAccount", "deleteFunnelAccount", "updateFunnelAccount", "deleteManyFunnelAccount", "updateManyFunnelAccount", "upsertFunnelAccount", "aggregateFunnelAccount", "groupByFunnelAccount"],
  Domain: ["domain", "findFirstDomain", "domains", "createDomain", "createManyDomain", "deleteDomain", "updateDomain", "deleteManyDomain", "updateManyDomain", "upsertDomain", "aggregateDomain", "groupByDomain"],
  Funnel: ["funnel", "findFirstFunnel", "funnels", "createFunnel", "createManyFunnel", "deleteFunnel", "updateFunnel", "deleteManyFunnel", "updateManyFunnel", "upsertFunnel", "aggregateFunnel", "groupByFunnel"]
};
const relationResolversInfo = {
  TrafficSource: ["clickData"],
  ClickData: ["trafficSource"],
  FunnelAccount: ["domains", "Funnel"],
  Domain: ["FunnelAccount"],
  Funnel: ["linkedAccounts"]
};
const modelsInfo = {
  TrafficSource: ["id", "name", "createdAt", "updatedAt"],
  ClickData: ["id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  FunnelAccount: ["id", "type", "name", "createdAt", "updatedAt", "funnelId"],
  Domain: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId"],
  Funnel: ["id", "name", "order", "trafficFirstSeen", "cards", "browserProfile", "createdAt", "updatedAt"]
};
const inputsInfo = {
  TrafficSourceWhereInput: ["AND", "OR", "NOT", "id", "name", "clickData", "createdAt", "updatedAt"],
  TrafficSourceOrderByWithRelationInput: ["id", "name", "clickData", "createdAt", "updatedAt"],
  TrafficSourceWhereUniqueInput: ["id", "name"],
  TrafficSourceOrderByWithAggregationInput: ["id", "name", "createdAt", "updatedAt", "_count", "_max", "_min"],
  TrafficSourceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt"],
  ClickDataWhereInput: ["AND", "OR", "NOT", "id", "trafficSource", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  ClickDataOrderByWithRelationInput: ["id", "trafficSource", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  ClickDataWhereUniqueInput: ["id"],
  ClickDataOrderByWithAggregationInput: ["id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  ClickDataScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  FunnelAccountWhereInput: ["AND", "OR", "NOT", "id", "type", "name", "domains", "createdAt", "updatedAt", "Funnel", "funnelId"],
  FunnelAccountOrderByWithRelationInput: ["id", "type", "name", "domains", "createdAt", "updatedAt", "Funnel", "funnelId"],
  FunnelAccountWhereUniqueInput: ["id", "name"],
  FunnelAccountOrderByWithAggregationInput: ["id", "type", "name", "createdAt", "updatedAt", "funnelId", "_count", "_max", "_min"],
  FunnelAccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "type", "name", "createdAt", "updatedAt", "funnelId"],
  DomainWhereInput: ["AND", "OR", "NOT", "id", "name", "state", "creationDate", "createdAt", "updatedAt", "FunnelAccount", "funnelAccountId"],
  DomainOrderByWithRelationInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "FunnelAccount", "funnelAccountId"],
  DomainWhereUniqueInput: ["id", "name"],
  DomainOrderByWithAggregationInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId", "_count", "_max", "_min"],
  DomainScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId"],
  FunnelWhereInput: ["AND", "OR", "NOT", "id", "name", "order", "trafficFirstSeen", "cards", "browserProfile", "linkedAccounts", "createdAt", "updatedAt"],
  FunnelOrderByWithRelationInput: ["id", "name", "order", "trafficFirstSeen", "cards", "browserProfile", "linkedAccounts", "createdAt", "updatedAt"],
  FunnelWhereUniqueInput: ["id", "order", "cards", "browserProfile"],
  FunnelOrderByWithAggregationInput: ["id", "name", "order", "trafficFirstSeen", "cards", "browserProfile", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  FunnelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "order", "trafficFirstSeen", "cards", "browserProfile", "createdAt", "updatedAt"],
  TrafficSourceCreateInput: ["id", "name", "createdAt", "updatedAt", "clickData"],
  TrafficSourceUpdateInput: ["id", "name", "createdAt", "updatedAt", "clickData"],
  TrafficSourceCreateManyInput: ["id", "name", "createdAt", "updatedAt"],
  TrafficSourceUpdateManyMutationInput: ["id", "name", "createdAt", "updatedAt"],
  ClickDataCreateInput: ["id", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt", "trafficSource"],
  ClickDataUpdateInput: ["id", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt", "trafficSource"],
  ClickDataCreateManyInput: ["id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  ClickDataUpdateManyMutationInput: ["id", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  FunnelAccountCreateInput: ["id", "type", "name", "createdAt", "updatedAt", "domains", "Funnel"],
  FunnelAccountUpdateInput: ["id", "type", "name", "createdAt", "updatedAt", "domains", "Funnel"],
  FunnelAccountCreateManyInput: ["id", "type", "name", "createdAt", "updatedAt", "funnelId"],
  FunnelAccountUpdateManyMutationInput: ["id", "type", "name", "createdAt", "updatedAt"],
  DomainCreateInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "FunnelAccount"],
  DomainUpdateInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "FunnelAccount"],
  DomainCreateManyInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId"],
  DomainUpdateManyMutationInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt"],
  FunnelCreateInput: ["id", "name", "order", "trafficFirstSeen", "browserProfile", "createdAt", "updatedAt", "cards", "linkedAccounts"],
  FunnelUpdateInput: ["id", "name", "order", "trafficFirstSeen", "browserProfile", "createdAt", "updatedAt", "cards", "linkedAccounts"],
  FunnelCreateManyInput: ["id", "name", "order", "trafficFirstSeen", "browserProfile", "createdAt", "updatedAt", "cards"],
  FunnelUpdateManyMutationInput: ["id", "name", "order", "trafficFirstSeen", "browserProfile", "createdAt", "updatedAt", "cards"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumTrafficSourceNameFilter: ["equals", "in", "notIn", "not"],
  ClickDataListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ClickDataOrderByRelationAggregateInput: ["_count"],
  TrafficSourceCountOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
  TrafficSourceMaxOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
  TrafficSourceMinOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumTrafficSourceNameWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  TrafficSourceRelationFilter: ["is", "isNot"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ClickDataCountOrderByAggregateInput: ["id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  ClickDataAvgOrderByAggregateInput: ["campaignId", "adId", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa"],
  ClickDataMaxOrderByAggregateInput: ["id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  ClickDataMinOrderByAggregateInput: ["id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  ClickDataSumOrderByAggregateInput: ["campaignId", "adId", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumAccountTypeFilter: ["equals", "in", "notIn", "not"],
  DomainListRelationFilter: ["every", "some", "none"],
  FunnelRelationFilter: ["is", "isNot"],
  DomainOrderByRelationAggregateInput: ["_count"],
  FunnelAccountCountOrderByAggregateInput: ["id", "type", "name", "createdAt", "updatedAt", "funnelId"],
  FunnelAccountMaxOrderByAggregateInput: ["id", "type", "name", "createdAt", "updatedAt", "funnelId"],
  FunnelAccountMinOrderByAggregateInput: ["id", "type", "name", "createdAt", "updatedAt", "funnelId"],
  EnumAccountTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FunnelAccountRelationFilter: ["is", "isNot"],
  DomainCountOrderByAggregateInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId"],
  DomainMaxOrderByAggregateInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId"],
  DomainMinOrderByAggregateInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  FunnelAccountListRelationFilter: ["every", "some", "none"],
  FunnelAccountOrderByRelationAggregateInput: ["_count"],
  FunnelCountOrderByAggregateInput: ["id", "name", "order", "trafficFirstSeen", "cards", "browserProfile", "createdAt", "updatedAt"],
  FunnelAvgOrderByAggregateInput: ["order", "cards"],
  FunnelMaxOrderByAggregateInput: ["id", "name", "order", "trafficFirstSeen", "browserProfile", "createdAt", "updatedAt"],
  FunnelMinOrderByAggregateInput: ["id", "name", "order", "trafficFirstSeen", "browserProfile", "createdAt", "updatedAt"],
  FunnelSumOrderByAggregateInput: ["order", "cards"],
  ClickDataCreateNestedManyWithoutTrafficSourceInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumTrafficSourceNameFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  ClickDataUpdateManyWithoutTrafficSourceInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  TrafficSourceCreateNestedOneWithoutClickDataInput: ["create", "connectOrCreate", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  TrafficSourceUpdateOneRequiredWithoutClickDataInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  DomainCreateNestedManyWithoutFunnelAccountInput: ["create", "connectOrCreate", "createMany", "connect"],
  FunnelCreateNestedOneWithoutLinkedAccountsInput: ["create", "connectOrCreate", "connect"],
  EnumAccountTypeFieldUpdateOperationsInput: ["set"],
  DomainUpdateManyWithoutFunnelAccountInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  FunnelUpdateOneWithoutLinkedAccountsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  FunnelAccountCreateNestedOneWithoutDomainsInput: ["create", "connectOrCreate", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  FunnelAccountUpdateOneWithoutDomainsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  FunnelCreatecardsInput: ["set"],
  FunnelAccountCreateNestedManyWithoutFunnelInput: ["create", "connectOrCreate", "createMany", "connect"],
  FunnelUpdatecardsInput: ["set", "push"],
  FunnelAccountUpdateManyWithoutFunnelInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  FunnelCreateManycardsInput: ["set"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumTrafficSourceNameFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumTrafficSourceNameWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedEnumAccountTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumAccountTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ClickDataCreateWithoutTrafficSourceInput: ["id", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  ClickDataCreateOrConnectWithoutTrafficSourceInput: ["where", "create"],
  ClickDataCreateManyTrafficSourceInputEnvelope: ["data", "skipDuplicates"],
  ClickDataUpsertWithWhereUniqueWithoutTrafficSourceInput: ["where", "update", "create"],
  ClickDataUpdateWithWhereUniqueWithoutTrafficSourceInput: ["where", "data"],
  ClickDataUpdateManyWithWhereWithoutTrafficSourceInput: ["where", "data"],
  ClickDataScalarWhereInput: ["AND", "OR", "NOT", "id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  TrafficSourceCreateWithoutClickDataInput: ["id", "name", "createdAt", "updatedAt"],
  TrafficSourceCreateOrConnectWithoutClickDataInput: ["where", "create"],
  TrafficSourceUpsertWithoutClickDataInput: ["update", "create"],
  TrafficSourceUpdateWithoutClickDataInput: ["id", "name", "createdAt", "updatedAt"],
  DomainCreateWithoutFunnelAccountInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt"],
  DomainCreateOrConnectWithoutFunnelAccountInput: ["where", "create"],
  DomainCreateManyFunnelAccountInputEnvelope: ["data", "skipDuplicates"],
  FunnelCreateWithoutLinkedAccountsInput: ["id", "name", "order", "trafficFirstSeen", "browserProfile", "createdAt", "updatedAt", "cards"],
  FunnelCreateOrConnectWithoutLinkedAccountsInput: ["where", "create"],
  DomainUpsertWithWhereUniqueWithoutFunnelAccountInput: ["where", "update", "create"],
  DomainUpdateWithWhereUniqueWithoutFunnelAccountInput: ["where", "data"],
  DomainUpdateManyWithWhereWithoutFunnelAccountInput: ["where", "data"],
  DomainScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId"],
  FunnelUpsertWithoutLinkedAccountsInput: ["update", "create"],
  FunnelUpdateWithoutLinkedAccountsInput: ["id", "name", "order", "trafficFirstSeen", "browserProfile", "createdAt", "updatedAt", "cards"],
  FunnelAccountCreateWithoutDomainsInput: ["id", "type", "name", "createdAt", "updatedAt", "Funnel"],
  FunnelAccountCreateOrConnectWithoutDomainsInput: ["where", "create"],
  FunnelAccountUpsertWithoutDomainsInput: ["update", "create"],
  FunnelAccountUpdateWithoutDomainsInput: ["id", "type", "name", "createdAt", "updatedAt", "Funnel"],
  FunnelAccountCreateWithoutFunnelInput: ["id", "type", "name", "createdAt", "updatedAt", "domains"],
  FunnelAccountCreateOrConnectWithoutFunnelInput: ["where", "create"],
  FunnelAccountCreateManyFunnelInputEnvelope: ["data", "skipDuplicates"],
  FunnelAccountUpsertWithWhereUniqueWithoutFunnelInput: ["where", "update", "create"],
  FunnelAccountUpdateWithWhereUniqueWithoutFunnelInput: ["where", "data"],
  FunnelAccountUpdateManyWithWhereWithoutFunnelInput: ["where", "data"],
  FunnelAccountScalarWhereInput: ["AND", "OR", "NOT", "id", "type", "name", "createdAt", "updatedAt", "funnelId"],
  ClickDataCreateManyTrafficSourceInput: ["id", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  ClickDataUpdateWithoutTrafficSourceInput: ["id", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  DomainCreateManyFunnelAccountInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt"],
  DomainUpdateWithoutFunnelAccountInput: ["id", "name", "state", "creationDate", "createdAt", "updatedAt"],
  FunnelAccountCreateManyFunnelInput: ["id", "type", "name", "createdAt", "updatedAt"],
  FunnelAccountUpdateWithoutFunnelInput: ["id", "type", "name", "createdAt", "updatedAt", "domains"]
};
const outputsInfo = {
  AggregateTrafficSource: ["_count", "_min", "_max"],
  TrafficSourceGroupBy: ["id", "name", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateClickData: ["_count", "_avg", "_sum", "_min", "_max"],
  ClickDataGroupBy: ["id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFunnelAccount: ["_count", "_min", "_max"],
  FunnelAccountGroupBy: ["id", "type", "name", "createdAt", "updatedAt", "funnelId", "_count", "_min", "_max"],
  AggregateDomain: ["_count", "_min", "_max"],
  DomainGroupBy: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId", "_count", "_min", "_max"],
  AggregateFunnel: ["_count", "_avg", "_sum", "_min", "_max"],
  FunnelGroupBy: ["id", "name", "order", "trafficFirstSeen", "cards", "browserProfile", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  TrafficSourceCount: ["clickData"],
  TrafficSourceCountAggregate: ["id", "name", "createdAt", "updatedAt", "_all"],
  TrafficSourceMinAggregate: ["id", "name", "createdAt", "updatedAt"],
  TrafficSourceMaxAggregate: ["id", "name", "createdAt", "updatedAt"],
  ClickDataCountAggregate: ["id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt", "_all"],
  ClickDataAvgAggregate: ["campaignId", "adId", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa"],
  ClickDataSumAggregate: ["campaignId", "adId", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa"],
  ClickDataMinAggregate: ["id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  ClickDataMaxAggregate: ["id", "trafficSourceId", "date", "campaignId", "campaignName", "adId", "device", "country", "domainId", "clicks", "spend", "excludedClicks", "conversions", "ecpc", "ecpa", "createdAt", "updatedAt"],
  FunnelAccountCount: ["domains"],
  FunnelAccountCountAggregate: ["id", "type", "name", "createdAt", "updatedAt", "funnelId", "_all"],
  FunnelAccountMinAggregate: ["id", "type", "name", "createdAt", "updatedAt", "funnelId"],
  FunnelAccountMaxAggregate: ["id", "type", "name", "createdAt", "updatedAt", "funnelId"],
  DomainCountAggregate: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId", "_all"],
  DomainMinAggregate: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId"],
  DomainMaxAggregate: ["id", "name", "state", "creationDate", "createdAt", "updatedAt", "funnelAccountId"],
  FunnelCount: ["linkedAccounts"],
  FunnelCountAggregate: ["id", "name", "order", "trafficFirstSeen", "cards", "browserProfile", "createdAt", "updatedAt", "_all"],
  FunnelAvgAggregate: ["order", "cards"],
  FunnelSumAggregate: ["order", "cards"],
  FunnelMinAggregate: ["id", "name", "order", "trafficFirstSeen", "browserProfile", "createdAt", "updatedAt"],
  FunnelMaxAggregate: ["id", "name", "order", "trafficFirstSeen", "browserProfile", "createdAt", "updatedAt"]
};
const argsInfo = {
  FindUniqueTrafficSourceArgs: ["where"],
  FindFirstTrafficSourceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTrafficSourceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTrafficSourceArgs: ["data"],
  CreateManyTrafficSourceArgs: ["data", "skipDuplicates"],
  DeleteTrafficSourceArgs: ["where"],
  UpdateTrafficSourceArgs: ["data", "where"],
  DeleteManyTrafficSourceArgs: ["where"],
  UpdateManyTrafficSourceArgs: ["data", "where"],
  UpsertTrafficSourceArgs: ["where", "create", "update"],
  AggregateTrafficSourceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTrafficSourceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueClickDataArgs: ["where"],
  FindFirstClickDataArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyClickDataArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateClickDataArgs: ["data"],
  CreateManyClickDataArgs: ["data", "skipDuplicates"],
  DeleteClickDataArgs: ["where"],
  UpdateClickDataArgs: ["data", "where"],
  DeleteManyClickDataArgs: ["where"],
  UpdateManyClickDataArgs: ["data", "where"],
  UpsertClickDataArgs: ["where", "create", "update"],
  AggregateClickDataArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByClickDataArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFunnelAccountArgs: ["where"],
  FindFirstFunnelAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFunnelAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFunnelAccountArgs: ["data"],
  CreateManyFunnelAccountArgs: ["data", "skipDuplicates"],
  DeleteFunnelAccountArgs: ["where"],
  UpdateFunnelAccountArgs: ["data", "where"],
  DeleteManyFunnelAccountArgs: ["where"],
  UpdateManyFunnelAccountArgs: ["data", "where"],
  UpsertFunnelAccountArgs: ["where", "create", "update"],
  AggregateFunnelAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFunnelAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueDomainArgs: ["where"],
  FindFirstDomainArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDomainArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateDomainArgs: ["data"],
  CreateManyDomainArgs: ["data", "skipDuplicates"],
  DeleteDomainArgs: ["where"],
  UpdateDomainArgs: ["data", "where"],
  DeleteManyDomainArgs: ["where"],
  UpdateManyDomainArgs: ["data", "where"],
  UpsertDomainArgs: ["where", "create", "update"],
  AggregateDomainArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByDomainArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFunnelArgs: ["where"],
  FindFirstFunnelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFunnelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFunnelArgs: ["data"],
  CreateManyFunnelArgs: ["data", "skipDuplicates"],
  DeleteFunnelArgs: ["where"],
  UpdateFunnelArgs: ["data", "where"],
  DeleteManyFunnelArgs: ["where"],
  UpdateManyFunnelArgs: ["data", "where"],
  UpsertFunnelArgs: ["where", "create", "update"],
  AggregateFunnelArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFunnelArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







