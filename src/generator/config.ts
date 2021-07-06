import { DMMF } from "./dmmf/types";

export type BaseKeys = keyof Pick<DMMF.ModelMapping, "model" | "plural">;
export const baseKeys: BaseKeys[] = ["model", "plural"];

export type ModelKeys = keyof Exclude<DMMF.ModelMapping, BaseKeys>;

export type SupportedQueries = keyof Pick<
  typeof DMMF.ModelAction,
  "findUnique" | "findFirst" | "findMany" | "aggregate" | "groupBy"
>;
export const supportedQueryActions: SupportedQueries[] = [
  "findUnique",
  "findFirst",
  "findMany",
  "aggregate",
  "groupBy",
];

export type SupportedMutations = keyof Pick<
  typeof DMMF.ModelAction,
  | "create"
  | "createMany"
  | "delete"
  | "update"
  | "deleteMany"
  | "updateMany"
  | "upsert"
>;
export const supportedMutationActions: SupportedMutations[] = [
  "create",
  "createMany",
  "delete",
  "update",
  "deleteMany",
  "updateMany",
  "upsert",
];

export const modelsFolderName = "models";
export const enumsFolderName = "enums";
export const inputsFolderName = "inputs";
export const outputsFolderName = "outputs";
export const resolversFolderName = "resolvers";
export const argsFolderName = "args";
export const relationsResolversFolderName = "relations";
export const crudResolversFolderName = "crud";

export const modelsSuffix = "model";
export const enumsSuffix = "enum";
export const inputsSuffix = "input";
export const outputsSuffix = "output";
export const resolversSuffix = "resolver";
export const argsSuffix = "arg";
export const relationsResolversSuffix = "relation";
export const crudResolversSuffix = "crud";

export const fileSuffixes = {
  [modelsFolderName]: {
    suffix: modelsSuffix,
  },
  [enumsFolderName]: {
    suffix: enumsSuffix,
  },
  [inputsFolderName]: {
    suffix: inputsSuffix,
  },
  [outputsFolderName]: {
    suffix: outputsSuffix,
  },
  [resolversFolderName]: {
    suffix: resolversSuffix,
  },
  [argsFolderName]: {
    suffix: argsSuffix,
  },
};

type FolderNameKey = keyof typeof fileSuffixes;

export const getFileSuffix = (str: string) => {
  // Get correct type from e.g. 'resolvers/outputs'
  if (str.includes("/")) {
    const parts = str.split("/");
    str = parts[parts.length - 1];
  }
  const key = str as FolderNameKey;
  return fileSuffixes[key] ? `.${fileSuffixes[key].suffix}` : "";
};
