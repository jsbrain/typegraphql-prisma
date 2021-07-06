
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model TrafficSource
 */

export type TrafficSource = {
  id: string
  name: TrafficSourceName
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ClickData
 */

export type ClickData = {
  id: string
  trafficSourceId: string
  date: Date
  campaignId: number
  campaignName: string
  adId: number | null
  device: string
  country: string | null
  domainId: number
  clicks: number
  spend: number
  excludedClicks: number
  conversions: number
  ecpc: number
  ecpa: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model FunnelAccount
 */

export type FunnelAccount = {
  id: string
  type: AccountType
  name: string
  createdAt: Date
  updatedAt: Date
  funnelId: string | null
}

/**
 * Model Domain
 */

export type Domain = {
  id: string
  name: string
  state: string
  creationDate: Date | null
  createdAt: Date
  updatedAt: Date
  funnelAccountId: string | null
}

/**
 * Model Funnel
 */

export type Funnel = {
  id: string
  name: string
  order: number | null
  trafficFirstSeen: Date | null
  cards: number[]
  browserProfile: string
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const TrafficSourceName: {
  CONTENT_AD: 'CONTENT_AD',
  OUTBRAIN: 'OUTBRAIN',
  TABOOLA: 'TABOOLA'
};

export type TrafficSourceName = (typeof TrafficSourceName)[keyof typeof TrafficSourceName]


export const AccountType: {
  BING_ADS: 'BING_ADS',
  GOOGLE_ADS: 'GOOGLE_ADS',
  CLICKBANK: 'CLICKBANK',
  MAXWEB: 'MAXWEB'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TrafficSources
 * const trafficSources = await prisma.trafficSource.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TrafficSources
   * const trafficSources = await prisma.trafficSource.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.trafficSource`: Exposes CRUD operations for the **TrafficSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrafficSources
    * const trafficSources = await prisma.trafficSource.findMany()
    * ```
    */
  get trafficSource(): Prisma.TrafficSourceDelegate<GlobalReject>;

  /**
   * `prisma.clickData`: Exposes CRUD operations for the **ClickData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClickData
    * const clickData = await prisma.clickData.findMany()
    * ```
    */
  get clickData(): Prisma.ClickDataDelegate<GlobalReject>;

  /**
   * `prisma.funnelAccount`: Exposes CRUD operations for the **FunnelAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FunnelAccounts
    * const funnelAccounts = await prisma.funnelAccount.findMany()
    * ```
    */
  get funnelAccount(): Prisma.FunnelAccountDelegate<GlobalReject>;

  /**
   * `prisma.domain`: Exposes CRUD operations for the **Domain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Domains
    * const domains = await prisma.domain.findMany()
    * ```
    */
  get domain(): Prisma.DomainDelegate<GlobalReject>;

  /**
   * `prisma.funnel`: Exposes CRUD operations for the **Funnel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funnels
    * const funnels = await prisma.funnel.findMany()
    * ```
    */
  get funnel(): Prisma.FunnelDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.26.0
   * Query Engine version: 9b816b3aa13cc270074f172f30d6eda8a8ce867d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    TrafficSource: 'TrafficSource',
    ClickData: 'ClickData',
    FunnelAccount: 'FunnelAccount',
    Domain: 'Domain',
    Funnel: 'Funnel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    postgres?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TrafficSourceCountOutputType
   */


  export type TrafficSourceCountOutputType = {
    clickData: number
  }

  export type TrafficSourceCountOutputTypeSelect = {
    clickData?: boolean
  }

  export type TrafficSourceCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TrafficSourceCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TrafficSourceCountOutputType
    : S extends undefined
    ? never
    : S extends TrafficSourceCountOutputTypeArgs
    ?'include' extends U
    ? TrafficSourceCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TrafficSourceCountOutputType ?TrafficSourceCountOutputType [P]
  : 
     never
  } 
    : TrafficSourceCountOutputType
  : TrafficSourceCountOutputType




  // Custom InputTypes

  /**
   * TrafficSourceCountOutputType without action
   */
  export type TrafficSourceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TrafficSourceCountOutputType
     * 
    **/
    select?: TrafficSourceCountOutputTypeSelect | null
  }



  /**
   * Count Type FunnelAccountCountOutputType
   */


  export type FunnelAccountCountOutputType = {
    domains: number
  }

  export type FunnelAccountCountOutputTypeSelect = {
    domains?: boolean
  }

  export type FunnelAccountCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FunnelAccountCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FunnelAccountCountOutputType
    : S extends undefined
    ? never
    : S extends FunnelAccountCountOutputTypeArgs
    ?'include' extends U
    ? FunnelAccountCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof FunnelAccountCountOutputType ?FunnelAccountCountOutputType [P]
  : 
     never
  } 
    : FunnelAccountCountOutputType
  : FunnelAccountCountOutputType




  // Custom InputTypes

  /**
   * FunnelAccountCountOutputType without action
   */
  export type FunnelAccountCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FunnelAccountCountOutputType
     * 
    **/
    select?: FunnelAccountCountOutputTypeSelect | null
  }



  /**
   * Count Type FunnelCountOutputType
   */


  export type FunnelCountOutputType = {
    linkedAccounts: number
  }

  export type FunnelCountOutputTypeSelect = {
    linkedAccounts?: boolean
  }

  export type FunnelCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FunnelCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FunnelCountOutputType
    : S extends undefined
    ? never
    : S extends FunnelCountOutputTypeArgs
    ?'include' extends U
    ? FunnelCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof FunnelCountOutputType ?FunnelCountOutputType [P]
  : 
     never
  } 
    : FunnelCountOutputType
  : FunnelCountOutputType




  // Custom InputTypes

  /**
   * FunnelCountOutputType without action
   */
  export type FunnelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FunnelCountOutputType
     * 
    **/
    select?: FunnelCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model TrafficSource
   */


  export type AggregateTrafficSource = {
    _count: TrafficSourceCountAggregateOutputType | null
    count: TrafficSourceCountAggregateOutputType | null
    _min: TrafficSourceMinAggregateOutputType | null
    min: TrafficSourceMinAggregateOutputType | null
    _max: TrafficSourceMaxAggregateOutputType | null
    max: TrafficSourceMaxAggregateOutputType | null
  }

  export type TrafficSourceMinAggregateOutputType = {
    id: string | null
    name: TrafficSourceName | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrafficSourceMaxAggregateOutputType = {
    id: string | null
    name: TrafficSourceName | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrafficSourceCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrafficSourceMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrafficSourceMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrafficSourceCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrafficSourceAggregateArgs = {
    /**
     * Filter which TrafficSource to aggregate.
     * 
    **/
    where?: TrafficSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSources to fetch.
     * 
    **/
    orderBy?: Enumerable<TrafficSourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TrafficSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSources.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrafficSources
    **/
    _count?: true | TrafficSourceCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | TrafficSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrafficSourceMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: TrafficSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrafficSourceMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: TrafficSourceMaxAggregateInputType
  }

  export type GetTrafficSourceAggregateType<T extends TrafficSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateTrafficSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrafficSource[P]>
      : GetScalarType<T[P], AggregateTrafficSource[P]>
  }


    
    
  export type TrafficSourceGroupByArgs = {
    where?: TrafficSourceWhereInput
    orderBy?: Enumerable<TrafficSourceOrderByWithAggregationInput>
    by: Array<TrafficSourceScalarFieldEnum>
    having?: TrafficSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrafficSourceCountAggregateInputType | true
    _min?: TrafficSourceMinAggregateInputType
    _max?: TrafficSourceMaxAggregateInputType
  }


  export type TrafficSourceGroupByOutputType = {
    id: string
    name: TrafficSourceName
    createdAt: Date
    updatedAt: Date
    _count: TrafficSourceCountAggregateOutputType | null
    _min: TrafficSourceMinAggregateOutputType | null
    _max: TrafficSourceMaxAggregateOutputType | null
  }

  type GetTrafficSourceGroupByPayload<T extends TrafficSourceGroupByArgs> = Promise<
    Array<
      PickArray<TrafficSourceGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TrafficSourceGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TrafficSourceGroupByOutputType[P]> 
            : GetScalarType<T[P], TrafficSourceGroupByOutputType[P]>
        }
      > 
    >


  export type TrafficSourceSelect = {
    id?: boolean
    name?: boolean
    clickData?: boolean | ClickDataFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | TrafficSourceCountOutputTypeArgs
  }

  export type TrafficSourceInclude = {
    clickData?: boolean | ClickDataFindManyArgs
    _count?: boolean | TrafficSourceCountOutputTypeArgs
  }

  export type TrafficSourceGetPayload<
    S extends boolean | null | undefined | TrafficSourceArgs,
    U = keyof S
      > = S extends true
        ? TrafficSource
    : S extends undefined
    ? never
    : S extends TrafficSourceArgs | TrafficSourceFindManyArgs
    ?'include' extends U
    ? TrafficSource  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'clickData'
        ? Array < ClickDataGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? TrafficSourceCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TrafficSource ?TrafficSource [P]
  : 
          P extends 'clickData'
        ? Array < ClickDataGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? TrafficSourceCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : TrafficSource
  : TrafficSource


  type TrafficSourceCountArgs = Merge<
    Omit<TrafficSourceFindManyArgs, 'select' | 'include'> & {
      select?: TrafficSourceCountAggregateInputType | true
    }
  >

  export interface TrafficSourceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TrafficSource that matches the filter.
     * @param {TrafficSourceFindUniqueArgs} args - Arguments to find a TrafficSource
     * @example
     * // Get one TrafficSource
     * const trafficSource = await prisma.trafficSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrafficSourceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TrafficSourceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TrafficSource'> extends True ? CheckSelect<T, Prisma__TrafficSourceClient<TrafficSource>, Prisma__TrafficSourceClient<TrafficSourceGetPayload<T>>> : CheckSelect<T, Prisma__TrafficSourceClient<TrafficSource | null >, Prisma__TrafficSourceClient<TrafficSourceGetPayload<T> | null >>

    /**
     * Find the first TrafficSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceFindFirstArgs} args - Arguments to find a TrafficSource
     * @example
     * // Get one TrafficSource
     * const trafficSource = await prisma.trafficSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrafficSourceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TrafficSourceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TrafficSource'> extends True ? CheckSelect<T, Prisma__TrafficSourceClient<TrafficSource>, Prisma__TrafficSourceClient<TrafficSourceGetPayload<T>>> : CheckSelect<T, Prisma__TrafficSourceClient<TrafficSource | null >, Prisma__TrafficSourceClient<TrafficSourceGetPayload<T> | null >>

    /**
     * Find zero or more TrafficSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrafficSources
     * const trafficSources = await prisma.trafficSource.findMany()
     * 
     * // Get first 10 TrafficSources
     * const trafficSources = await prisma.trafficSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trafficSourceWithIdOnly = await prisma.trafficSource.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrafficSourceFindManyArgs>(
      args?: SelectSubset<T, TrafficSourceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TrafficSource>>, PrismaPromise<Array<TrafficSourceGetPayload<T>>>>

    /**
     * Create a TrafficSource.
     * @param {TrafficSourceCreateArgs} args - Arguments to create a TrafficSource.
     * @example
     * // Create one TrafficSource
     * const TrafficSource = await prisma.trafficSource.create({
     *   data: {
     *     // ... data to create a TrafficSource
     *   }
     * })
     * 
    **/
    create<T extends TrafficSourceCreateArgs>(
      args: SelectSubset<T, TrafficSourceCreateArgs>
    ): CheckSelect<T, Prisma__TrafficSourceClient<TrafficSource>, Prisma__TrafficSourceClient<TrafficSourceGetPayload<T>>>

    /**
     * Create many TrafficSources.
     *     @param {TrafficSourceCreateManyArgs} args - Arguments to create many TrafficSources.
     *     @example
     *     // Create many TrafficSources
     *     const trafficSource = await prisma.trafficSource.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrafficSourceCreateManyArgs>(
      args?: SelectSubset<T, TrafficSourceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TrafficSource.
     * @param {TrafficSourceDeleteArgs} args - Arguments to delete one TrafficSource.
     * @example
     * // Delete one TrafficSource
     * const TrafficSource = await prisma.trafficSource.delete({
     *   where: {
     *     // ... filter to delete one TrafficSource
     *   }
     * })
     * 
    **/
    delete<T extends TrafficSourceDeleteArgs>(
      args: SelectSubset<T, TrafficSourceDeleteArgs>
    ): CheckSelect<T, Prisma__TrafficSourceClient<TrafficSource>, Prisma__TrafficSourceClient<TrafficSourceGetPayload<T>>>

    /**
     * Update one TrafficSource.
     * @param {TrafficSourceUpdateArgs} args - Arguments to update one TrafficSource.
     * @example
     * // Update one TrafficSource
     * const trafficSource = await prisma.trafficSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrafficSourceUpdateArgs>(
      args: SelectSubset<T, TrafficSourceUpdateArgs>
    ): CheckSelect<T, Prisma__TrafficSourceClient<TrafficSource>, Prisma__TrafficSourceClient<TrafficSourceGetPayload<T>>>

    /**
     * Delete zero or more TrafficSources.
     * @param {TrafficSourceDeleteManyArgs} args - Arguments to filter TrafficSources to delete.
     * @example
     * // Delete a few TrafficSources
     * const { count } = await prisma.trafficSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrafficSourceDeleteManyArgs>(
      args?: SelectSubset<T, TrafficSourceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafficSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrafficSources
     * const trafficSource = await prisma.trafficSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrafficSourceUpdateManyArgs>(
      args: SelectSubset<T, TrafficSourceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TrafficSource.
     * @param {TrafficSourceUpsertArgs} args - Arguments to update or create a TrafficSource.
     * @example
     * // Update or create a TrafficSource
     * const trafficSource = await prisma.trafficSource.upsert({
     *   create: {
     *     // ... data to create a TrafficSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrafficSource we want to update
     *   }
     * })
    **/
    upsert<T extends TrafficSourceUpsertArgs>(
      args: SelectSubset<T, TrafficSourceUpsertArgs>
    ): CheckSelect<T, Prisma__TrafficSourceClient<TrafficSource>, Prisma__TrafficSourceClient<TrafficSourceGetPayload<T>>>

    /**
     * Count the number of TrafficSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceCountArgs} args - Arguments to filter TrafficSources to count.
     * @example
     * // Count the number of TrafficSources
     * const count = await prisma.trafficSource.count({
     *   where: {
     *     // ... the filter for the TrafficSources we want to count
     *   }
     * })
    **/
    count<T extends TrafficSourceCountArgs>(
      args?: Subset<T, TrafficSourceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrafficSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrafficSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrafficSourceAggregateArgs>(args: Subset<T, TrafficSourceAggregateArgs>): PrismaPromise<GetTrafficSourceAggregateType<T>>

    /**
     * Group by TrafficSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafficSourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrafficSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrafficSourceGroupByArgs['orderBy'] }
        : { orderBy?: TrafficSourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrafficSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrafficSourceGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrafficSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TrafficSourceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    clickData<T extends ClickDataFindManyArgs = {}>(args?: Subset<T, ClickDataFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ClickData>>, PrismaPromise<Array<ClickDataGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TrafficSource findUnique
   */
  export type TrafficSourceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the TrafficSource
     * 
    **/
    select?: TrafficSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TrafficSourceInclude | null
    /**
     * Throw an Error if a TrafficSource can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TrafficSource to fetch.
     * 
    **/
    where: TrafficSourceWhereUniqueInput
  }


  /**
   * TrafficSource findFirst
   */
  export type TrafficSourceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the TrafficSource
     * 
    **/
    select?: TrafficSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TrafficSourceInclude | null
    /**
     * Throw an Error if a TrafficSource can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TrafficSource to fetch.
     * 
    **/
    where?: TrafficSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSources to fetch.
     * 
    **/
    orderBy?: Enumerable<TrafficSourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafficSources.
     * 
    **/
    cursor?: TrafficSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSources.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafficSources.
     * 
    **/
    distinct?: Enumerable<TrafficSourceScalarFieldEnum>
  }


  /**
   * TrafficSource findMany
   */
  export type TrafficSourceFindManyArgs = {
    /**
     * Select specific fields to fetch from the TrafficSource
     * 
    **/
    select?: TrafficSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TrafficSourceInclude | null
    /**
     * Filter, which TrafficSources to fetch.
     * 
    **/
    where?: TrafficSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafficSources to fetch.
     * 
    **/
    orderBy?: Enumerable<TrafficSourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrafficSources.
     * 
    **/
    cursor?: TrafficSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafficSources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafficSources.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TrafficSourceScalarFieldEnum>
  }


  /**
   * TrafficSource create
   */
  export type TrafficSourceCreateArgs = {
    /**
     * Select specific fields to fetch from the TrafficSource
     * 
    **/
    select?: TrafficSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TrafficSourceInclude | null
    /**
     * The data needed to create a TrafficSource.
     * 
    **/
    data: XOR<TrafficSourceCreateInput, TrafficSourceUncheckedCreateInput>
  }


  /**
   * TrafficSource createMany
   */
  export type TrafficSourceCreateManyArgs = {
    data: Enumerable<TrafficSourceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TrafficSource update
   */
  export type TrafficSourceUpdateArgs = {
    /**
     * Select specific fields to fetch from the TrafficSource
     * 
    **/
    select?: TrafficSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TrafficSourceInclude | null
    /**
     * The data needed to update a TrafficSource.
     * 
    **/
    data: XOR<TrafficSourceUpdateInput, TrafficSourceUncheckedUpdateInput>
    /**
     * Choose, which TrafficSource to update.
     * 
    **/
    where: TrafficSourceWhereUniqueInput
  }


  /**
   * TrafficSource updateMany
   */
  export type TrafficSourceUpdateManyArgs = {
    data: XOR<TrafficSourceUpdateManyMutationInput, TrafficSourceUncheckedUpdateManyInput>
    where?: TrafficSourceWhereInput
  }


  /**
   * TrafficSource upsert
   */
  export type TrafficSourceUpsertArgs = {
    /**
     * Select specific fields to fetch from the TrafficSource
     * 
    **/
    select?: TrafficSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TrafficSourceInclude | null
    /**
     * The filter to search for the TrafficSource to update in case it exists.
     * 
    **/
    where: TrafficSourceWhereUniqueInput
    /**
     * In case the TrafficSource found by the `where` argument doesn't exist, create a new TrafficSource with this data.
     * 
    **/
    create: XOR<TrafficSourceCreateInput, TrafficSourceUncheckedCreateInput>
    /**
     * In case the TrafficSource was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TrafficSourceUpdateInput, TrafficSourceUncheckedUpdateInput>
  }


  /**
   * TrafficSource delete
   */
  export type TrafficSourceDeleteArgs = {
    /**
     * Select specific fields to fetch from the TrafficSource
     * 
    **/
    select?: TrafficSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TrafficSourceInclude | null
    /**
     * Filter which TrafficSource to delete.
     * 
    **/
    where: TrafficSourceWhereUniqueInput
  }


  /**
   * TrafficSource deleteMany
   */
  export type TrafficSourceDeleteManyArgs = {
    where?: TrafficSourceWhereInput
  }


  /**
   * TrafficSource without action
   */
  export type TrafficSourceArgs = {
    /**
     * Select specific fields to fetch from the TrafficSource
     * 
    **/
    select?: TrafficSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TrafficSourceInclude | null
  }



  /**
   * Model ClickData
   */


  export type AggregateClickData = {
    _count: ClickDataCountAggregateOutputType | null
    count: ClickDataCountAggregateOutputType | null
    _avg: ClickDataAvgAggregateOutputType | null
    avg: ClickDataAvgAggregateOutputType | null
    _sum: ClickDataSumAggregateOutputType | null
    sum: ClickDataSumAggregateOutputType | null
    _min: ClickDataMinAggregateOutputType | null
    min: ClickDataMinAggregateOutputType | null
    _max: ClickDataMaxAggregateOutputType | null
    max: ClickDataMaxAggregateOutputType | null
  }

  export type ClickDataAvgAggregateOutputType = {
    campaignId: number | null
    adId: number | null
    domainId: number | null
    clicks: number | null
    spend: number | null
    excludedClicks: number | null
    conversions: number | null
    ecpc: number | null
    ecpa: number | null
  }

  export type ClickDataSumAggregateOutputType = {
    campaignId: number | null
    adId: number | null
    domainId: number | null
    clicks: number | null
    spend: number | null
    excludedClicks: number | null
    conversions: number | null
    ecpc: number | null
    ecpa: number | null
  }

  export type ClickDataMinAggregateOutputType = {
    id: string | null
    trafficSourceId: string | null
    date: Date | null
    campaignId: number | null
    campaignName: string | null
    adId: number | null
    device: string | null
    country: string | null
    domainId: number | null
    clicks: number | null
    spend: number | null
    excludedClicks: number | null
    conversions: number | null
    ecpc: number | null
    ecpa: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClickDataMaxAggregateOutputType = {
    id: string | null
    trafficSourceId: string | null
    date: Date | null
    campaignId: number | null
    campaignName: string | null
    adId: number | null
    device: string | null
    country: string | null
    domainId: number | null
    clicks: number | null
    spend: number | null
    excludedClicks: number | null
    conversions: number | null
    ecpc: number | null
    ecpa: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClickDataCountAggregateOutputType = {
    id: number
    trafficSourceId: number
    date: number
    campaignId: number
    campaignName: number
    adId: number
    device: number
    country: number
    domainId: number
    clicks: number
    spend: number
    excludedClicks: number
    conversions: number
    ecpc: number
    ecpa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClickDataAvgAggregateInputType = {
    campaignId?: true
    adId?: true
    domainId?: true
    clicks?: true
    spend?: true
    excludedClicks?: true
    conversions?: true
    ecpc?: true
    ecpa?: true
  }

  export type ClickDataSumAggregateInputType = {
    campaignId?: true
    adId?: true
    domainId?: true
    clicks?: true
    spend?: true
    excludedClicks?: true
    conversions?: true
    ecpc?: true
    ecpa?: true
  }

  export type ClickDataMinAggregateInputType = {
    id?: true
    trafficSourceId?: true
    date?: true
    campaignId?: true
    campaignName?: true
    adId?: true
    device?: true
    country?: true
    domainId?: true
    clicks?: true
    spend?: true
    excludedClicks?: true
    conversions?: true
    ecpc?: true
    ecpa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClickDataMaxAggregateInputType = {
    id?: true
    trafficSourceId?: true
    date?: true
    campaignId?: true
    campaignName?: true
    adId?: true
    device?: true
    country?: true
    domainId?: true
    clicks?: true
    spend?: true
    excludedClicks?: true
    conversions?: true
    ecpc?: true
    ecpa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClickDataCountAggregateInputType = {
    id?: true
    trafficSourceId?: true
    date?: true
    campaignId?: true
    campaignName?: true
    adId?: true
    device?: true
    country?: true
    domainId?: true
    clicks?: true
    spend?: true
    excludedClicks?: true
    conversions?: true
    ecpc?: true
    ecpa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClickDataAggregateArgs = {
    /**
     * Filter which ClickData to aggregate.
     * 
    **/
    where?: ClickDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickData to fetch.
     * 
    **/
    orderBy?: Enumerable<ClickDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClickDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClickData
    **/
    _count?: true | ClickDataCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ClickDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClickDataAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ClickDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClickDataSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ClickDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClickDataMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ClickDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClickDataMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ClickDataMaxAggregateInputType
  }

  export type GetClickDataAggregateType<T extends ClickDataAggregateArgs> = {
        [P in keyof T & keyof AggregateClickData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClickData[P]>
      : GetScalarType<T[P], AggregateClickData[P]>
  }


    
    
  export type ClickDataGroupByArgs = {
    where?: ClickDataWhereInput
    orderBy?: Enumerable<ClickDataOrderByWithAggregationInput>
    by: Array<ClickDataScalarFieldEnum>
    having?: ClickDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClickDataCountAggregateInputType | true
    _avg?: ClickDataAvgAggregateInputType
    _sum?: ClickDataSumAggregateInputType
    _min?: ClickDataMinAggregateInputType
    _max?: ClickDataMaxAggregateInputType
  }


  export type ClickDataGroupByOutputType = {
    id: string
    trafficSourceId: string
    date: Date
    campaignId: number
    campaignName: string
    adId: number | null
    device: string
    country: string | null
    domainId: number
    clicks: number
    spend: number
    excludedClicks: number
    conversions: number
    ecpc: number
    ecpa: number
    createdAt: Date
    updatedAt: Date
    _count: ClickDataCountAggregateOutputType | null
    _avg: ClickDataAvgAggregateOutputType | null
    _sum: ClickDataSumAggregateOutputType | null
    _min: ClickDataMinAggregateOutputType | null
    _max: ClickDataMaxAggregateOutputType | null
  }

  type GetClickDataGroupByPayload<T extends ClickDataGroupByArgs> = Promise<
    Array<
      PickArray<ClickDataGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ClickDataGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ClickDataGroupByOutputType[P]> 
            : GetScalarType<T[P], ClickDataGroupByOutputType[P]>
        }
      > 
    >


  export type ClickDataSelect = {
    id?: boolean
    trafficSource?: boolean | TrafficSourceArgs
    trafficSourceId?: boolean
    date?: boolean
    campaignId?: boolean
    campaignName?: boolean
    adId?: boolean
    device?: boolean
    country?: boolean
    domainId?: boolean
    clicks?: boolean
    spend?: boolean
    excludedClicks?: boolean
    conversions?: boolean
    ecpc?: boolean
    ecpa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClickDataInclude = {
    trafficSource?: boolean | TrafficSourceArgs
  }

  export type ClickDataGetPayload<
    S extends boolean | null | undefined | ClickDataArgs,
    U = keyof S
      > = S extends true
        ? ClickData
    : S extends undefined
    ? never
    : S extends ClickDataArgs | ClickDataFindManyArgs
    ?'include' extends U
    ? ClickData  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'trafficSource'
        ? TrafficSourceGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ClickData ?ClickData [P]
  : 
          P extends 'trafficSource'
        ? TrafficSourceGetPayload<S['select'][P]> : never
  } 
    : ClickData
  : ClickData


  type ClickDataCountArgs = Merge<
    Omit<ClickDataFindManyArgs, 'select' | 'include'> & {
      select?: ClickDataCountAggregateInputType | true
    }
  >

  export interface ClickDataDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ClickData that matches the filter.
     * @param {ClickDataFindUniqueArgs} args - Arguments to find a ClickData
     * @example
     * // Get one ClickData
     * const clickData = await prisma.clickData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClickDataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClickDataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ClickData'> extends True ? CheckSelect<T, Prisma__ClickDataClient<ClickData>, Prisma__ClickDataClient<ClickDataGetPayload<T>>> : CheckSelect<T, Prisma__ClickDataClient<ClickData | null >, Prisma__ClickDataClient<ClickDataGetPayload<T> | null >>

    /**
     * Find the first ClickData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickDataFindFirstArgs} args - Arguments to find a ClickData
     * @example
     * // Get one ClickData
     * const clickData = await prisma.clickData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClickDataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClickDataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ClickData'> extends True ? CheckSelect<T, Prisma__ClickDataClient<ClickData>, Prisma__ClickDataClient<ClickDataGetPayload<T>>> : CheckSelect<T, Prisma__ClickDataClient<ClickData | null >, Prisma__ClickDataClient<ClickDataGetPayload<T> | null >>

    /**
     * Find zero or more ClickData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClickData
     * const clickData = await prisma.clickData.findMany()
     * 
     * // Get first 10 ClickData
     * const clickData = await prisma.clickData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clickDataWithIdOnly = await prisma.clickData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClickDataFindManyArgs>(
      args?: SelectSubset<T, ClickDataFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ClickData>>, PrismaPromise<Array<ClickDataGetPayload<T>>>>

    /**
     * Create a ClickData.
     * @param {ClickDataCreateArgs} args - Arguments to create a ClickData.
     * @example
     * // Create one ClickData
     * const ClickData = await prisma.clickData.create({
     *   data: {
     *     // ... data to create a ClickData
     *   }
     * })
     * 
    **/
    create<T extends ClickDataCreateArgs>(
      args: SelectSubset<T, ClickDataCreateArgs>
    ): CheckSelect<T, Prisma__ClickDataClient<ClickData>, Prisma__ClickDataClient<ClickDataGetPayload<T>>>

    /**
     * Create many ClickData.
     *     @param {ClickDataCreateManyArgs} args - Arguments to create many ClickData.
     *     @example
     *     // Create many ClickData
     *     const clickData = await prisma.clickData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClickDataCreateManyArgs>(
      args?: SelectSubset<T, ClickDataCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ClickData.
     * @param {ClickDataDeleteArgs} args - Arguments to delete one ClickData.
     * @example
     * // Delete one ClickData
     * const ClickData = await prisma.clickData.delete({
     *   where: {
     *     // ... filter to delete one ClickData
     *   }
     * })
     * 
    **/
    delete<T extends ClickDataDeleteArgs>(
      args: SelectSubset<T, ClickDataDeleteArgs>
    ): CheckSelect<T, Prisma__ClickDataClient<ClickData>, Prisma__ClickDataClient<ClickDataGetPayload<T>>>

    /**
     * Update one ClickData.
     * @param {ClickDataUpdateArgs} args - Arguments to update one ClickData.
     * @example
     * // Update one ClickData
     * const clickData = await prisma.clickData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClickDataUpdateArgs>(
      args: SelectSubset<T, ClickDataUpdateArgs>
    ): CheckSelect<T, Prisma__ClickDataClient<ClickData>, Prisma__ClickDataClient<ClickDataGetPayload<T>>>

    /**
     * Delete zero or more ClickData.
     * @param {ClickDataDeleteManyArgs} args - Arguments to filter ClickData to delete.
     * @example
     * // Delete a few ClickData
     * const { count } = await prisma.clickData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClickDataDeleteManyArgs>(
      args?: SelectSubset<T, ClickDataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClickData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClickData
     * const clickData = await prisma.clickData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClickDataUpdateManyArgs>(
      args: SelectSubset<T, ClickDataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ClickData.
     * @param {ClickDataUpsertArgs} args - Arguments to update or create a ClickData.
     * @example
     * // Update or create a ClickData
     * const clickData = await prisma.clickData.upsert({
     *   create: {
     *     // ... data to create a ClickData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClickData we want to update
     *   }
     * })
    **/
    upsert<T extends ClickDataUpsertArgs>(
      args: SelectSubset<T, ClickDataUpsertArgs>
    ): CheckSelect<T, Prisma__ClickDataClient<ClickData>, Prisma__ClickDataClient<ClickDataGetPayload<T>>>

    /**
     * Count the number of ClickData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickDataCountArgs} args - Arguments to filter ClickData to count.
     * @example
     * // Count the number of ClickData
     * const count = await prisma.clickData.count({
     *   where: {
     *     // ... the filter for the ClickData we want to count
     *   }
     * })
    **/
    count<T extends ClickDataCountArgs>(
      args?: Subset<T, ClickDataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClickDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClickData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClickDataAggregateArgs>(args: Subset<T, ClickDataAggregateArgs>): PrismaPromise<GetClickDataAggregateType<T>>

    /**
     * Group by ClickData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClickDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClickDataGroupByArgs['orderBy'] }
        : { orderBy?: ClickDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClickDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClickDataGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClickData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClickDataClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    trafficSource<T extends TrafficSourceArgs = {}>(args?: Subset<T, TrafficSourceArgs>): CheckSelect<T, Prisma__TrafficSourceClient<TrafficSource | null >, Prisma__TrafficSourceClient<TrafficSourceGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ClickData findUnique
   */
  export type ClickDataFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ClickData
     * 
    **/
    select?: ClickDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickDataInclude | null
    /**
     * Throw an Error if a ClickData can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ClickData to fetch.
     * 
    **/
    where: ClickDataWhereUniqueInput
  }


  /**
   * ClickData findFirst
   */
  export type ClickDataFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ClickData
     * 
    **/
    select?: ClickDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickDataInclude | null
    /**
     * Throw an Error if a ClickData can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ClickData to fetch.
     * 
    **/
    where?: ClickDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickData to fetch.
     * 
    **/
    orderBy?: Enumerable<ClickDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClickData.
     * 
    **/
    cursor?: ClickDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClickData.
     * 
    **/
    distinct?: Enumerable<ClickDataScalarFieldEnum>
  }


  /**
   * ClickData findMany
   */
  export type ClickDataFindManyArgs = {
    /**
     * Select specific fields to fetch from the ClickData
     * 
    **/
    select?: ClickDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickDataInclude | null
    /**
     * Filter, which ClickData to fetch.
     * 
    **/
    where?: ClickDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickData to fetch.
     * 
    **/
    orderBy?: Enumerable<ClickDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClickData.
     * 
    **/
    cursor?: ClickDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickData.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClickDataScalarFieldEnum>
  }


  /**
   * ClickData create
   */
  export type ClickDataCreateArgs = {
    /**
     * Select specific fields to fetch from the ClickData
     * 
    **/
    select?: ClickDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickDataInclude | null
    /**
     * The data needed to create a ClickData.
     * 
    **/
    data: XOR<ClickDataCreateInput, ClickDataUncheckedCreateInput>
  }


  /**
   * ClickData createMany
   */
  export type ClickDataCreateManyArgs = {
    data: Enumerable<ClickDataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ClickData update
   */
  export type ClickDataUpdateArgs = {
    /**
     * Select specific fields to fetch from the ClickData
     * 
    **/
    select?: ClickDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickDataInclude | null
    /**
     * The data needed to update a ClickData.
     * 
    **/
    data: XOR<ClickDataUpdateInput, ClickDataUncheckedUpdateInput>
    /**
     * Choose, which ClickData to update.
     * 
    **/
    where: ClickDataWhereUniqueInput
  }


  /**
   * ClickData updateMany
   */
  export type ClickDataUpdateManyArgs = {
    data: XOR<ClickDataUpdateManyMutationInput, ClickDataUncheckedUpdateManyInput>
    where?: ClickDataWhereInput
  }


  /**
   * ClickData upsert
   */
  export type ClickDataUpsertArgs = {
    /**
     * Select specific fields to fetch from the ClickData
     * 
    **/
    select?: ClickDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickDataInclude | null
    /**
     * The filter to search for the ClickData to update in case it exists.
     * 
    **/
    where: ClickDataWhereUniqueInput
    /**
     * In case the ClickData found by the `where` argument doesn't exist, create a new ClickData with this data.
     * 
    **/
    create: XOR<ClickDataCreateInput, ClickDataUncheckedCreateInput>
    /**
     * In case the ClickData was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClickDataUpdateInput, ClickDataUncheckedUpdateInput>
  }


  /**
   * ClickData delete
   */
  export type ClickDataDeleteArgs = {
    /**
     * Select specific fields to fetch from the ClickData
     * 
    **/
    select?: ClickDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickDataInclude | null
    /**
     * Filter which ClickData to delete.
     * 
    **/
    where: ClickDataWhereUniqueInput
  }


  /**
   * ClickData deleteMany
   */
  export type ClickDataDeleteManyArgs = {
    where?: ClickDataWhereInput
  }


  /**
   * ClickData without action
   */
  export type ClickDataArgs = {
    /**
     * Select specific fields to fetch from the ClickData
     * 
    **/
    select?: ClickDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClickDataInclude | null
  }



  /**
   * Model FunnelAccount
   */


  export type AggregateFunnelAccount = {
    _count: FunnelAccountCountAggregateOutputType | null
    count: FunnelAccountCountAggregateOutputType | null
    _min: FunnelAccountMinAggregateOutputType | null
    min: FunnelAccountMinAggregateOutputType | null
    _max: FunnelAccountMaxAggregateOutputType | null
    max: FunnelAccountMaxAggregateOutputType | null
  }

  export type FunnelAccountMinAggregateOutputType = {
    id: string | null
    type: AccountType | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    funnelId: string | null
  }

  export type FunnelAccountMaxAggregateOutputType = {
    id: string | null
    type: AccountType | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    funnelId: string | null
  }

  export type FunnelAccountCountAggregateOutputType = {
    id: number
    type: number
    name: number
    createdAt: number
    updatedAt: number
    funnelId: number
    _all: number
  }


  export type FunnelAccountMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    funnelId?: true
  }

  export type FunnelAccountMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    funnelId?: true
  }

  export type FunnelAccountCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    funnelId?: true
    _all?: true
  }

  export type FunnelAccountAggregateArgs = {
    /**
     * Filter which FunnelAccount to aggregate.
     * 
    **/
    where?: FunnelAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FunnelAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<FunnelAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FunnelAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FunnelAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FunnelAccounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FunnelAccounts
    **/
    _count?: true | FunnelAccountCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | FunnelAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FunnelAccountMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: FunnelAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FunnelAccountMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: FunnelAccountMaxAggregateInputType
  }

  export type GetFunnelAccountAggregateType<T extends FunnelAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateFunnelAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFunnelAccount[P]>
      : GetScalarType<T[P], AggregateFunnelAccount[P]>
  }


    
    
  export type FunnelAccountGroupByArgs = {
    where?: FunnelAccountWhereInput
    orderBy?: Enumerable<FunnelAccountOrderByWithAggregationInput>
    by: Array<FunnelAccountScalarFieldEnum>
    having?: FunnelAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FunnelAccountCountAggregateInputType | true
    _min?: FunnelAccountMinAggregateInputType
    _max?: FunnelAccountMaxAggregateInputType
  }


  export type FunnelAccountGroupByOutputType = {
    id: string
    type: AccountType
    name: string
    createdAt: Date
    updatedAt: Date
    funnelId: string | null
    _count: FunnelAccountCountAggregateOutputType | null
    _min: FunnelAccountMinAggregateOutputType | null
    _max: FunnelAccountMaxAggregateOutputType | null
  }

  type GetFunnelAccountGroupByPayload<T extends FunnelAccountGroupByArgs> = Promise<
    Array<
      PickArray<FunnelAccountGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof FunnelAccountGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], FunnelAccountGroupByOutputType[P]> 
            : GetScalarType<T[P], FunnelAccountGroupByOutputType[P]>
        }
      > 
    >


  export type FunnelAccountSelect = {
    id?: boolean
    type?: boolean
    name?: boolean
    domains?: boolean | DomainFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    Funnel?: boolean | FunnelArgs
    funnelId?: boolean
    _count?: boolean | FunnelAccountCountOutputTypeArgs
  }

  export type FunnelAccountInclude = {
    domains?: boolean | DomainFindManyArgs
    Funnel?: boolean | FunnelArgs
    _count?: boolean | FunnelAccountCountOutputTypeArgs
  }

  export type FunnelAccountGetPayload<
    S extends boolean | null | undefined | FunnelAccountArgs,
    U = keyof S
      > = S extends true
        ? FunnelAccount
    : S extends undefined
    ? never
    : S extends FunnelAccountArgs | FunnelAccountFindManyArgs
    ?'include' extends U
    ? FunnelAccount  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'domains'
        ? Array < DomainGetPayload<S['include'][P]>>  :
        P extends 'Funnel'
        ? FunnelGetPayload<S['include'][P]> | null :
        P extends '_count'
        ? FunnelAccountCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof FunnelAccount ?FunnelAccount [P]
  : 
          P extends 'domains'
        ? Array < DomainGetPayload<S['select'][P]>>  :
        P extends 'Funnel'
        ? FunnelGetPayload<S['select'][P]> | null :
        P extends '_count'
        ? FunnelAccountCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : FunnelAccount
  : FunnelAccount


  type FunnelAccountCountArgs = Merge<
    Omit<FunnelAccountFindManyArgs, 'select' | 'include'> & {
      select?: FunnelAccountCountAggregateInputType | true
    }
  >

  export interface FunnelAccountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one FunnelAccount that matches the filter.
     * @param {FunnelAccountFindUniqueArgs} args - Arguments to find a FunnelAccount
     * @example
     * // Get one FunnelAccount
     * const funnelAccount = await prisma.funnelAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FunnelAccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FunnelAccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FunnelAccount'> extends True ? CheckSelect<T, Prisma__FunnelAccountClient<FunnelAccount>, Prisma__FunnelAccountClient<FunnelAccountGetPayload<T>>> : CheckSelect<T, Prisma__FunnelAccountClient<FunnelAccount | null >, Prisma__FunnelAccountClient<FunnelAccountGetPayload<T> | null >>

    /**
     * Find the first FunnelAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelAccountFindFirstArgs} args - Arguments to find a FunnelAccount
     * @example
     * // Get one FunnelAccount
     * const funnelAccount = await prisma.funnelAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FunnelAccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FunnelAccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FunnelAccount'> extends True ? CheckSelect<T, Prisma__FunnelAccountClient<FunnelAccount>, Prisma__FunnelAccountClient<FunnelAccountGetPayload<T>>> : CheckSelect<T, Prisma__FunnelAccountClient<FunnelAccount | null >, Prisma__FunnelAccountClient<FunnelAccountGetPayload<T> | null >>

    /**
     * Find zero or more FunnelAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FunnelAccounts
     * const funnelAccounts = await prisma.funnelAccount.findMany()
     * 
     * // Get first 10 FunnelAccounts
     * const funnelAccounts = await prisma.funnelAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funnelAccountWithIdOnly = await prisma.funnelAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FunnelAccountFindManyArgs>(
      args?: SelectSubset<T, FunnelAccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FunnelAccount>>, PrismaPromise<Array<FunnelAccountGetPayload<T>>>>

    /**
     * Create a FunnelAccount.
     * @param {FunnelAccountCreateArgs} args - Arguments to create a FunnelAccount.
     * @example
     * // Create one FunnelAccount
     * const FunnelAccount = await prisma.funnelAccount.create({
     *   data: {
     *     // ... data to create a FunnelAccount
     *   }
     * })
     * 
    **/
    create<T extends FunnelAccountCreateArgs>(
      args: SelectSubset<T, FunnelAccountCreateArgs>
    ): CheckSelect<T, Prisma__FunnelAccountClient<FunnelAccount>, Prisma__FunnelAccountClient<FunnelAccountGetPayload<T>>>

    /**
     * Create many FunnelAccounts.
     *     @param {FunnelAccountCreateManyArgs} args - Arguments to create many FunnelAccounts.
     *     @example
     *     // Create many FunnelAccounts
     *     const funnelAccount = await prisma.funnelAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FunnelAccountCreateManyArgs>(
      args?: SelectSubset<T, FunnelAccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FunnelAccount.
     * @param {FunnelAccountDeleteArgs} args - Arguments to delete one FunnelAccount.
     * @example
     * // Delete one FunnelAccount
     * const FunnelAccount = await prisma.funnelAccount.delete({
     *   where: {
     *     // ... filter to delete one FunnelAccount
     *   }
     * })
     * 
    **/
    delete<T extends FunnelAccountDeleteArgs>(
      args: SelectSubset<T, FunnelAccountDeleteArgs>
    ): CheckSelect<T, Prisma__FunnelAccountClient<FunnelAccount>, Prisma__FunnelAccountClient<FunnelAccountGetPayload<T>>>

    /**
     * Update one FunnelAccount.
     * @param {FunnelAccountUpdateArgs} args - Arguments to update one FunnelAccount.
     * @example
     * // Update one FunnelAccount
     * const funnelAccount = await prisma.funnelAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FunnelAccountUpdateArgs>(
      args: SelectSubset<T, FunnelAccountUpdateArgs>
    ): CheckSelect<T, Prisma__FunnelAccountClient<FunnelAccount>, Prisma__FunnelAccountClient<FunnelAccountGetPayload<T>>>

    /**
     * Delete zero or more FunnelAccounts.
     * @param {FunnelAccountDeleteManyArgs} args - Arguments to filter FunnelAccounts to delete.
     * @example
     * // Delete a few FunnelAccounts
     * const { count } = await prisma.funnelAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FunnelAccountDeleteManyArgs>(
      args?: SelectSubset<T, FunnelAccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FunnelAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FunnelAccounts
     * const funnelAccount = await prisma.funnelAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FunnelAccountUpdateManyArgs>(
      args: SelectSubset<T, FunnelAccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FunnelAccount.
     * @param {FunnelAccountUpsertArgs} args - Arguments to update or create a FunnelAccount.
     * @example
     * // Update or create a FunnelAccount
     * const funnelAccount = await prisma.funnelAccount.upsert({
     *   create: {
     *     // ... data to create a FunnelAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FunnelAccount we want to update
     *   }
     * })
    **/
    upsert<T extends FunnelAccountUpsertArgs>(
      args: SelectSubset<T, FunnelAccountUpsertArgs>
    ): CheckSelect<T, Prisma__FunnelAccountClient<FunnelAccount>, Prisma__FunnelAccountClient<FunnelAccountGetPayload<T>>>

    /**
     * Count the number of FunnelAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelAccountCountArgs} args - Arguments to filter FunnelAccounts to count.
     * @example
     * // Count the number of FunnelAccounts
     * const count = await prisma.funnelAccount.count({
     *   where: {
     *     // ... the filter for the FunnelAccounts we want to count
     *   }
     * })
    **/
    count<T extends FunnelAccountCountArgs>(
      args?: Subset<T, FunnelAccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FunnelAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FunnelAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FunnelAccountAggregateArgs>(args: Subset<T, FunnelAccountAggregateArgs>): PrismaPromise<GetFunnelAccountAggregateType<T>>

    /**
     * Group by FunnelAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FunnelAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FunnelAccountGroupByArgs['orderBy'] }
        : { orderBy?: FunnelAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FunnelAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFunnelAccountGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FunnelAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FunnelAccountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    domains<T extends DomainFindManyArgs = {}>(args?: Subset<T, DomainFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Domain>>, PrismaPromise<Array<DomainGetPayload<T>>>>;

    Funnel<T extends FunnelArgs = {}>(args?: Subset<T, FunnelArgs>): CheckSelect<T, Prisma__FunnelClient<Funnel | null >, Prisma__FunnelClient<FunnelGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FunnelAccount findUnique
   */
  export type FunnelAccountFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the FunnelAccount
     * 
    **/
    select?: FunnelAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelAccountInclude | null
    /**
     * Throw an Error if a FunnelAccount can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FunnelAccount to fetch.
     * 
    **/
    where: FunnelAccountWhereUniqueInput
  }


  /**
   * FunnelAccount findFirst
   */
  export type FunnelAccountFindFirstArgs = {
    /**
     * Select specific fields to fetch from the FunnelAccount
     * 
    **/
    select?: FunnelAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelAccountInclude | null
    /**
     * Throw an Error if a FunnelAccount can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FunnelAccount to fetch.
     * 
    **/
    where?: FunnelAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FunnelAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<FunnelAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FunnelAccounts.
     * 
    **/
    cursor?: FunnelAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FunnelAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FunnelAccounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FunnelAccounts.
     * 
    **/
    distinct?: Enumerable<FunnelAccountScalarFieldEnum>
  }


  /**
   * FunnelAccount findMany
   */
  export type FunnelAccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the FunnelAccount
     * 
    **/
    select?: FunnelAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelAccountInclude | null
    /**
     * Filter, which FunnelAccounts to fetch.
     * 
    **/
    where?: FunnelAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FunnelAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<FunnelAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FunnelAccounts.
     * 
    **/
    cursor?: FunnelAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FunnelAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FunnelAccounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FunnelAccountScalarFieldEnum>
  }


  /**
   * FunnelAccount create
   */
  export type FunnelAccountCreateArgs = {
    /**
     * Select specific fields to fetch from the FunnelAccount
     * 
    **/
    select?: FunnelAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelAccountInclude | null
    /**
     * The data needed to create a FunnelAccount.
     * 
    **/
    data: XOR<FunnelAccountCreateInput, FunnelAccountUncheckedCreateInput>
  }


  /**
   * FunnelAccount createMany
   */
  export type FunnelAccountCreateManyArgs = {
    data: Enumerable<FunnelAccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FunnelAccount update
   */
  export type FunnelAccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the FunnelAccount
     * 
    **/
    select?: FunnelAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelAccountInclude | null
    /**
     * The data needed to update a FunnelAccount.
     * 
    **/
    data: XOR<FunnelAccountUpdateInput, FunnelAccountUncheckedUpdateInput>
    /**
     * Choose, which FunnelAccount to update.
     * 
    **/
    where: FunnelAccountWhereUniqueInput
  }


  /**
   * FunnelAccount updateMany
   */
  export type FunnelAccountUpdateManyArgs = {
    data: XOR<FunnelAccountUpdateManyMutationInput, FunnelAccountUncheckedUpdateManyInput>
    where?: FunnelAccountWhereInput
  }


  /**
   * FunnelAccount upsert
   */
  export type FunnelAccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the FunnelAccount
     * 
    **/
    select?: FunnelAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelAccountInclude | null
    /**
     * The filter to search for the FunnelAccount to update in case it exists.
     * 
    **/
    where: FunnelAccountWhereUniqueInput
    /**
     * In case the FunnelAccount found by the `where` argument doesn't exist, create a new FunnelAccount with this data.
     * 
    **/
    create: XOR<FunnelAccountCreateInput, FunnelAccountUncheckedCreateInput>
    /**
     * In case the FunnelAccount was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FunnelAccountUpdateInput, FunnelAccountUncheckedUpdateInput>
  }


  /**
   * FunnelAccount delete
   */
  export type FunnelAccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the FunnelAccount
     * 
    **/
    select?: FunnelAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelAccountInclude | null
    /**
     * Filter which FunnelAccount to delete.
     * 
    **/
    where: FunnelAccountWhereUniqueInput
  }


  /**
   * FunnelAccount deleteMany
   */
  export type FunnelAccountDeleteManyArgs = {
    where?: FunnelAccountWhereInput
  }


  /**
   * FunnelAccount without action
   */
  export type FunnelAccountArgs = {
    /**
     * Select specific fields to fetch from the FunnelAccount
     * 
    **/
    select?: FunnelAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelAccountInclude | null
  }



  /**
   * Model Domain
   */


  export type AggregateDomain = {
    _count: DomainCountAggregateOutputType | null
    count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
    max: DomainMaxAggregateOutputType | null
  }

  export type DomainMinAggregateOutputType = {
    id: string | null
    name: string | null
    state: string | null
    creationDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    funnelAccountId: string | null
  }

  export type DomainMaxAggregateOutputType = {
    id: string | null
    name: string | null
    state: string | null
    creationDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    funnelAccountId: string | null
  }

  export type DomainCountAggregateOutputType = {
    id: number
    name: number
    state: number
    creationDate: number
    createdAt: number
    updatedAt: number
    funnelAccountId: number
    _all: number
  }


  export type DomainMinAggregateInputType = {
    id?: true
    name?: true
    state?: true
    creationDate?: true
    createdAt?: true
    updatedAt?: true
    funnelAccountId?: true
  }

  export type DomainMaxAggregateInputType = {
    id?: true
    name?: true
    state?: true
    creationDate?: true
    createdAt?: true
    updatedAt?: true
    funnelAccountId?: true
  }

  export type DomainCountAggregateInputType = {
    id?: true
    name?: true
    state?: true
    creationDate?: true
    createdAt?: true
    updatedAt?: true
    funnelAccountId?: true
    _all?: true
  }

  export type DomainAggregateArgs = {
    /**
     * Filter which Domain to aggregate.
     * 
    **/
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     * 
    **/
    orderBy?: Enumerable<DomainOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Domains
    **/
    _count?: true | DomainCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | DomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: DomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: DomainMaxAggregateInputType
  }

  export type GetDomainAggregateType<T extends DomainAggregateArgs> = {
        [P in keyof T & keyof AggregateDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomain[P]>
      : GetScalarType<T[P], AggregateDomain[P]>
  }


    
    
  export type DomainGroupByArgs = {
    where?: DomainWhereInput
    orderBy?: Enumerable<DomainOrderByWithAggregationInput>
    by: Array<DomainScalarFieldEnum>
    having?: DomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainCountAggregateInputType | true
    _min?: DomainMinAggregateInputType
    _max?: DomainMaxAggregateInputType
  }


  export type DomainGroupByOutputType = {
    id: string
    name: string
    state: string
    creationDate: Date | null
    createdAt: Date
    updatedAt: Date
    funnelAccountId: string | null
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  type GetDomainGroupByPayload<T extends DomainGroupByArgs> = Promise<
    Array<
      PickArray<DomainGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof DomainGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], DomainGroupByOutputType[P]> 
            : GetScalarType<T[P], DomainGroupByOutputType[P]>
        }
      > 
    >


  export type DomainSelect = {
    id?: boolean
    name?: boolean
    state?: boolean
    creationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FunnelAccount?: boolean | FunnelAccountArgs
    funnelAccountId?: boolean
  }

  export type DomainInclude = {
    FunnelAccount?: boolean | FunnelAccountArgs
  }

  export type DomainGetPayload<
    S extends boolean | null | undefined | DomainArgs,
    U = keyof S
      > = S extends true
        ? Domain
    : S extends undefined
    ? never
    : S extends DomainArgs | DomainFindManyArgs
    ?'include' extends U
    ? Domain  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'FunnelAccount'
        ? FunnelAccountGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Domain ?Domain [P]
  : 
          P extends 'FunnelAccount'
        ? FunnelAccountGetPayload<S['select'][P]> | null : never
  } 
    : Domain
  : Domain


  type DomainCountArgs = Merge<
    Omit<DomainFindManyArgs, 'select' | 'include'> & {
      select?: DomainCountAggregateInputType | true
    }
  >

  export interface DomainDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Domain that matches the filter.
     * @param {DomainFindUniqueArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DomainFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DomainFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Domain'> extends True ? CheckSelect<T, Prisma__DomainClient<Domain>, Prisma__DomainClient<DomainGetPayload<T>>> : CheckSelect<T, Prisma__DomainClient<Domain | null >, Prisma__DomainClient<DomainGetPayload<T> | null >>

    /**
     * Find the first Domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DomainFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DomainFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Domain'> extends True ? CheckSelect<T, Prisma__DomainClient<Domain>, Prisma__DomainClient<DomainGetPayload<T>>> : CheckSelect<T, Prisma__DomainClient<Domain | null >, Prisma__DomainClient<DomainGetPayload<T> | null >>

    /**
     * Find zero or more Domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Domains
     * const domains = await prisma.domain.findMany()
     * 
     * // Get first 10 Domains
     * const domains = await prisma.domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainWithIdOnly = await prisma.domain.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DomainFindManyArgs>(
      args?: SelectSubset<T, DomainFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Domain>>, PrismaPromise<Array<DomainGetPayload<T>>>>

    /**
     * Create a Domain.
     * @param {DomainCreateArgs} args - Arguments to create a Domain.
     * @example
     * // Create one Domain
     * const Domain = await prisma.domain.create({
     *   data: {
     *     // ... data to create a Domain
     *   }
     * })
     * 
    **/
    create<T extends DomainCreateArgs>(
      args: SelectSubset<T, DomainCreateArgs>
    ): CheckSelect<T, Prisma__DomainClient<Domain>, Prisma__DomainClient<DomainGetPayload<T>>>

    /**
     * Create many Domains.
     *     @param {DomainCreateManyArgs} args - Arguments to create many Domains.
     *     @example
     *     // Create many Domains
     *     const domain = await prisma.domain.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DomainCreateManyArgs>(
      args?: SelectSubset<T, DomainCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Domain.
     * @param {DomainDeleteArgs} args - Arguments to delete one Domain.
     * @example
     * // Delete one Domain
     * const Domain = await prisma.domain.delete({
     *   where: {
     *     // ... filter to delete one Domain
     *   }
     * })
     * 
    **/
    delete<T extends DomainDeleteArgs>(
      args: SelectSubset<T, DomainDeleteArgs>
    ): CheckSelect<T, Prisma__DomainClient<Domain>, Prisma__DomainClient<DomainGetPayload<T>>>

    /**
     * Update one Domain.
     * @param {DomainUpdateArgs} args - Arguments to update one Domain.
     * @example
     * // Update one Domain
     * const domain = await prisma.domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DomainUpdateArgs>(
      args: SelectSubset<T, DomainUpdateArgs>
    ): CheckSelect<T, Prisma__DomainClient<Domain>, Prisma__DomainClient<DomainGetPayload<T>>>

    /**
     * Delete zero or more Domains.
     * @param {DomainDeleteManyArgs} args - Arguments to filter Domains to delete.
     * @example
     * // Delete a few Domains
     * const { count } = await prisma.domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DomainDeleteManyArgs>(
      args?: SelectSubset<T, DomainDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DomainUpdateManyArgs>(
      args: SelectSubset<T, DomainUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Domain.
     * @param {DomainUpsertArgs} args - Arguments to update or create a Domain.
     * @example
     * // Update or create a Domain
     * const domain = await prisma.domain.upsert({
     *   create: {
     *     // ... data to create a Domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Domain we want to update
     *   }
     * })
    **/
    upsert<T extends DomainUpsertArgs>(
      args: SelectSubset<T, DomainUpsertArgs>
    ): CheckSelect<T, Prisma__DomainClient<Domain>, Prisma__DomainClient<DomainGetPayload<T>>>

    /**
     * Count the number of Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCountArgs} args - Arguments to filter Domains to count.
     * @example
     * // Count the number of Domains
     * const count = await prisma.domain.count({
     *   where: {
     *     // ... the filter for the Domains we want to count
     *   }
     * })
    **/
    count<T extends DomainCountArgs>(
      args?: Subset<T, DomainCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DomainAggregateArgs>(args: Subset<T, DomainAggregateArgs>): PrismaPromise<GetDomainAggregateType<T>>

    /**
     * Group by Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainGroupByArgs['orderBy'] }
        : { orderBy?: DomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Domain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DomainClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    FunnelAccount<T extends FunnelAccountArgs = {}>(args?: Subset<T, FunnelAccountArgs>): CheckSelect<T, Prisma__FunnelAccountClient<FunnelAccount | null >, Prisma__FunnelAccountClient<FunnelAccountGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Domain findUnique
   */
  export type DomainFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Domain
     * 
    **/
    select?: DomainSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DomainInclude | null
    /**
     * Throw an Error if a Domain can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Domain to fetch.
     * 
    **/
    where: DomainWhereUniqueInput
  }


  /**
   * Domain findFirst
   */
  export type DomainFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Domain
     * 
    **/
    select?: DomainSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DomainInclude | null
    /**
     * Throw an Error if a Domain can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Domain to fetch.
     * 
    **/
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     * 
    **/
    orderBy?: Enumerable<DomainOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     * 
    **/
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     * 
    **/
    distinct?: Enumerable<DomainScalarFieldEnum>
  }


  /**
   * Domain findMany
   */
  export type DomainFindManyArgs = {
    /**
     * Select specific fields to fetch from the Domain
     * 
    **/
    select?: DomainSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DomainInclude | null
    /**
     * Filter, which Domains to fetch.
     * 
    **/
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     * 
    **/
    orderBy?: Enumerable<DomainOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Domains.
     * 
    **/
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DomainScalarFieldEnum>
  }


  /**
   * Domain create
   */
  export type DomainCreateArgs = {
    /**
     * Select specific fields to fetch from the Domain
     * 
    **/
    select?: DomainSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DomainInclude | null
    /**
     * The data needed to create a Domain.
     * 
    **/
    data: XOR<DomainCreateInput, DomainUncheckedCreateInput>
  }


  /**
   * Domain createMany
   */
  export type DomainCreateManyArgs = {
    data: Enumerable<DomainCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Domain update
   */
  export type DomainUpdateArgs = {
    /**
     * Select specific fields to fetch from the Domain
     * 
    **/
    select?: DomainSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DomainInclude | null
    /**
     * The data needed to update a Domain.
     * 
    **/
    data: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
    /**
     * Choose, which Domain to update.
     * 
    **/
    where: DomainWhereUniqueInput
  }


  /**
   * Domain updateMany
   */
  export type DomainUpdateManyArgs = {
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    where?: DomainWhereInput
  }


  /**
   * Domain upsert
   */
  export type DomainUpsertArgs = {
    /**
     * Select specific fields to fetch from the Domain
     * 
    **/
    select?: DomainSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DomainInclude | null
    /**
     * The filter to search for the Domain to update in case it exists.
     * 
    **/
    where: DomainWhereUniqueInput
    /**
     * In case the Domain found by the `where` argument doesn't exist, create a new Domain with this data.
     * 
    **/
    create: XOR<DomainCreateInput, DomainUncheckedCreateInput>
    /**
     * In case the Domain was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
  }


  /**
   * Domain delete
   */
  export type DomainDeleteArgs = {
    /**
     * Select specific fields to fetch from the Domain
     * 
    **/
    select?: DomainSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DomainInclude | null
    /**
     * Filter which Domain to delete.
     * 
    **/
    where: DomainWhereUniqueInput
  }


  /**
   * Domain deleteMany
   */
  export type DomainDeleteManyArgs = {
    where?: DomainWhereInput
  }


  /**
   * Domain without action
   */
  export type DomainArgs = {
    /**
     * Select specific fields to fetch from the Domain
     * 
    **/
    select?: DomainSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DomainInclude | null
  }



  /**
   * Model Funnel
   */


  export type AggregateFunnel = {
    _count: FunnelCountAggregateOutputType | null
    count: FunnelCountAggregateOutputType | null
    _avg: FunnelAvgAggregateOutputType | null
    avg: FunnelAvgAggregateOutputType | null
    _sum: FunnelSumAggregateOutputType | null
    sum: FunnelSumAggregateOutputType | null
    _min: FunnelMinAggregateOutputType | null
    min: FunnelMinAggregateOutputType | null
    _max: FunnelMaxAggregateOutputType | null
    max: FunnelMaxAggregateOutputType | null
  }

  export type FunnelAvgAggregateOutputType = {
    order: number | null
    cards: number | null
  }

  export type FunnelSumAggregateOutputType = {
    order: number | null
    cards: number[] | null
  }

  export type FunnelMinAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    trafficFirstSeen: Date | null
    browserProfile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FunnelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    trafficFirstSeen: Date | null
    browserProfile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FunnelCountAggregateOutputType = {
    id: number
    name: number
    order: number
    trafficFirstSeen: number
    cards: number
    browserProfile: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FunnelAvgAggregateInputType = {
    order?: true
    cards?: true
  }

  export type FunnelSumAggregateInputType = {
    order?: true
    cards?: true
  }

  export type FunnelMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
    trafficFirstSeen?: true
    browserProfile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FunnelMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
    trafficFirstSeen?: true
    browserProfile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FunnelCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    trafficFirstSeen?: true
    cards?: true
    browserProfile?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FunnelAggregateArgs = {
    /**
     * Filter which Funnel to aggregate.
     * 
    **/
    where?: FunnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funnels to fetch.
     * 
    **/
    orderBy?: Enumerable<FunnelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FunnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funnels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funnels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funnels
    **/
    _count?: true | FunnelCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | FunnelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FunnelAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: FunnelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FunnelSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: FunnelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FunnelMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: FunnelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FunnelMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: FunnelMaxAggregateInputType
  }

  export type GetFunnelAggregateType<T extends FunnelAggregateArgs> = {
        [P in keyof T & keyof AggregateFunnel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFunnel[P]>
      : GetScalarType<T[P], AggregateFunnel[P]>
  }


    
    
  export type FunnelGroupByArgs = {
    where?: FunnelWhereInput
    orderBy?: Enumerable<FunnelOrderByWithAggregationInput>
    by: Array<FunnelScalarFieldEnum>
    having?: FunnelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FunnelCountAggregateInputType | true
    _avg?: FunnelAvgAggregateInputType
    _sum?: FunnelSumAggregateInputType
    _min?: FunnelMinAggregateInputType
    _max?: FunnelMaxAggregateInputType
  }


  export type FunnelGroupByOutputType = {
    id: string
    name: string
    order: number | null
    trafficFirstSeen: Date | null
    cards: number[]
    browserProfile: string
    createdAt: Date
    updatedAt: Date
    _count: FunnelCountAggregateOutputType | null
    _avg: FunnelAvgAggregateOutputType | null
    _sum: FunnelSumAggregateOutputType | null
    _min: FunnelMinAggregateOutputType | null
    _max: FunnelMaxAggregateOutputType | null
  }

  type GetFunnelGroupByPayload<T extends FunnelGroupByArgs> = Promise<
    Array<
      PickArray<FunnelGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof FunnelGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], FunnelGroupByOutputType[P]> 
            : GetScalarType<T[P], FunnelGroupByOutputType[P]>
        }
      > 
    >


  export type FunnelSelect = {
    id?: boolean
    name?: boolean
    order?: boolean
    trafficFirstSeen?: boolean
    cards?: boolean
    browserProfile?: boolean
    linkedAccounts?: boolean | FunnelAccountFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | FunnelCountOutputTypeArgs
  }

  export type FunnelInclude = {
    linkedAccounts?: boolean | FunnelAccountFindManyArgs
    _count?: boolean | FunnelCountOutputTypeArgs
  }

  export type FunnelGetPayload<
    S extends boolean | null | undefined | FunnelArgs,
    U = keyof S
      > = S extends true
        ? Funnel
    : S extends undefined
    ? never
    : S extends FunnelArgs | FunnelFindManyArgs
    ?'include' extends U
    ? Funnel  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'linkedAccounts'
        ? Array < FunnelAccountGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? FunnelCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Funnel ?Funnel [P]
  : 
          P extends 'linkedAccounts'
        ? Array < FunnelAccountGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? FunnelCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Funnel
  : Funnel


  type FunnelCountArgs = Merge<
    Omit<FunnelFindManyArgs, 'select' | 'include'> & {
      select?: FunnelCountAggregateInputType | true
    }
  >

  export interface FunnelDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Funnel that matches the filter.
     * @param {FunnelFindUniqueArgs} args - Arguments to find a Funnel
     * @example
     * // Get one Funnel
     * const funnel = await prisma.funnel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FunnelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FunnelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Funnel'> extends True ? CheckSelect<T, Prisma__FunnelClient<Funnel>, Prisma__FunnelClient<FunnelGetPayload<T>>> : CheckSelect<T, Prisma__FunnelClient<Funnel | null >, Prisma__FunnelClient<FunnelGetPayload<T> | null >>

    /**
     * Find the first Funnel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelFindFirstArgs} args - Arguments to find a Funnel
     * @example
     * // Get one Funnel
     * const funnel = await prisma.funnel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FunnelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FunnelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Funnel'> extends True ? CheckSelect<T, Prisma__FunnelClient<Funnel>, Prisma__FunnelClient<FunnelGetPayload<T>>> : CheckSelect<T, Prisma__FunnelClient<Funnel | null >, Prisma__FunnelClient<FunnelGetPayload<T> | null >>

    /**
     * Find zero or more Funnels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funnels
     * const funnels = await prisma.funnel.findMany()
     * 
     * // Get first 10 Funnels
     * const funnels = await prisma.funnel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funnelWithIdOnly = await prisma.funnel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FunnelFindManyArgs>(
      args?: SelectSubset<T, FunnelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Funnel>>, PrismaPromise<Array<FunnelGetPayload<T>>>>

    /**
     * Create a Funnel.
     * @param {FunnelCreateArgs} args - Arguments to create a Funnel.
     * @example
     * // Create one Funnel
     * const Funnel = await prisma.funnel.create({
     *   data: {
     *     // ... data to create a Funnel
     *   }
     * })
     * 
    **/
    create<T extends FunnelCreateArgs>(
      args: SelectSubset<T, FunnelCreateArgs>
    ): CheckSelect<T, Prisma__FunnelClient<Funnel>, Prisma__FunnelClient<FunnelGetPayload<T>>>

    /**
     * Create many Funnels.
     *     @param {FunnelCreateManyArgs} args - Arguments to create many Funnels.
     *     @example
     *     // Create many Funnels
     *     const funnel = await prisma.funnel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FunnelCreateManyArgs>(
      args?: SelectSubset<T, FunnelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Funnel.
     * @param {FunnelDeleteArgs} args - Arguments to delete one Funnel.
     * @example
     * // Delete one Funnel
     * const Funnel = await prisma.funnel.delete({
     *   where: {
     *     // ... filter to delete one Funnel
     *   }
     * })
     * 
    **/
    delete<T extends FunnelDeleteArgs>(
      args: SelectSubset<T, FunnelDeleteArgs>
    ): CheckSelect<T, Prisma__FunnelClient<Funnel>, Prisma__FunnelClient<FunnelGetPayload<T>>>

    /**
     * Update one Funnel.
     * @param {FunnelUpdateArgs} args - Arguments to update one Funnel.
     * @example
     * // Update one Funnel
     * const funnel = await prisma.funnel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FunnelUpdateArgs>(
      args: SelectSubset<T, FunnelUpdateArgs>
    ): CheckSelect<T, Prisma__FunnelClient<Funnel>, Prisma__FunnelClient<FunnelGetPayload<T>>>

    /**
     * Delete zero or more Funnels.
     * @param {FunnelDeleteManyArgs} args - Arguments to filter Funnels to delete.
     * @example
     * // Delete a few Funnels
     * const { count } = await prisma.funnel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FunnelDeleteManyArgs>(
      args?: SelectSubset<T, FunnelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funnels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funnels
     * const funnel = await prisma.funnel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FunnelUpdateManyArgs>(
      args: SelectSubset<T, FunnelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Funnel.
     * @param {FunnelUpsertArgs} args - Arguments to update or create a Funnel.
     * @example
     * // Update or create a Funnel
     * const funnel = await prisma.funnel.upsert({
     *   create: {
     *     // ... data to create a Funnel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funnel we want to update
     *   }
     * })
    **/
    upsert<T extends FunnelUpsertArgs>(
      args: SelectSubset<T, FunnelUpsertArgs>
    ): CheckSelect<T, Prisma__FunnelClient<Funnel>, Prisma__FunnelClient<FunnelGetPayload<T>>>

    /**
     * Count the number of Funnels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelCountArgs} args - Arguments to filter Funnels to count.
     * @example
     * // Count the number of Funnels
     * const count = await prisma.funnel.count({
     *   where: {
     *     // ... the filter for the Funnels we want to count
     *   }
     * })
    **/
    count<T extends FunnelCountArgs>(
      args?: Subset<T, FunnelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FunnelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FunnelAggregateArgs>(args: Subset<T, FunnelAggregateArgs>): PrismaPromise<GetFunnelAggregateType<T>>

    /**
     * Group by Funnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FunnelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FunnelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FunnelGroupByArgs['orderBy'] }
        : { orderBy?: FunnelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FunnelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFunnelGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funnel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FunnelClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    linkedAccounts<T extends FunnelAccountFindManyArgs = {}>(args?: Subset<T, FunnelAccountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FunnelAccount>>, PrismaPromise<Array<FunnelAccountGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Funnel findUnique
   */
  export type FunnelFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Funnel
     * 
    **/
    select?: FunnelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelInclude | null
    /**
     * Throw an Error if a Funnel can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Funnel to fetch.
     * 
    **/
    where: FunnelWhereUniqueInput
  }


  /**
   * Funnel findFirst
   */
  export type FunnelFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Funnel
     * 
    **/
    select?: FunnelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelInclude | null
    /**
     * Throw an Error if a Funnel can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Funnel to fetch.
     * 
    **/
    where?: FunnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funnels to fetch.
     * 
    **/
    orderBy?: Enumerable<FunnelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funnels.
     * 
    **/
    cursor?: FunnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funnels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funnels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funnels.
     * 
    **/
    distinct?: Enumerable<FunnelScalarFieldEnum>
  }


  /**
   * Funnel findMany
   */
  export type FunnelFindManyArgs = {
    /**
     * Select specific fields to fetch from the Funnel
     * 
    **/
    select?: FunnelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelInclude | null
    /**
     * Filter, which Funnels to fetch.
     * 
    **/
    where?: FunnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funnels to fetch.
     * 
    **/
    orderBy?: Enumerable<FunnelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funnels.
     * 
    **/
    cursor?: FunnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funnels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funnels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FunnelScalarFieldEnum>
  }


  /**
   * Funnel create
   */
  export type FunnelCreateArgs = {
    /**
     * Select specific fields to fetch from the Funnel
     * 
    **/
    select?: FunnelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelInclude | null
    /**
     * The data needed to create a Funnel.
     * 
    **/
    data: XOR<FunnelCreateInput, FunnelUncheckedCreateInput>
  }


  /**
   * Funnel createMany
   */
  export type FunnelCreateManyArgs = {
    data: Enumerable<FunnelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Funnel update
   */
  export type FunnelUpdateArgs = {
    /**
     * Select specific fields to fetch from the Funnel
     * 
    **/
    select?: FunnelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelInclude | null
    /**
     * The data needed to update a Funnel.
     * 
    **/
    data: XOR<FunnelUpdateInput, FunnelUncheckedUpdateInput>
    /**
     * Choose, which Funnel to update.
     * 
    **/
    where: FunnelWhereUniqueInput
  }


  /**
   * Funnel updateMany
   */
  export type FunnelUpdateManyArgs = {
    data: XOR<FunnelUpdateManyMutationInput, FunnelUncheckedUpdateManyInput>
    where?: FunnelWhereInput
  }


  /**
   * Funnel upsert
   */
  export type FunnelUpsertArgs = {
    /**
     * Select specific fields to fetch from the Funnel
     * 
    **/
    select?: FunnelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelInclude | null
    /**
     * The filter to search for the Funnel to update in case it exists.
     * 
    **/
    where: FunnelWhereUniqueInput
    /**
     * In case the Funnel found by the `where` argument doesn't exist, create a new Funnel with this data.
     * 
    **/
    create: XOR<FunnelCreateInput, FunnelUncheckedCreateInput>
    /**
     * In case the Funnel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FunnelUpdateInput, FunnelUncheckedUpdateInput>
  }


  /**
   * Funnel delete
   */
  export type FunnelDeleteArgs = {
    /**
     * Select specific fields to fetch from the Funnel
     * 
    **/
    select?: FunnelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelInclude | null
    /**
     * Filter which Funnel to delete.
     * 
    **/
    where: FunnelWhereUniqueInput
  }


  /**
   * Funnel deleteMany
   */
  export type FunnelDeleteManyArgs = {
    where?: FunnelWhereInput
  }


  /**
   * Funnel without action
   */
  export type FunnelArgs = {
    /**
     * Select specific fields to fetch from the Funnel
     * 
    **/
    select?: FunnelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FunnelInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const TrafficSourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrafficSourceScalarFieldEnum = (typeof TrafficSourceScalarFieldEnum)[keyof typeof TrafficSourceScalarFieldEnum]


  export const ClickDataScalarFieldEnum: {
    id: 'id',
    trafficSourceId: 'trafficSourceId',
    date: 'date',
    campaignId: 'campaignId',
    campaignName: 'campaignName',
    adId: 'adId',
    device: 'device',
    country: 'country',
    domainId: 'domainId',
    clicks: 'clicks',
    spend: 'spend',
    excludedClicks: 'excludedClicks',
    conversions: 'conversions',
    ecpc: 'ecpc',
    ecpa: 'ecpa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClickDataScalarFieldEnum = (typeof ClickDataScalarFieldEnum)[keyof typeof ClickDataScalarFieldEnum]


  export const FunnelAccountScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    funnelId: 'funnelId'
  };

  export type FunnelAccountScalarFieldEnum = (typeof FunnelAccountScalarFieldEnum)[keyof typeof FunnelAccountScalarFieldEnum]


  export const DomainScalarFieldEnum: {
    id: 'id',
    name: 'name',
    state: 'state',
    creationDate: 'creationDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    funnelAccountId: 'funnelAccountId'
  };

  export type DomainScalarFieldEnum = (typeof DomainScalarFieldEnum)[keyof typeof DomainScalarFieldEnum]


  export const FunnelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order',
    trafficFirstSeen: 'trafficFirstSeen',
    cards: 'cards',
    browserProfile: 'browserProfile',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FunnelScalarFieldEnum = (typeof FunnelScalarFieldEnum)[keyof typeof FunnelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type TrafficSourceWhereInput = {
    AND?: Enumerable<TrafficSourceWhereInput>
    OR?: Enumerable<TrafficSourceWhereInput>
    NOT?: Enumerable<TrafficSourceWhereInput>
    id?: StringFilter | string
    name?: EnumTrafficSourceNameFilter | TrafficSourceName
    clickData?: ClickDataListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TrafficSourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    clickData?: ClickDataOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrafficSourceWhereUniqueInput = {
    id?: string
    name?: TrafficSourceName
  }

  export type TrafficSourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrafficSourceCountOrderByAggregateInput
    _max?: TrafficSourceMaxOrderByAggregateInput
    _min?: TrafficSourceMinOrderByAggregateInput
  }

  export type TrafficSourceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TrafficSourceScalarWhereWithAggregatesInput>
    OR?: Enumerable<TrafficSourceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TrafficSourceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: EnumTrafficSourceNameWithAggregatesFilter | TrafficSourceName
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ClickDataWhereInput = {
    AND?: Enumerable<ClickDataWhereInput>
    OR?: Enumerable<ClickDataWhereInput>
    NOT?: Enumerable<ClickDataWhereInput>
    id?: StringFilter | string
    trafficSource?: XOR<TrafficSourceRelationFilter, TrafficSourceWhereInput>
    trafficSourceId?: StringFilter | string
    date?: DateTimeFilter | Date | string
    campaignId?: IntFilter | number
    campaignName?: StringFilter | string
    adId?: IntNullableFilter | number | null
    device?: StringFilter | string
    country?: StringNullableFilter | string | null
    domainId?: IntFilter | number
    clicks?: IntFilter | number
    spend?: FloatFilter | number
    excludedClicks?: IntFilter | number
    conversions?: IntFilter | number
    ecpc?: FloatFilter | number
    ecpa?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ClickDataOrderByWithRelationInput = {
    id?: SortOrder
    trafficSource?: TrafficSourceOrderByWithRelationInput
    trafficSourceId?: SortOrder
    date?: SortOrder
    campaignId?: SortOrder
    campaignName?: SortOrder
    adId?: SortOrder
    device?: SortOrder
    country?: SortOrder
    domainId?: SortOrder
    clicks?: SortOrder
    spend?: SortOrder
    excludedClicks?: SortOrder
    conversions?: SortOrder
    ecpc?: SortOrder
    ecpa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClickDataWhereUniqueInput = {
    id?: string
  }

  export type ClickDataOrderByWithAggregationInput = {
    id?: SortOrder
    trafficSourceId?: SortOrder
    date?: SortOrder
    campaignId?: SortOrder
    campaignName?: SortOrder
    adId?: SortOrder
    device?: SortOrder
    country?: SortOrder
    domainId?: SortOrder
    clicks?: SortOrder
    spend?: SortOrder
    excludedClicks?: SortOrder
    conversions?: SortOrder
    ecpc?: SortOrder
    ecpa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClickDataCountOrderByAggregateInput
    _avg?: ClickDataAvgOrderByAggregateInput
    _max?: ClickDataMaxOrderByAggregateInput
    _min?: ClickDataMinOrderByAggregateInput
    _sum?: ClickDataSumOrderByAggregateInput
  }

  export type ClickDataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClickDataScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClickDataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClickDataScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    trafficSourceId?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    campaignId?: IntWithAggregatesFilter | number
    campaignName?: StringWithAggregatesFilter | string
    adId?: IntNullableWithAggregatesFilter | number | null
    device?: StringWithAggregatesFilter | string
    country?: StringNullableWithAggregatesFilter | string | null
    domainId?: IntWithAggregatesFilter | number
    clicks?: IntWithAggregatesFilter | number
    spend?: FloatWithAggregatesFilter | number
    excludedClicks?: IntWithAggregatesFilter | number
    conversions?: IntWithAggregatesFilter | number
    ecpc?: FloatWithAggregatesFilter | number
    ecpa?: FloatWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FunnelAccountWhereInput = {
    AND?: Enumerable<FunnelAccountWhereInput>
    OR?: Enumerable<FunnelAccountWhereInput>
    NOT?: Enumerable<FunnelAccountWhereInput>
    id?: StringFilter | string
    type?: EnumAccountTypeFilter | AccountType
    name?: StringFilter | string
    domains?: DomainListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Funnel?: XOR<FunnelRelationFilter, FunnelWhereInput> | null
    funnelId?: StringNullableFilter | string | null
  }

  export type FunnelAccountOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    domains?: DomainOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Funnel?: FunnelOrderByWithRelationInput
    funnelId?: SortOrder
  }

  export type FunnelAccountWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type FunnelAccountOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    funnelId?: SortOrder
    _count?: FunnelAccountCountOrderByAggregateInput
    _max?: FunnelAccountMaxOrderByAggregateInput
    _min?: FunnelAccountMinOrderByAggregateInput
  }

  export type FunnelAccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FunnelAccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<FunnelAccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FunnelAccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    type?: EnumAccountTypeWithAggregatesFilter | AccountType
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    funnelId?: StringNullableWithAggregatesFilter | string | null
  }

  export type DomainWhereInput = {
    AND?: Enumerable<DomainWhereInput>
    OR?: Enumerable<DomainWhereInput>
    NOT?: Enumerable<DomainWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    state?: StringFilter | string
    creationDate?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    FunnelAccount?: XOR<FunnelAccountRelationFilter, FunnelAccountWhereInput> | null
    funnelAccountId?: StringNullableFilter | string | null
  }

  export type DomainOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    creationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FunnelAccount?: FunnelAccountOrderByWithRelationInput
    funnelAccountId?: SortOrder
  }

  export type DomainWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type DomainOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    creationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    funnelAccountId?: SortOrder
    _count?: DomainCountOrderByAggregateInput
    _max?: DomainMaxOrderByAggregateInput
    _min?: DomainMinOrderByAggregateInput
  }

  export type DomainScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DomainScalarWhereWithAggregatesInput>
    OR?: Enumerable<DomainScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DomainScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    creationDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    funnelAccountId?: StringNullableWithAggregatesFilter | string | null
  }

  export type FunnelWhereInput = {
    AND?: Enumerable<FunnelWhereInput>
    OR?: Enumerable<FunnelWhereInput>
    NOT?: Enumerable<FunnelWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    order?: IntNullableFilter | number | null
    trafficFirstSeen?: DateTimeNullableFilter | Date | string | null
    cards?: IntNullableListFilter
    browserProfile?: StringFilter | string
    linkedAccounts?: FunnelAccountListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type FunnelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    trafficFirstSeen?: SortOrder
    cards?: SortOrder
    browserProfile?: SortOrder
    linkedAccounts?: FunnelAccountOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FunnelWhereUniqueInput = {
    id?: string
    order?: number
    cards?: Enumerable<number>
    browserProfile?: string
  }

  export type FunnelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    trafficFirstSeen?: SortOrder
    cards?: SortOrder
    browserProfile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FunnelCountOrderByAggregateInput
    _avg?: FunnelAvgOrderByAggregateInput
    _max?: FunnelMaxOrderByAggregateInput
    _min?: FunnelMinOrderByAggregateInput
    _sum?: FunnelSumOrderByAggregateInput
  }

  export type FunnelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FunnelScalarWhereWithAggregatesInput>
    OR?: Enumerable<FunnelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FunnelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    order?: IntNullableWithAggregatesFilter | number | null
    trafficFirstSeen?: DateTimeNullableWithAggregatesFilter | Date | string | null
    cards?: IntNullableListFilter
    browserProfile?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TrafficSourceCreateInput = {
    id?: string
    name: TrafficSourceName
    createdAt?: Date | string
    updatedAt?: Date | string
    clickData?: ClickDataCreateNestedManyWithoutTrafficSourceInput
  }

  export type TrafficSourceUncheckedCreateInput = {
    id?: string
    name: TrafficSourceName
    createdAt?: Date | string
    updatedAt?: Date | string
    clickData?: ClickDataUncheckedCreateNestedManyWithoutTrafficSourceInput
  }

  export type TrafficSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumTrafficSourceNameFieldUpdateOperationsInput | TrafficSourceName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clickData?: ClickDataUpdateManyWithoutTrafficSourceInput
  }

  export type TrafficSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumTrafficSourceNameFieldUpdateOperationsInput | TrafficSourceName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clickData?: ClickDataUncheckedUpdateManyWithoutTrafficSourceInput
  }

  export type TrafficSourceCreateManyInput = {
    id?: string
    name: TrafficSourceName
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumTrafficSourceNameFieldUpdateOperationsInput | TrafficSourceName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumTrafficSourceNameFieldUpdateOperationsInput | TrafficSourceName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickDataCreateInput = {
    id?: string
    date: Date | string
    campaignId: number
    campaignName: string
    adId?: number | null
    device: string
    country?: string | null
    domainId: number
    clicks: number
    spend: number
    excludedClicks: number
    conversions: number
    ecpc: number
    ecpa: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trafficSource: TrafficSourceCreateNestedOneWithoutClickDataInput
  }

  export type ClickDataUncheckedCreateInput = {
    id?: string
    trafficSourceId: string
    date: Date | string
    campaignId: number
    campaignName: string
    adId?: number | null
    device: string
    country?: string | null
    domainId: number
    clicks: number
    spend: number
    excludedClicks: number
    conversions: number
    ecpc: number
    ecpa: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClickDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    adId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    spend?: FloatFieldUpdateOperationsInput | number
    excludedClicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ecpc?: FloatFieldUpdateOperationsInput | number
    ecpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trafficSource?: TrafficSourceUpdateOneRequiredWithoutClickDataInput
  }

  export type ClickDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trafficSourceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    adId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    spend?: FloatFieldUpdateOperationsInput | number
    excludedClicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ecpc?: FloatFieldUpdateOperationsInput | number
    ecpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickDataCreateManyInput = {
    id?: string
    trafficSourceId: string
    date: Date | string
    campaignId: number
    campaignName: string
    adId?: number | null
    device: string
    country?: string | null
    domainId: number
    clicks: number
    spend: number
    excludedClicks: number
    conversions: number
    ecpc: number
    ecpa: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClickDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    adId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    spend?: FloatFieldUpdateOperationsInput | number
    excludedClicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ecpc?: FloatFieldUpdateOperationsInput | number
    ecpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trafficSourceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    adId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    spend?: FloatFieldUpdateOperationsInput | number
    excludedClicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ecpc?: FloatFieldUpdateOperationsInput | number
    ecpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FunnelAccountCreateInput = {
    id?: string
    type: AccountType
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: DomainCreateNestedManyWithoutFunnelAccountInput
    Funnel?: FunnelCreateNestedOneWithoutLinkedAccountsInput
  }

  export type FunnelAccountUncheckedCreateInput = {
    id?: string
    type: AccountType
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    funnelId?: string | null
    domains?: DomainUncheckedCreateNestedManyWithoutFunnelAccountInput
  }

  export type FunnelAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | AccountType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUpdateManyWithoutFunnelAccountInput
    Funnel?: FunnelUpdateOneWithoutLinkedAccountsInput
  }

  export type FunnelAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | AccountType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelId?: NullableStringFieldUpdateOperationsInput | string | null
    domains?: DomainUncheckedUpdateManyWithoutFunnelAccountInput
  }

  export type FunnelAccountCreateManyInput = {
    id?: string
    type: AccountType
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    funnelId?: string | null
  }

  export type FunnelAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | AccountType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FunnelAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | AccountType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DomainCreateInput = {
    id?: string
    name: string
    state: string
    creationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FunnelAccount?: FunnelAccountCreateNestedOneWithoutDomainsInput
  }

  export type DomainUncheckedCreateInput = {
    id?: string
    name: string
    state: string
    creationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    funnelAccountId?: string | null
  }

  export type DomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FunnelAccount?: FunnelAccountUpdateOneWithoutDomainsInput
  }

  export type DomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DomainCreateManyInput = {
    id?: string
    name: string
    state: string
    creationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    funnelAccountId?: string | null
  }

  export type DomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FunnelCreateInput = {
    id?: string
    name: string
    order?: number | null
    trafficFirstSeen?: Date | string | null
    browserProfile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: FunnelCreatecardsInput | Enumerable<number>
    linkedAccounts?: FunnelAccountCreateNestedManyWithoutFunnelInput
  }

  export type FunnelUncheckedCreateInput = {
    id?: string
    name: string
    order?: number | null
    trafficFirstSeen?: Date | string | null
    browserProfile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: FunnelCreatecardsInput | Enumerable<number>
    linkedAccounts?: FunnelAccountUncheckedCreateNestedManyWithoutFunnelInput
  }

  export type FunnelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    trafficFirstSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: FunnelUpdatecardsInput | Enumerable<number>
    linkedAccounts?: FunnelAccountUpdateManyWithoutFunnelInput
  }

  export type FunnelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    trafficFirstSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: FunnelUpdatecardsInput | Enumerable<number>
    linkedAccounts?: FunnelAccountUncheckedUpdateManyWithoutFunnelInput
  }

  export type FunnelCreateManyInput = {
    id?: string
    name: string
    order?: number | null
    trafficFirstSeen?: Date | string | null
    browserProfile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: FunnelCreateManycardsInput | Enumerable<number>
  }

  export type FunnelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    trafficFirstSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: FunnelUpdatecardsInput | Enumerable<number>
  }

  export type FunnelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    trafficFirstSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: FunnelUpdatecardsInput | Enumerable<number>
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumTrafficSourceNameFilter = {
    equals?: TrafficSourceName
    in?: Enumerable<TrafficSourceName>
    notIn?: Enumerable<TrafficSourceName>
    not?: NestedEnumTrafficSourceNameFilter | TrafficSourceName
  }

  export type ClickDataListRelationFilter = {
    every?: ClickDataWhereInput
    some?: ClickDataWhereInput
    none?: ClickDataWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ClickDataOrderByRelationAggregateInput = {
    _count?: SortOrder
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: SortOrder
  }

  export type TrafficSourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrafficSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrafficSourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type EnumTrafficSourceNameWithAggregatesFilter = {
    equals?: TrafficSourceName
    in?: Enumerable<TrafficSourceName>
    notIn?: Enumerable<TrafficSourceName>
    not?: NestedEnumTrafficSourceNameWithAggregatesFilter | TrafficSourceName
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumTrafficSourceNameFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumTrafficSourceNameFilter
    _max?: NestedEnumTrafficSourceNameFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumTrafficSourceNameFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type TrafficSourceRelationFilter = {
    is?: TrafficSourceWhereInput
    isNot?: TrafficSourceWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ClickDataCountOrderByAggregateInput = {
    id?: SortOrder
    trafficSourceId?: SortOrder
    date?: SortOrder
    campaignId?: SortOrder
    campaignName?: SortOrder
    adId?: SortOrder
    device?: SortOrder
    country?: SortOrder
    domainId?: SortOrder
    clicks?: SortOrder
    spend?: SortOrder
    excludedClicks?: SortOrder
    conversions?: SortOrder
    ecpc?: SortOrder
    ecpa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClickDataAvgOrderByAggregateInput = {
    campaignId?: SortOrder
    adId?: SortOrder
    domainId?: SortOrder
    clicks?: SortOrder
    spend?: SortOrder
    excludedClicks?: SortOrder
    conversions?: SortOrder
    ecpc?: SortOrder
    ecpa?: SortOrder
  }

  export type ClickDataMaxOrderByAggregateInput = {
    id?: SortOrder
    trafficSourceId?: SortOrder
    date?: SortOrder
    campaignId?: SortOrder
    campaignName?: SortOrder
    adId?: SortOrder
    device?: SortOrder
    country?: SortOrder
    domainId?: SortOrder
    clicks?: SortOrder
    spend?: SortOrder
    excludedClicks?: SortOrder
    conversions?: SortOrder
    ecpc?: SortOrder
    ecpa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClickDataMinOrderByAggregateInput = {
    id?: SortOrder
    trafficSourceId?: SortOrder
    date?: SortOrder
    campaignId?: SortOrder
    campaignName?: SortOrder
    adId?: SortOrder
    device?: SortOrder
    country?: SortOrder
    domainId?: SortOrder
    clicks?: SortOrder
    spend?: SortOrder
    excludedClicks?: SortOrder
    conversions?: SortOrder
    ecpc?: SortOrder
    ecpa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClickDataSumOrderByAggregateInput = {
    campaignId?: SortOrder
    adId?: SortOrder
    domainId?: SortOrder
    clicks?: SortOrder
    spend?: SortOrder
    excludedClicks?: SortOrder
    conversions?: SortOrder
    ecpc?: SortOrder
    ecpa?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedFloatFilter
    _max?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedFloatFilter
  }

  export type EnumAccountTypeFilter = {
    equals?: AccountType
    in?: Enumerable<AccountType>
    notIn?: Enumerable<AccountType>
    not?: NestedEnumAccountTypeFilter | AccountType
  }

  export type DomainListRelationFilter = {
    every?: DomainWhereInput
    some?: DomainWhereInput
    none?: DomainWhereInput
  }

  export type FunnelRelationFilter = {
    is?: FunnelWhereInput | null
    isNot?: FunnelWhereInput | null
  }

  export type DomainOrderByRelationAggregateInput = {
    _count?: SortOrder
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: SortOrder
  }

  export type FunnelAccountCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    funnelId?: SortOrder
  }

  export type FunnelAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    funnelId?: SortOrder
  }

  export type FunnelAccountMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    funnelId?: SortOrder
  }

  export type EnumAccountTypeWithAggregatesFilter = {
    equals?: AccountType
    in?: Enumerable<AccountType>
    notIn?: Enumerable<AccountType>
    not?: NestedEnumAccountTypeWithAggregatesFilter | AccountType
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumAccountTypeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumAccountTypeFilter
    _max?: NestedEnumAccountTypeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumAccountTypeFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type FunnelAccountRelationFilter = {
    is?: FunnelAccountWhereInput | null
    isNot?: FunnelAccountWhereInput | null
  }

  export type DomainCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    creationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    funnelAccountId?: SortOrder
  }

  export type DomainMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    creationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    funnelAccountId?: SortOrder
  }

  export type DomainMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    creationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    funnelAccountId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type IntNullableListFilter = {
    equals?: Enumerable<number> | null
    has?: number | null
    hasEvery?: Enumerable<number>
    hasSome?: Enumerable<number>
    isEmpty?: boolean
  }

  export type FunnelAccountListRelationFilter = {
    every?: FunnelAccountWhereInput
    some?: FunnelAccountWhereInput
    none?: FunnelAccountWhereInput
  }

  export type FunnelAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: SortOrder
  }

  export type FunnelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    trafficFirstSeen?: SortOrder
    cards?: SortOrder
    browserProfile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FunnelAvgOrderByAggregateInput = {
    order?: SortOrder
    cards?: SortOrder
  }

  export type FunnelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    trafficFirstSeen?: SortOrder
    browserProfile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FunnelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    trafficFirstSeen?: SortOrder
    browserProfile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FunnelSumOrderByAggregateInput = {
    order?: SortOrder
    cards?: SortOrder
  }

  export type ClickDataCreateNestedManyWithoutTrafficSourceInput = {
    create?: XOR<Enumerable<ClickDataCreateWithoutTrafficSourceInput>, Enumerable<ClickDataUncheckedCreateWithoutTrafficSourceInput>>
    connectOrCreate?: Enumerable<ClickDataCreateOrConnectWithoutTrafficSourceInput>
    createMany?: ClickDataCreateManyTrafficSourceInputEnvelope
    connect?: Enumerable<ClickDataWhereUniqueInput>
  }

  export type ClickDataUncheckedCreateNestedManyWithoutTrafficSourceInput = {
    create?: XOR<Enumerable<ClickDataCreateWithoutTrafficSourceInput>, Enumerable<ClickDataUncheckedCreateWithoutTrafficSourceInput>>
    connectOrCreate?: Enumerable<ClickDataCreateOrConnectWithoutTrafficSourceInput>
    createMany?: ClickDataCreateManyTrafficSourceInputEnvelope
    connect?: Enumerable<ClickDataWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTrafficSourceNameFieldUpdateOperationsInput = {
    set?: TrafficSourceName
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClickDataUpdateManyWithoutTrafficSourceInput = {
    create?: XOR<Enumerable<ClickDataCreateWithoutTrafficSourceInput>, Enumerable<ClickDataUncheckedCreateWithoutTrafficSourceInput>>
    connectOrCreate?: Enumerable<ClickDataCreateOrConnectWithoutTrafficSourceInput>
    upsert?: Enumerable<ClickDataUpsertWithWhereUniqueWithoutTrafficSourceInput>
    createMany?: ClickDataCreateManyTrafficSourceInputEnvelope
    connect?: Enumerable<ClickDataWhereUniqueInput>
    set?: Enumerable<ClickDataWhereUniqueInput>
    disconnect?: Enumerable<ClickDataWhereUniqueInput>
    delete?: Enumerable<ClickDataWhereUniqueInput>
    update?: Enumerable<ClickDataUpdateWithWhereUniqueWithoutTrafficSourceInput>
    updateMany?: Enumerable<ClickDataUpdateManyWithWhereWithoutTrafficSourceInput>
    deleteMany?: Enumerable<ClickDataScalarWhereInput>
  }

  export type ClickDataUncheckedUpdateManyWithoutTrafficSourceInput = {
    create?: XOR<Enumerable<ClickDataCreateWithoutTrafficSourceInput>, Enumerable<ClickDataUncheckedCreateWithoutTrafficSourceInput>>
    connectOrCreate?: Enumerable<ClickDataCreateOrConnectWithoutTrafficSourceInput>
    upsert?: Enumerable<ClickDataUpsertWithWhereUniqueWithoutTrafficSourceInput>
    createMany?: ClickDataCreateManyTrafficSourceInputEnvelope
    connect?: Enumerable<ClickDataWhereUniqueInput>
    set?: Enumerable<ClickDataWhereUniqueInput>
    disconnect?: Enumerable<ClickDataWhereUniqueInput>
    delete?: Enumerable<ClickDataWhereUniqueInput>
    update?: Enumerable<ClickDataUpdateWithWhereUniqueWithoutTrafficSourceInput>
    updateMany?: Enumerable<ClickDataUpdateManyWithWhereWithoutTrafficSourceInput>
    deleteMany?: Enumerable<ClickDataScalarWhereInput>
  }

  export type TrafficSourceCreateNestedOneWithoutClickDataInput = {
    create?: XOR<TrafficSourceCreateWithoutClickDataInput, TrafficSourceUncheckedCreateWithoutClickDataInput>
    connectOrCreate?: TrafficSourceCreateOrConnectWithoutClickDataInput
    connect?: TrafficSourceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrafficSourceUpdateOneRequiredWithoutClickDataInput = {
    create?: XOR<TrafficSourceCreateWithoutClickDataInput, TrafficSourceUncheckedCreateWithoutClickDataInput>
    connectOrCreate?: TrafficSourceCreateOrConnectWithoutClickDataInput
    upsert?: TrafficSourceUpsertWithoutClickDataInput
    connect?: TrafficSourceWhereUniqueInput
    update?: XOR<TrafficSourceUpdateWithoutClickDataInput, TrafficSourceUncheckedUpdateWithoutClickDataInput>
  }

  export type DomainCreateNestedManyWithoutFunnelAccountInput = {
    create?: XOR<Enumerable<DomainCreateWithoutFunnelAccountInput>, Enumerable<DomainUncheckedCreateWithoutFunnelAccountInput>>
    connectOrCreate?: Enumerable<DomainCreateOrConnectWithoutFunnelAccountInput>
    createMany?: DomainCreateManyFunnelAccountInputEnvelope
    connect?: Enumerable<DomainWhereUniqueInput>
  }

  export type FunnelCreateNestedOneWithoutLinkedAccountsInput = {
    create?: XOR<FunnelCreateWithoutLinkedAccountsInput, FunnelUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: FunnelCreateOrConnectWithoutLinkedAccountsInput
    connect?: FunnelWhereUniqueInput
  }

  export type DomainUncheckedCreateNestedManyWithoutFunnelAccountInput = {
    create?: XOR<Enumerable<DomainCreateWithoutFunnelAccountInput>, Enumerable<DomainUncheckedCreateWithoutFunnelAccountInput>>
    connectOrCreate?: Enumerable<DomainCreateOrConnectWithoutFunnelAccountInput>
    createMany?: DomainCreateManyFunnelAccountInputEnvelope
    connect?: Enumerable<DomainWhereUniqueInput>
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: AccountType
  }

  export type DomainUpdateManyWithoutFunnelAccountInput = {
    create?: XOR<Enumerable<DomainCreateWithoutFunnelAccountInput>, Enumerable<DomainUncheckedCreateWithoutFunnelAccountInput>>
    connectOrCreate?: Enumerable<DomainCreateOrConnectWithoutFunnelAccountInput>
    upsert?: Enumerable<DomainUpsertWithWhereUniqueWithoutFunnelAccountInput>
    createMany?: DomainCreateManyFunnelAccountInputEnvelope
    connect?: Enumerable<DomainWhereUniqueInput>
    set?: Enumerable<DomainWhereUniqueInput>
    disconnect?: Enumerable<DomainWhereUniqueInput>
    delete?: Enumerable<DomainWhereUniqueInput>
    update?: Enumerable<DomainUpdateWithWhereUniqueWithoutFunnelAccountInput>
    updateMany?: Enumerable<DomainUpdateManyWithWhereWithoutFunnelAccountInput>
    deleteMany?: Enumerable<DomainScalarWhereInput>
  }

  export type FunnelUpdateOneWithoutLinkedAccountsInput = {
    create?: XOR<FunnelCreateWithoutLinkedAccountsInput, FunnelUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: FunnelCreateOrConnectWithoutLinkedAccountsInput
    upsert?: FunnelUpsertWithoutLinkedAccountsInput
    connect?: FunnelWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<FunnelUpdateWithoutLinkedAccountsInput, FunnelUncheckedUpdateWithoutLinkedAccountsInput>
  }

  export type DomainUncheckedUpdateManyWithoutFunnelAccountInput = {
    create?: XOR<Enumerable<DomainCreateWithoutFunnelAccountInput>, Enumerable<DomainUncheckedCreateWithoutFunnelAccountInput>>
    connectOrCreate?: Enumerable<DomainCreateOrConnectWithoutFunnelAccountInput>
    upsert?: Enumerable<DomainUpsertWithWhereUniqueWithoutFunnelAccountInput>
    createMany?: DomainCreateManyFunnelAccountInputEnvelope
    connect?: Enumerable<DomainWhereUniqueInput>
    set?: Enumerable<DomainWhereUniqueInput>
    disconnect?: Enumerable<DomainWhereUniqueInput>
    delete?: Enumerable<DomainWhereUniqueInput>
    update?: Enumerable<DomainUpdateWithWhereUniqueWithoutFunnelAccountInput>
    updateMany?: Enumerable<DomainUpdateManyWithWhereWithoutFunnelAccountInput>
    deleteMany?: Enumerable<DomainScalarWhereInput>
  }

  export type FunnelAccountCreateNestedOneWithoutDomainsInput = {
    create?: XOR<FunnelAccountCreateWithoutDomainsInput, FunnelAccountUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: FunnelAccountCreateOrConnectWithoutDomainsInput
    connect?: FunnelAccountWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FunnelAccountUpdateOneWithoutDomainsInput = {
    create?: XOR<FunnelAccountCreateWithoutDomainsInput, FunnelAccountUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: FunnelAccountCreateOrConnectWithoutDomainsInput
    upsert?: FunnelAccountUpsertWithoutDomainsInput
    connect?: FunnelAccountWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<FunnelAccountUpdateWithoutDomainsInput, FunnelAccountUncheckedUpdateWithoutDomainsInput>
  }

  export type FunnelCreatecardsInput = {
    set: Enumerable<number>
  }

  export type FunnelAccountCreateNestedManyWithoutFunnelInput = {
    create?: XOR<Enumerable<FunnelAccountCreateWithoutFunnelInput>, Enumerable<FunnelAccountUncheckedCreateWithoutFunnelInput>>
    connectOrCreate?: Enumerable<FunnelAccountCreateOrConnectWithoutFunnelInput>
    createMany?: FunnelAccountCreateManyFunnelInputEnvelope
    connect?: Enumerable<FunnelAccountWhereUniqueInput>
  }

  export type FunnelAccountUncheckedCreateNestedManyWithoutFunnelInput = {
    create?: XOR<Enumerable<FunnelAccountCreateWithoutFunnelInput>, Enumerable<FunnelAccountUncheckedCreateWithoutFunnelInput>>
    connectOrCreate?: Enumerable<FunnelAccountCreateOrConnectWithoutFunnelInput>
    createMany?: FunnelAccountCreateManyFunnelInputEnvelope
    connect?: Enumerable<FunnelAccountWhereUniqueInput>
  }

  export type FunnelUpdatecardsInput = {
    set?: Enumerable<number>
    push?: number | Enumerable<number>
  }

  export type FunnelAccountUpdateManyWithoutFunnelInput = {
    create?: XOR<Enumerable<FunnelAccountCreateWithoutFunnelInput>, Enumerable<FunnelAccountUncheckedCreateWithoutFunnelInput>>
    connectOrCreate?: Enumerable<FunnelAccountCreateOrConnectWithoutFunnelInput>
    upsert?: Enumerable<FunnelAccountUpsertWithWhereUniqueWithoutFunnelInput>
    createMany?: FunnelAccountCreateManyFunnelInputEnvelope
    connect?: Enumerable<FunnelAccountWhereUniqueInput>
    set?: Enumerable<FunnelAccountWhereUniqueInput>
    disconnect?: Enumerable<FunnelAccountWhereUniqueInput>
    delete?: Enumerable<FunnelAccountWhereUniqueInput>
    update?: Enumerable<FunnelAccountUpdateWithWhereUniqueWithoutFunnelInput>
    updateMany?: Enumerable<FunnelAccountUpdateManyWithWhereWithoutFunnelInput>
    deleteMany?: Enumerable<FunnelAccountScalarWhereInput>
  }

  export type FunnelAccountUncheckedUpdateManyWithoutFunnelInput = {
    create?: XOR<Enumerable<FunnelAccountCreateWithoutFunnelInput>, Enumerable<FunnelAccountUncheckedCreateWithoutFunnelInput>>
    connectOrCreate?: Enumerable<FunnelAccountCreateOrConnectWithoutFunnelInput>
    upsert?: Enumerable<FunnelAccountUpsertWithWhereUniqueWithoutFunnelInput>
    createMany?: FunnelAccountCreateManyFunnelInputEnvelope
    connect?: Enumerable<FunnelAccountWhereUniqueInput>
    set?: Enumerable<FunnelAccountWhereUniqueInput>
    disconnect?: Enumerable<FunnelAccountWhereUniqueInput>
    delete?: Enumerable<FunnelAccountWhereUniqueInput>
    update?: Enumerable<FunnelAccountUpdateWithWhereUniqueWithoutFunnelInput>
    updateMany?: Enumerable<FunnelAccountUpdateManyWithWhereWithoutFunnelInput>
    deleteMany?: Enumerable<FunnelAccountScalarWhereInput>
  }

  export type FunnelCreateManycardsInput = {
    set: Enumerable<number>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumTrafficSourceNameFilter = {
    equals?: TrafficSourceName
    in?: Enumerable<TrafficSourceName>
    notIn?: Enumerable<TrafficSourceName>
    not?: NestedEnumTrafficSourceNameFilter | TrafficSourceName
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumTrafficSourceNameWithAggregatesFilter = {
    equals?: TrafficSourceName
    in?: Enumerable<TrafficSourceName>
    notIn?: Enumerable<TrafficSourceName>
    not?: NestedEnumTrafficSourceNameWithAggregatesFilter | TrafficSourceName
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumTrafficSourceNameFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumTrafficSourceNameFilter
    _max?: NestedEnumTrafficSourceNameFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumTrafficSourceNameFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedFloatFilter
    _max?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedFloatFilter
  }

  export type NestedEnumAccountTypeFilter = {
    equals?: AccountType
    in?: Enumerable<AccountType>
    notIn?: Enumerable<AccountType>
    not?: NestedEnumAccountTypeFilter | AccountType
  }

  export type NestedEnumAccountTypeWithAggregatesFilter = {
    equals?: AccountType
    in?: Enumerable<AccountType>
    notIn?: Enumerable<AccountType>
    not?: NestedEnumAccountTypeWithAggregatesFilter | AccountType
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumAccountTypeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumAccountTypeFilter
    _max?: NestedEnumAccountTypeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumAccountTypeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type ClickDataCreateWithoutTrafficSourceInput = {
    id?: string
    date: Date | string
    campaignId: number
    campaignName: string
    adId?: number | null
    device: string
    country?: string | null
    domainId: number
    clicks: number
    spend: number
    excludedClicks: number
    conversions: number
    ecpc: number
    ecpa: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClickDataUncheckedCreateWithoutTrafficSourceInput = {
    id?: string
    date: Date | string
    campaignId: number
    campaignName: string
    adId?: number | null
    device: string
    country?: string | null
    domainId: number
    clicks: number
    spend: number
    excludedClicks: number
    conversions: number
    ecpc: number
    ecpa: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClickDataCreateOrConnectWithoutTrafficSourceInput = {
    where: ClickDataWhereUniqueInput
    create: XOR<ClickDataCreateWithoutTrafficSourceInput, ClickDataUncheckedCreateWithoutTrafficSourceInput>
  }

  export type ClickDataCreateManyTrafficSourceInputEnvelope = {
    data: Enumerable<ClickDataCreateManyTrafficSourceInput>
    skipDuplicates?: boolean
  }

  export type ClickDataUpsertWithWhereUniqueWithoutTrafficSourceInput = {
    where: ClickDataWhereUniqueInput
    update: XOR<ClickDataUpdateWithoutTrafficSourceInput, ClickDataUncheckedUpdateWithoutTrafficSourceInput>
    create: XOR<ClickDataCreateWithoutTrafficSourceInput, ClickDataUncheckedCreateWithoutTrafficSourceInput>
  }

  export type ClickDataUpdateWithWhereUniqueWithoutTrafficSourceInput = {
    where: ClickDataWhereUniqueInput
    data: XOR<ClickDataUpdateWithoutTrafficSourceInput, ClickDataUncheckedUpdateWithoutTrafficSourceInput>
  }

  export type ClickDataUpdateManyWithWhereWithoutTrafficSourceInput = {
    where: ClickDataScalarWhereInput
    data: XOR<ClickDataUpdateManyMutationInput, ClickDataUncheckedUpdateManyWithoutClickDataInput>
  }

  export type ClickDataScalarWhereInput = {
    AND?: Enumerable<ClickDataScalarWhereInput>
    OR?: Enumerable<ClickDataScalarWhereInput>
    NOT?: Enumerable<ClickDataScalarWhereInput>
    id?: StringFilter | string
    trafficSourceId?: StringFilter | string
    date?: DateTimeFilter | Date | string
    campaignId?: IntFilter | number
    campaignName?: StringFilter | string
    adId?: IntNullableFilter | number | null
    device?: StringFilter | string
    country?: StringNullableFilter | string | null
    domainId?: IntFilter | number
    clicks?: IntFilter | number
    spend?: FloatFilter | number
    excludedClicks?: IntFilter | number
    conversions?: IntFilter | number
    ecpc?: FloatFilter | number
    ecpa?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TrafficSourceCreateWithoutClickDataInput = {
    id?: string
    name: TrafficSourceName
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficSourceUncheckedCreateWithoutClickDataInput = {
    id?: string
    name: TrafficSourceName
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrafficSourceCreateOrConnectWithoutClickDataInput = {
    where: TrafficSourceWhereUniqueInput
    create: XOR<TrafficSourceCreateWithoutClickDataInput, TrafficSourceUncheckedCreateWithoutClickDataInput>
  }

  export type TrafficSourceUpsertWithoutClickDataInput = {
    update: XOR<TrafficSourceUpdateWithoutClickDataInput, TrafficSourceUncheckedUpdateWithoutClickDataInput>
    create: XOR<TrafficSourceCreateWithoutClickDataInput, TrafficSourceUncheckedCreateWithoutClickDataInput>
  }

  export type TrafficSourceUpdateWithoutClickDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumTrafficSourceNameFieldUpdateOperationsInput | TrafficSourceName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrafficSourceUncheckedUpdateWithoutClickDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumTrafficSourceNameFieldUpdateOperationsInput | TrafficSourceName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateWithoutFunnelAccountInput = {
    id?: string
    name: string
    state: string
    creationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainUncheckedCreateWithoutFunnelAccountInput = {
    id?: string
    name: string
    state: string
    creationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainCreateOrConnectWithoutFunnelAccountInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutFunnelAccountInput, DomainUncheckedCreateWithoutFunnelAccountInput>
  }

  export type DomainCreateManyFunnelAccountInputEnvelope = {
    data: Enumerable<DomainCreateManyFunnelAccountInput>
    skipDuplicates?: boolean
  }

  export type FunnelCreateWithoutLinkedAccountsInput = {
    id?: string
    name: string
    order?: number | null
    trafficFirstSeen?: Date | string | null
    browserProfile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: FunnelCreatecardsInput | Enumerable<number>
  }

  export type FunnelUncheckedCreateWithoutLinkedAccountsInput = {
    id?: string
    name: string
    order?: number | null
    trafficFirstSeen?: Date | string | null
    browserProfile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: FunnelCreatecardsInput | Enumerable<number>
  }

  export type FunnelCreateOrConnectWithoutLinkedAccountsInput = {
    where: FunnelWhereUniqueInput
    create: XOR<FunnelCreateWithoutLinkedAccountsInput, FunnelUncheckedCreateWithoutLinkedAccountsInput>
  }

  export type DomainUpsertWithWhereUniqueWithoutFunnelAccountInput = {
    where: DomainWhereUniqueInput
    update: XOR<DomainUpdateWithoutFunnelAccountInput, DomainUncheckedUpdateWithoutFunnelAccountInput>
    create: XOR<DomainCreateWithoutFunnelAccountInput, DomainUncheckedCreateWithoutFunnelAccountInput>
  }

  export type DomainUpdateWithWhereUniqueWithoutFunnelAccountInput = {
    where: DomainWhereUniqueInput
    data: XOR<DomainUpdateWithoutFunnelAccountInput, DomainUncheckedUpdateWithoutFunnelAccountInput>
  }

  export type DomainUpdateManyWithWhereWithoutFunnelAccountInput = {
    where: DomainScalarWhereInput
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyWithoutDomainsInput>
  }

  export type DomainScalarWhereInput = {
    AND?: Enumerable<DomainScalarWhereInput>
    OR?: Enumerable<DomainScalarWhereInput>
    NOT?: Enumerable<DomainScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    state?: StringFilter | string
    creationDate?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    funnelAccountId?: StringNullableFilter | string | null
  }

  export type FunnelUpsertWithoutLinkedAccountsInput = {
    update: XOR<FunnelUpdateWithoutLinkedAccountsInput, FunnelUncheckedUpdateWithoutLinkedAccountsInput>
    create: XOR<FunnelCreateWithoutLinkedAccountsInput, FunnelUncheckedCreateWithoutLinkedAccountsInput>
  }

  export type FunnelUpdateWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    trafficFirstSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: FunnelUpdatecardsInput | Enumerable<number>
  }

  export type FunnelUncheckedUpdateWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    trafficFirstSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: FunnelUpdatecardsInput | Enumerable<number>
  }

  export type FunnelAccountCreateWithoutDomainsInput = {
    id?: string
    type: AccountType
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Funnel?: FunnelCreateNestedOneWithoutLinkedAccountsInput
  }

  export type FunnelAccountUncheckedCreateWithoutDomainsInput = {
    id?: string
    type: AccountType
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    funnelId?: string | null
  }

  export type FunnelAccountCreateOrConnectWithoutDomainsInput = {
    where: FunnelAccountWhereUniqueInput
    create: XOR<FunnelAccountCreateWithoutDomainsInput, FunnelAccountUncheckedCreateWithoutDomainsInput>
  }

  export type FunnelAccountUpsertWithoutDomainsInput = {
    update: XOR<FunnelAccountUpdateWithoutDomainsInput, FunnelAccountUncheckedUpdateWithoutDomainsInput>
    create: XOR<FunnelAccountCreateWithoutDomainsInput, FunnelAccountUncheckedCreateWithoutDomainsInput>
  }

  export type FunnelAccountUpdateWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | AccountType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Funnel?: FunnelUpdateOneWithoutLinkedAccountsInput
  }

  export type FunnelAccountUncheckedUpdateWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | AccountType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FunnelAccountCreateWithoutFunnelInput = {
    id?: string
    type: AccountType
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: DomainCreateNestedManyWithoutFunnelAccountInput
  }

  export type FunnelAccountUncheckedCreateWithoutFunnelInput = {
    id?: string
    type: AccountType
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: DomainUncheckedCreateNestedManyWithoutFunnelAccountInput
  }

  export type FunnelAccountCreateOrConnectWithoutFunnelInput = {
    where: FunnelAccountWhereUniqueInput
    create: XOR<FunnelAccountCreateWithoutFunnelInput, FunnelAccountUncheckedCreateWithoutFunnelInput>
  }

  export type FunnelAccountCreateManyFunnelInputEnvelope = {
    data: Enumerable<FunnelAccountCreateManyFunnelInput>
    skipDuplicates?: boolean
  }

  export type FunnelAccountUpsertWithWhereUniqueWithoutFunnelInput = {
    where: FunnelAccountWhereUniqueInput
    update: XOR<FunnelAccountUpdateWithoutFunnelInput, FunnelAccountUncheckedUpdateWithoutFunnelInput>
    create: XOR<FunnelAccountCreateWithoutFunnelInput, FunnelAccountUncheckedCreateWithoutFunnelInput>
  }

  export type FunnelAccountUpdateWithWhereUniqueWithoutFunnelInput = {
    where: FunnelAccountWhereUniqueInput
    data: XOR<FunnelAccountUpdateWithoutFunnelInput, FunnelAccountUncheckedUpdateWithoutFunnelInput>
  }

  export type FunnelAccountUpdateManyWithWhereWithoutFunnelInput = {
    where: FunnelAccountScalarWhereInput
    data: XOR<FunnelAccountUpdateManyMutationInput, FunnelAccountUncheckedUpdateManyWithoutLinkedAccountsInput>
  }

  export type FunnelAccountScalarWhereInput = {
    AND?: Enumerable<FunnelAccountScalarWhereInput>
    OR?: Enumerable<FunnelAccountScalarWhereInput>
    NOT?: Enumerable<FunnelAccountScalarWhereInput>
    id?: StringFilter | string
    type?: EnumAccountTypeFilter | AccountType
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    funnelId?: StringNullableFilter | string | null
  }

  export type ClickDataCreateManyTrafficSourceInput = {
    id?: string
    date: Date | string
    campaignId: number
    campaignName: string
    adId?: number | null
    device: string
    country?: string | null
    domainId: number
    clicks: number
    spend: number
    excludedClicks: number
    conversions: number
    ecpc: number
    ecpa: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClickDataUpdateWithoutTrafficSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    adId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    spend?: FloatFieldUpdateOperationsInput | number
    excludedClicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ecpc?: FloatFieldUpdateOperationsInput | number
    ecpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickDataUncheckedUpdateWithoutTrafficSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    adId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    spend?: FloatFieldUpdateOperationsInput | number
    excludedClicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ecpc?: FloatFieldUpdateOperationsInput | number
    ecpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickDataUncheckedUpdateManyWithoutClickDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    adId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    spend?: FloatFieldUpdateOperationsInput | number
    excludedClicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ecpc?: FloatFieldUpdateOperationsInput | number
    ecpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateManyFunnelAccountInput = {
    id?: string
    name: string
    state: string
    creationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainUpdateWithoutFunnelAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUncheckedUpdateWithoutFunnelAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUncheckedUpdateManyWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FunnelAccountCreateManyFunnelInput = {
    id?: string
    type: AccountType
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FunnelAccountUpdateWithoutFunnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | AccountType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUpdateManyWithoutFunnelAccountInput
  }

  export type FunnelAccountUncheckedUpdateWithoutFunnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | AccountType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUncheckedUpdateManyWithoutFunnelAccountInput
  }

  export type FunnelAccountUncheckedUpdateManyWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | AccountType
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}