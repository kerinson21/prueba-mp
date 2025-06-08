
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Fiscal
 * 
 */
export type Fiscal = $Result.DefaultSelection<Prisma.$FiscalPayload>
/**
 * Model EstadoExpediente
 * 
 */
export type EstadoExpediente = $Result.DefaultSelection<Prisma.$EstadoExpedientePayload>
/**
 * Model Expediente
 * 
 */
export type Expediente = $Result.DefaultSelection<Prisma.$ExpedientePayload>
/**
 * Model MovimientoExpediente
 * 
 */
export type MovimientoExpediente = $Result.DefaultSelection<Prisma.$MovimientoExpedientePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Fiscals
 * const fiscals = await prisma.fiscal.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Fiscals
   * const fiscals = await prisma.fiscal.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.fiscal`: Exposes CRUD operations for the **Fiscal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fiscals
    * const fiscals = await prisma.fiscal.findMany()
    * ```
    */
  get fiscal(): Prisma.FiscalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estadoExpediente`: Exposes CRUD operations for the **EstadoExpediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstadoExpedientes
    * const estadoExpedientes = await prisma.estadoExpediente.findMany()
    * ```
    */
  get estadoExpediente(): Prisma.EstadoExpedienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expediente`: Exposes CRUD operations for the **Expediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expedientes
    * const expedientes = await prisma.expediente.findMany()
    * ```
    */
  get expediente(): Prisma.ExpedienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimientoExpediente`: Exposes CRUD operations for the **MovimientoExpediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimientoExpedientes
    * const movimientoExpedientes = await prisma.movimientoExpediente.findMany()
    * ```
    */
  get movimientoExpediente(): Prisma.MovimientoExpedienteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Fiscal: 'Fiscal',
    EstadoExpediente: 'EstadoExpediente',
    Expediente: 'Expediente',
    MovimientoExpediente: 'MovimientoExpediente'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fiscal" | "estadoExpediente" | "expediente" | "movimientoExpediente"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Fiscal: {
        payload: Prisma.$FiscalPayload<ExtArgs>
        fields: Prisma.FiscalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FiscalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FiscalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          findFirst: {
            args: Prisma.FiscalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FiscalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          findMany: {
            args: Prisma.FiscalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>[]
          }
          create: {
            args: Prisma.FiscalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          createMany: {
            args: Prisma.FiscalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FiscalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          update: {
            args: Prisma.FiscalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          deleteMany: {
            args: Prisma.FiscalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FiscalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FiscalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalPayload>
          }
          aggregate: {
            args: Prisma.FiscalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiscal>
          }
          groupBy: {
            args: Prisma.FiscalGroupByArgs<ExtArgs>
            result: $Utils.Optional<FiscalGroupByOutputType>[]
          }
          count: {
            args: Prisma.FiscalCountArgs<ExtArgs>
            result: $Utils.Optional<FiscalCountAggregateOutputType> | number
          }
        }
      }
      EstadoExpediente: {
        payload: Prisma.$EstadoExpedientePayload<ExtArgs>
        fields: Prisma.EstadoExpedienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoExpedienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoExpedientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoExpedienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoExpedientePayload>
          }
          findFirst: {
            args: Prisma.EstadoExpedienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoExpedientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoExpedienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoExpedientePayload>
          }
          findMany: {
            args: Prisma.EstadoExpedienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoExpedientePayload>[]
          }
          create: {
            args: Prisma.EstadoExpedienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoExpedientePayload>
          }
          createMany: {
            args: Prisma.EstadoExpedienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstadoExpedienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoExpedientePayload>
          }
          update: {
            args: Prisma.EstadoExpedienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoExpedientePayload>
          }
          deleteMany: {
            args: Prisma.EstadoExpedienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoExpedienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstadoExpedienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoExpedientePayload>
          }
          aggregate: {
            args: Prisma.EstadoExpedienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstadoExpediente>
          }
          groupBy: {
            args: Prisma.EstadoExpedienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoExpedienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoExpedienteCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoExpedienteCountAggregateOutputType> | number
          }
        }
      }
      Expediente: {
        payload: Prisma.$ExpedientePayload<ExtArgs>
        fields: Prisma.ExpedienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpedienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpedienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          findFirst: {
            args: Prisma.ExpedienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpedienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          findMany: {
            args: Prisma.ExpedienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>[]
          }
          create: {
            args: Prisma.ExpedienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          createMany: {
            args: Prisma.ExpedienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExpedienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          update: {
            args: Prisma.ExpedienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          deleteMany: {
            args: Prisma.ExpedienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpedienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpedienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedientePayload>
          }
          aggregate: {
            args: Prisma.ExpedienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpediente>
          }
          groupBy: {
            args: Prisma.ExpedienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpedienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpedienteCountArgs<ExtArgs>
            result: $Utils.Optional<ExpedienteCountAggregateOutputType> | number
          }
        }
      }
      MovimientoExpediente: {
        payload: Prisma.$MovimientoExpedientePayload<ExtArgs>
        fields: Prisma.MovimientoExpedienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimientoExpedienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoExpedientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimientoExpedienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoExpedientePayload>
          }
          findFirst: {
            args: Prisma.MovimientoExpedienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoExpedientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimientoExpedienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoExpedientePayload>
          }
          findMany: {
            args: Prisma.MovimientoExpedienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoExpedientePayload>[]
          }
          create: {
            args: Prisma.MovimientoExpedienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoExpedientePayload>
          }
          createMany: {
            args: Prisma.MovimientoExpedienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovimientoExpedienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoExpedientePayload>
          }
          update: {
            args: Prisma.MovimientoExpedienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoExpedientePayload>
          }
          deleteMany: {
            args: Prisma.MovimientoExpedienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimientoExpedienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovimientoExpedienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoExpedientePayload>
          }
          aggregate: {
            args: Prisma.MovimientoExpedienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimientoExpediente>
          }
          groupBy: {
            args: Prisma.MovimientoExpedienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimientoExpedienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimientoExpedienteCountArgs<ExtArgs>
            result: $Utils.Optional<MovimientoExpedienteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    fiscal?: FiscalOmit
    estadoExpediente?: EstadoExpedienteOmit
    expediente?: ExpedienteOmit
    movimientoExpediente?: MovimientoExpedienteOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FiscalCountOutputType
   */

  export type FiscalCountOutputType = {
    MovimientoExpediente: number
  }

  export type FiscalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MovimientoExpediente?: boolean | FiscalCountOutputTypeCountMovimientoExpedienteArgs
  }

  // Custom InputTypes
  /**
   * FiscalCountOutputType without action
   */
  export type FiscalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalCountOutputType
     */
    select?: FiscalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FiscalCountOutputType without action
   */
  export type FiscalCountOutputTypeCountMovimientoExpedienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoExpedienteWhereInput
  }


  /**
   * Count Type EstadoExpedienteCountOutputType
   */

  export type EstadoExpedienteCountOutputType = {
    Expediente: number
  }

  export type EstadoExpedienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Expediente?: boolean | EstadoExpedienteCountOutputTypeCountExpedienteArgs
  }

  // Custom InputTypes
  /**
   * EstadoExpedienteCountOutputType without action
   */
  export type EstadoExpedienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpedienteCountOutputType
     */
    select?: EstadoExpedienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoExpedienteCountOutputType without action
   */
  export type EstadoExpedienteCountOutputTypeCountExpedienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedienteWhereInput
  }


  /**
   * Count Type ExpedienteCountOutputType
   */

  export type ExpedienteCountOutputType = {
    movimientos: number
  }

  export type ExpedienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimientos?: boolean | ExpedienteCountOutputTypeCountMovimientosArgs
  }

  // Custom InputTypes
  /**
   * ExpedienteCountOutputType without action
   */
  export type ExpedienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedienteCountOutputType
     */
    select?: ExpedienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpedienteCountOutputType without action
   */
  export type ExpedienteCountOutputTypeCountMovimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoExpedienteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Fiscal
   */

  export type AggregateFiscal = {
    _count: FiscalCountAggregateOutputType | null
    _avg: FiscalAvgAggregateOutputType | null
    _sum: FiscalSumAggregateOutputType | null
    _min: FiscalMinAggregateOutputType | null
    _max: FiscalMaxAggregateOutputType | null
  }

  export type FiscalAvgAggregateOutputType = {
    id: number | null
  }

  export type FiscalSumAggregateOutputType = {
    id: number | null
  }

  export type FiscalMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
  }

  export type FiscalMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
  }

  export type FiscalCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    _all: number
  }


  export type FiscalAvgAggregateInputType = {
    id?: true
  }

  export type FiscalSumAggregateInputType = {
    id?: true
  }

  export type FiscalMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
  }

  export type FiscalMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
  }

  export type FiscalCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    _all?: true
  }

  export type FiscalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fiscal to aggregate.
     */
    where?: FiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fiscals to fetch.
     */
    orderBy?: FiscalOrderByWithRelationInput | FiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fiscals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fiscals
    **/
    _count?: true | FiscalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FiscalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FiscalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiscalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiscalMaxAggregateInputType
  }

  export type GetFiscalAggregateType<T extends FiscalAggregateArgs> = {
        [P in keyof T & keyof AggregateFiscal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiscal[P]>
      : GetScalarType<T[P], AggregateFiscal[P]>
  }




  export type FiscalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiscalWhereInput
    orderBy?: FiscalOrderByWithAggregationInput | FiscalOrderByWithAggregationInput[]
    by: FiscalScalarFieldEnum[] | FiscalScalarFieldEnum
    having?: FiscalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiscalCountAggregateInputType | true
    _avg?: FiscalAvgAggregateInputType
    _sum?: FiscalSumAggregateInputType
    _min?: FiscalMinAggregateInputType
    _max?: FiscalMaxAggregateInputType
  }

  export type FiscalGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password: string
    _count: FiscalCountAggregateOutputType | null
    _avg: FiscalAvgAggregateOutputType | null
    _sum: FiscalSumAggregateOutputType | null
    _min: FiscalMinAggregateOutputType | null
    _max: FiscalMaxAggregateOutputType | null
  }

  type GetFiscalGroupByPayload<T extends FiscalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiscalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiscalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiscalGroupByOutputType[P]>
            : GetScalarType<T[P], FiscalGroupByOutputType[P]>
        }
      >
    >


  export type FiscalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    MovimientoExpediente?: boolean | Fiscal$MovimientoExpedienteArgs<ExtArgs>
    _count?: boolean | FiscalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiscal"]>



  export type FiscalSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
  }

  export type FiscalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password", ExtArgs["result"]["fiscal"]>
  export type FiscalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MovimientoExpediente?: boolean | Fiscal$MovimientoExpedienteArgs<ExtArgs>
    _count?: boolean | FiscalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FiscalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fiscal"
    objects: {
      MovimientoExpediente: Prisma.$MovimientoExpedientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password: string
    }, ExtArgs["result"]["fiscal"]>
    composites: {}
  }

  type FiscalGetPayload<S extends boolean | null | undefined | FiscalDefaultArgs> = $Result.GetResult<Prisma.$FiscalPayload, S>

  type FiscalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FiscalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FiscalCountAggregateInputType | true
    }

  export interface FiscalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fiscal'], meta: { name: 'Fiscal' } }
    /**
     * Find zero or one Fiscal that matches the filter.
     * @param {FiscalFindUniqueArgs} args - Arguments to find a Fiscal
     * @example
     * // Get one Fiscal
     * const fiscal = await prisma.fiscal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FiscalFindUniqueArgs>(args: SelectSubset<T, FiscalFindUniqueArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fiscal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FiscalFindUniqueOrThrowArgs} args - Arguments to find a Fiscal
     * @example
     * // Get one Fiscal
     * const fiscal = await prisma.fiscal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FiscalFindUniqueOrThrowArgs>(args: SelectSubset<T, FiscalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fiscal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalFindFirstArgs} args - Arguments to find a Fiscal
     * @example
     * // Get one Fiscal
     * const fiscal = await prisma.fiscal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FiscalFindFirstArgs>(args?: SelectSubset<T, FiscalFindFirstArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fiscal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalFindFirstOrThrowArgs} args - Arguments to find a Fiscal
     * @example
     * // Get one Fiscal
     * const fiscal = await prisma.fiscal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FiscalFindFirstOrThrowArgs>(args?: SelectSubset<T, FiscalFindFirstOrThrowArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fiscals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fiscals
     * const fiscals = await prisma.fiscal.findMany()
     * 
     * // Get first 10 Fiscals
     * const fiscals = await prisma.fiscal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fiscalWithIdOnly = await prisma.fiscal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FiscalFindManyArgs>(args?: SelectSubset<T, FiscalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fiscal.
     * @param {FiscalCreateArgs} args - Arguments to create a Fiscal.
     * @example
     * // Create one Fiscal
     * const Fiscal = await prisma.fiscal.create({
     *   data: {
     *     // ... data to create a Fiscal
     *   }
     * })
     * 
     */
    create<T extends FiscalCreateArgs>(args: SelectSubset<T, FiscalCreateArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fiscals.
     * @param {FiscalCreateManyArgs} args - Arguments to create many Fiscals.
     * @example
     * // Create many Fiscals
     * const fiscal = await prisma.fiscal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FiscalCreateManyArgs>(args?: SelectSubset<T, FiscalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fiscal.
     * @param {FiscalDeleteArgs} args - Arguments to delete one Fiscal.
     * @example
     * // Delete one Fiscal
     * const Fiscal = await prisma.fiscal.delete({
     *   where: {
     *     // ... filter to delete one Fiscal
     *   }
     * })
     * 
     */
    delete<T extends FiscalDeleteArgs>(args: SelectSubset<T, FiscalDeleteArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fiscal.
     * @param {FiscalUpdateArgs} args - Arguments to update one Fiscal.
     * @example
     * // Update one Fiscal
     * const fiscal = await prisma.fiscal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FiscalUpdateArgs>(args: SelectSubset<T, FiscalUpdateArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fiscals.
     * @param {FiscalDeleteManyArgs} args - Arguments to filter Fiscals to delete.
     * @example
     * // Delete a few Fiscals
     * const { count } = await prisma.fiscal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FiscalDeleteManyArgs>(args?: SelectSubset<T, FiscalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fiscals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fiscals
     * const fiscal = await prisma.fiscal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FiscalUpdateManyArgs>(args: SelectSubset<T, FiscalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fiscal.
     * @param {FiscalUpsertArgs} args - Arguments to update or create a Fiscal.
     * @example
     * // Update or create a Fiscal
     * const fiscal = await prisma.fiscal.upsert({
     *   create: {
     *     // ... data to create a Fiscal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fiscal we want to update
     *   }
     * })
     */
    upsert<T extends FiscalUpsertArgs>(args: SelectSubset<T, FiscalUpsertArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fiscals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalCountArgs} args - Arguments to filter Fiscals to count.
     * @example
     * // Count the number of Fiscals
     * const count = await prisma.fiscal.count({
     *   where: {
     *     // ... the filter for the Fiscals we want to count
     *   }
     * })
    **/
    count<T extends FiscalCountArgs>(
      args?: Subset<T, FiscalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiscalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fiscal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FiscalAggregateArgs>(args: Subset<T, FiscalAggregateArgs>): Prisma.PrismaPromise<GetFiscalAggregateType<T>>

    /**
     * Group by Fiscal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalGroupByArgs} args - Group by arguments.
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
      T extends FiscalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FiscalGroupByArgs['orderBy'] }
        : { orderBy?: FiscalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FiscalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiscalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fiscal model
   */
  readonly fields: FiscalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fiscal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FiscalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MovimientoExpediente<T extends Fiscal$MovimientoExpedienteArgs<ExtArgs> = {}>(args?: Subset<T, Fiscal$MovimientoExpedienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fiscal model
   */
  interface FiscalFieldRefs {
    readonly id: FieldRef<"Fiscal", 'Int'>
    readonly nombre: FieldRef<"Fiscal", 'String'>
    readonly email: FieldRef<"Fiscal", 'String'>
    readonly password: FieldRef<"Fiscal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fiscal findUnique
   */
  export type FiscalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fiscal
     */
    omit?: FiscalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter, which Fiscal to fetch.
     */
    where: FiscalWhereUniqueInput
  }

  /**
   * Fiscal findUniqueOrThrow
   */
  export type FiscalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fiscal
     */
    omit?: FiscalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter, which Fiscal to fetch.
     */
    where: FiscalWhereUniqueInput
  }

  /**
   * Fiscal findFirst
   */
  export type FiscalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fiscal
     */
    omit?: FiscalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter, which Fiscal to fetch.
     */
    where?: FiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fiscals to fetch.
     */
    orderBy?: FiscalOrderByWithRelationInput | FiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fiscals.
     */
    cursor?: FiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fiscals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fiscals.
     */
    distinct?: FiscalScalarFieldEnum | FiscalScalarFieldEnum[]
  }

  /**
   * Fiscal findFirstOrThrow
   */
  export type FiscalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fiscal
     */
    omit?: FiscalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter, which Fiscal to fetch.
     */
    where?: FiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fiscals to fetch.
     */
    orderBy?: FiscalOrderByWithRelationInput | FiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fiscals.
     */
    cursor?: FiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fiscals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fiscals.
     */
    distinct?: FiscalScalarFieldEnum | FiscalScalarFieldEnum[]
  }

  /**
   * Fiscal findMany
   */
  export type FiscalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fiscal
     */
    omit?: FiscalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter, which Fiscals to fetch.
     */
    where?: FiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fiscals to fetch.
     */
    orderBy?: FiscalOrderByWithRelationInput | FiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fiscals.
     */
    cursor?: FiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fiscals.
     */
    skip?: number
    distinct?: FiscalScalarFieldEnum | FiscalScalarFieldEnum[]
  }

  /**
   * Fiscal create
   */
  export type FiscalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fiscal
     */
    omit?: FiscalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * The data needed to create a Fiscal.
     */
    data: XOR<FiscalCreateInput, FiscalUncheckedCreateInput>
  }

  /**
   * Fiscal createMany
   */
  export type FiscalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fiscals.
     */
    data: FiscalCreateManyInput | FiscalCreateManyInput[]
  }

  /**
   * Fiscal update
   */
  export type FiscalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fiscal
     */
    omit?: FiscalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * The data needed to update a Fiscal.
     */
    data: XOR<FiscalUpdateInput, FiscalUncheckedUpdateInput>
    /**
     * Choose, which Fiscal to update.
     */
    where: FiscalWhereUniqueInput
  }

  /**
   * Fiscal updateMany
   */
  export type FiscalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fiscals.
     */
    data: XOR<FiscalUpdateManyMutationInput, FiscalUncheckedUpdateManyInput>
    /**
     * Filter which Fiscals to update
     */
    where?: FiscalWhereInput
    /**
     * Limit how many Fiscals to update.
     */
    limit?: number
  }

  /**
   * Fiscal upsert
   */
  export type FiscalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fiscal
     */
    omit?: FiscalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * The filter to search for the Fiscal to update in case it exists.
     */
    where: FiscalWhereUniqueInput
    /**
     * In case the Fiscal found by the `where` argument doesn't exist, create a new Fiscal with this data.
     */
    create: XOR<FiscalCreateInput, FiscalUncheckedCreateInput>
    /**
     * In case the Fiscal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FiscalUpdateInput, FiscalUncheckedUpdateInput>
  }

  /**
   * Fiscal delete
   */
  export type FiscalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fiscal
     */
    omit?: FiscalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
    /**
     * Filter which Fiscal to delete.
     */
    where: FiscalWhereUniqueInput
  }

  /**
   * Fiscal deleteMany
   */
  export type FiscalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fiscals to delete
     */
    where?: FiscalWhereInput
    /**
     * Limit how many Fiscals to delete.
     */
    limit?: number
  }

  /**
   * Fiscal.MovimientoExpediente
   */
  export type Fiscal$MovimientoExpedienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    where?: MovimientoExpedienteWhereInput
    orderBy?: MovimientoExpedienteOrderByWithRelationInput | MovimientoExpedienteOrderByWithRelationInput[]
    cursor?: MovimientoExpedienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoExpedienteScalarFieldEnum | MovimientoExpedienteScalarFieldEnum[]
  }

  /**
   * Fiscal without action
   */
  export type FiscalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fiscal
     */
    select?: FiscalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fiscal
     */
    omit?: FiscalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalInclude<ExtArgs> | null
  }


  /**
   * Model EstadoExpediente
   */

  export type AggregateEstadoExpediente = {
    _count: EstadoExpedienteCountAggregateOutputType | null
    _avg: EstadoExpedienteAvgAggregateOutputType | null
    _sum: EstadoExpedienteSumAggregateOutputType | null
    _min: EstadoExpedienteMinAggregateOutputType | null
    _max: EstadoExpedienteMaxAggregateOutputType | null
  }

  export type EstadoExpedienteAvgAggregateOutputType = {
    id: number | null
  }

  export type EstadoExpedienteSumAggregateOutputType = {
    id: number | null
  }

  export type EstadoExpedienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EstadoExpedienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EstadoExpedienteCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type EstadoExpedienteAvgAggregateInputType = {
    id?: true
  }

  export type EstadoExpedienteSumAggregateInputType = {
    id?: true
  }

  export type EstadoExpedienteMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EstadoExpedienteMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EstadoExpedienteCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type EstadoExpedienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoExpediente to aggregate.
     */
    where?: EstadoExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoExpedientes to fetch.
     */
    orderBy?: EstadoExpedienteOrderByWithRelationInput | EstadoExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoExpedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoExpedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstadoExpedientes
    **/
    _count?: true | EstadoExpedienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoExpedienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoExpedienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoExpedienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoExpedienteMaxAggregateInputType
  }

  export type GetEstadoExpedienteAggregateType<T extends EstadoExpedienteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstadoExpediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstadoExpediente[P]>
      : GetScalarType<T[P], AggregateEstadoExpediente[P]>
  }




  export type EstadoExpedienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoExpedienteWhereInput
    orderBy?: EstadoExpedienteOrderByWithAggregationInput | EstadoExpedienteOrderByWithAggregationInput[]
    by: EstadoExpedienteScalarFieldEnum[] | EstadoExpedienteScalarFieldEnum
    having?: EstadoExpedienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoExpedienteCountAggregateInputType | true
    _avg?: EstadoExpedienteAvgAggregateInputType
    _sum?: EstadoExpedienteSumAggregateInputType
    _min?: EstadoExpedienteMinAggregateInputType
    _max?: EstadoExpedienteMaxAggregateInputType
  }

  export type EstadoExpedienteGroupByOutputType = {
    id: number
    nombre: string
    _count: EstadoExpedienteCountAggregateOutputType | null
    _avg: EstadoExpedienteAvgAggregateOutputType | null
    _sum: EstadoExpedienteSumAggregateOutputType | null
    _min: EstadoExpedienteMinAggregateOutputType | null
    _max: EstadoExpedienteMaxAggregateOutputType | null
  }

  type GetEstadoExpedienteGroupByPayload<T extends EstadoExpedienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoExpedienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoExpedienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoExpedienteGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoExpedienteGroupByOutputType[P]>
        }
      >
    >


  export type EstadoExpedienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    Expediente?: boolean | EstadoExpediente$ExpedienteArgs<ExtArgs>
    _count?: boolean | EstadoExpedienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadoExpediente"]>



  export type EstadoExpedienteSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type EstadoExpedienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["estadoExpediente"]>
  export type EstadoExpedienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Expediente?: boolean | EstadoExpediente$ExpedienteArgs<ExtArgs>
    _count?: boolean | EstadoExpedienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EstadoExpedientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstadoExpediente"
    objects: {
      Expediente: Prisma.$ExpedientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["estadoExpediente"]>
    composites: {}
  }

  type EstadoExpedienteGetPayload<S extends boolean | null | undefined | EstadoExpedienteDefaultArgs> = $Result.GetResult<Prisma.$EstadoExpedientePayload, S>

  type EstadoExpedienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadoExpedienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoExpedienteCountAggregateInputType | true
    }

  export interface EstadoExpedienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstadoExpediente'], meta: { name: 'EstadoExpediente' } }
    /**
     * Find zero or one EstadoExpediente that matches the filter.
     * @param {EstadoExpedienteFindUniqueArgs} args - Arguments to find a EstadoExpediente
     * @example
     * // Get one EstadoExpediente
     * const estadoExpediente = await prisma.estadoExpediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoExpedienteFindUniqueArgs>(args: SelectSubset<T, EstadoExpedienteFindUniqueArgs<ExtArgs>>): Prisma__EstadoExpedienteClient<$Result.GetResult<Prisma.$EstadoExpedientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstadoExpediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadoExpedienteFindUniqueOrThrowArgs} args - Arguments to find a EstadoExpediente
     * @example
     * // Get one EstadoExpediente
     * const estadoExpediente = await prisma.estadoExpediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoExpedienteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoExpedienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoExpedienteClient<$Result.GetResult<Prisma.$EstadoExpedientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoExpediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoExpedienteFindFirstArgs} args - Arguments to find a EstadoExpediente
     * @example
     * // Get one EstadoExpediente
     * const estadoExpediente = await prisma.estadoExpediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoExpedienteFindFirstArgs>(args?: SelectSubset<T, EstadoExpedienteFindFirstArgs<ExtArgs>>): Prisma__EstadoExpedienteClient<$Result.GetResult<Prisma.$EstadoExpedientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoExpediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoExpedienteFindFirstOrThrowArgs} args - Arguments to find a EstadoExpediente
     * @example
     * // Get one EstadoExpediente
     * const estadoExpediente = await prisma.estadoExpediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoExpedienteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoExpedienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoExpedienteClient<$Result.GetResult<Prisma.$EstadoExpedientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstadoExpedientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoExpedienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstadoExpedientes
     * const estadoExpedientes = await prisma.estadoExpediente.findMany()
     * 
     * // Get first 10 EstadoExpedientes
     * const estadoExpedientes = await prisma.estadoExpediente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoExpedienteWithIdOnly = await prisma.estadoExpediente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstadoExpedienteFindManyArgs>(args?: SelectSubset<T, EstadoExpedienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoExpedientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstadoExpediente.
     * @param {EstadoExpedienteCreateArgs} args - Arguments to create a EstadoExpediente.
     * @example
     * // Create one EstadoExpediente
     * const EstadoExpediente = await prisma.estadoExpediente.create({
     *   data: {
     *     // ... data to create a EstadoExpediente
     *   }
     * })
     * 
     */
    create<T extends EstadoExpedienteCreateArgs>(args: SelectSubset<T, EstadoExpedienteCreateArgs<ExtArgs>>): Prisma__EstadoExpedienteClient<$Result.GetResult<Prisma.$EstadoExpedientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstadoExpedientes.
     * @param {EstadoExpedienteCreateManyArgs} args - Arguments to create many EstadoExpedientes.
     * @example
     * // Create many EstadoExpedientes
     * const estadoExpediente = await prisma.estadoExpediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoExpedienteCreateManyArgs>(args?: SelectSubset<T, EstadoExpedienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EstadoExpediente.
     * @param {EstadoExpedienteDeleteArgs} args - Arguments to delete one EstadoExpediente.
     * @example
     * // Delete one EstadoExpediente
     * const EstadoExpediente = await prisma.estadoExpediente.delete({
     *   where: {
     *     // ... filter to delete one EstadoExpediente
     *   }
     * })
     * 
     */
    delete<T extends EstadoExpedienteDeleteArgs>(args: SelectSubset<T, EstadoExpedienteDeleteArgs<ExtArgs>>): Prisma__EstadoExpedienteClient<$Result.GetResult<Prisma.$EstadoExpedientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstadoExpediente.
     * @param {EstadoExpedienteUpdateArgs} args - Arguments to update one EstadoExpediente.
     * @example
     * // Update one EstadoExpediente
     * const estadoExpediente = await prisma.estadoExpediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoExpedienteUpdateArgs>(args: SelectSubset<T, EstadoExpedienteUpdateArgs<ExtArgs>>): Prisma__EstadoExpedienteClient<$Result.GetResult<Prisma.$EstadoExpedientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstadoExpedientes.
     * @param {EstadoExpedienteDeleteManyArgs} args - Arguments to filter EstadoExpedientes to delete.
     * @example
     * // Delete a few EstadoExpedientes
     * const { count } = await prisma.estadoExpediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoExpedienteDeleteManyArgs>(args?: SelectSubset<T, EstadoExpedienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoExpedientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoExpedienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstadoExpedientes
     * const estadoExpediente = await prisma.estadoExpediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoExpedienteUpdateManyArgs>(args: SelectSubset<T, EstadoExpedienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EstadoExpediente.
     * @param {EstadoExpedienteUpsertArgs} args - Arguments to update or create a EstadoExpediente.
     * @example
     * // Update or create a EstadoExpediente
     * const estadoExpediente = await prisma.estadoExpediente.upsert({
     *   create: {
     *     // ... data to create a EstadoExpediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstadoExpediente we want to update
     *   }
     * })
     */
    upsert<T extends EstadoExpedienteUpsertArgs>(args: SelectSubset<T, EstadoExpedienteUpsertArgs<ExtArgs>>): Prisma__EstadoExpedienteClient<$Result.GetResult<Prisma.$EstadoExpedientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstadoExpedientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoExpedienteCountArgs} args - Arguments to filter EstadoExpedientes to count.
     * @example
     * // Count the number of EstadoExpedientes
     * const count = await prisma.estadoExpediente.count({
     *   where: {
     *     // ... the filter for the EstadoExpedientes we want to count
     *   }
     * })
    **/
    count<T extends EstadoExpedienteCountArgs>(
      args?: Subset<T, EstadoExpedienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoExpedienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstadoExpediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoExpedienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoExpedienteAggregateArgs>(args: Subset<T, EstadoExpedienteAggregateArgs>): Prisma.PrismaPromise<GetEstadoExpedienteAggregateType<T>>

    /**
     * Group by EstadoExpediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoExpedienteGroupByArgs} args - Group by arguments.
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
      T extends EstadoExpedienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoExpedienteGroupByArgs['orderBy'] }
        : { orderBy?: EstadoExpedienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EstadoExpedienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoExpedienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstadoExpediente model
   */
  readonly fields: EstadoExpedienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstadoExpediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoExpedienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Expediente<T extends EstadoExpediente$ExpedienteArgs<ExtArgs> = {}>(args?: Subset<T, EstadoExpediente$ExpedienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EstadoExpediente model
   */
  interface EstadoExpedienteFieldRefs {
    readonly id: FieldRef<"EstadoExpediente", 'Int'>
    readonly nombre: FieldRef<"EstadoExpediente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EstadoExpediente findUnique
   */
  export type EstadoExpedienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpediente
     */
    select?: EstadoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoExpediente
     */
    omit?: EstadoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which EstadoExpediente to fetch.
     */
    where: EstadoExpedienteWhereUniqueInput
  }

  /**
   * EstadoExpediente findUniqueOrThrow
   */
  export type EstadoExpedienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpediente
     */
    select?: EstadoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoExpediente
     */
    omit?: EstadoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which EstadoExpediente to fetch.
     */
    where: EstadoExpedienteWhereUniqueInput
  }

  /**
   * EstadoExpediente findFirst
   */
  export type EstadoExpedienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpediente
     */
    select?: EstadoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoExpediente
     */
    omit?: EstadoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which EstadoExpediente to fetch.
     */
    where?: EstadoExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoExpedientes to fetch.
     */
    orderBy?: EstadoExpedienteOrderByWithRelationInput | EstadoExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoExpedientes.
     */
    cursor?: EstadoExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoExpedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoExpedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoExpedientes.
     */
    distinct?: EstadoExpedienteScalarFieldEnum | EstadoExpedienteScalarFieldEnum[]
  }

  /**
   * EstadoExpediente findFirstOrThrow
   */
  export type EstadoExpedienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpediente
     */
    select?: EstadoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoExpediente
     */
    omit?: EstadoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which EstadoExpediente to fetch.
     */
    where?: EstadoExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoExpedientes to fetch.
     */
    orderBy?: EstadoExpedienteOrderByWithRelationInput | EstadoExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoExpedientes.
     */
    cursor?: EstadoExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoExpedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoExpedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoExpedientes.
     */
    distinct?: EstadoExpedienteScalarFieldEnum | EstadoExpedienteScalarFieldEnum[]
  }

  /**
   * EstadoExpediente findMany
   */
  export type EstadoExpedienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpediente
     */
    select?: EstadoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoExpediente
     */
    omit?: EstadoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which EstadoExpedientes to fetch.
     */
    where?: EstadoExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoExpedientes to fetch.
     */
    orderBy?: EstadoExpedienteOrderByWithRelationInput | EstadoExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstadoExpedientes.
     */
    cursor?: EstadoExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoExpedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoExpedientes.
     */
    skip?: number
    distinct?: EstadoExpedienteScalarFieldEnum | EstadoExpedienteScalarFieldEnum[]
  }

  /**
   * EstadoExpediente create
   */
  export type EstadoExpedienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpediente
     */
    select?: EstadoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoExpediente
     */
    omit?: EstadoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoExpedienteInclude<ExtArgs> | null
    /**
     * The data needed to create a EstadoExpediente.
     */
    data: XOR<EstadoExpedienteCreateInput, EstadoExpedienteUncheckedCreateInput>
  }

  /**
   * EstadoExpediente createMany
   */
  export type EstadoExpedienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstadoExpedientes.
     */
    data: EstadoExpedienteCreateManyInput | EstadoExpedienteCreateManyInput[]
  }

  /**
   * EstadoExpediente update
   */
  export type EstadoExpedienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpediente
     */
    select?: EstadoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoExpediente
     */
    omit?: EstadoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoExpedienteInclude<ExtArgs> | null
    /**
     * The data needed to update a EstadoExpediente.
     */
    data: XOR<EstadoExpedienteUpdateInput, EstadoExpedienteUncheckedUpdateInput>
    /**
     * Choose, which EstadoExpediente to update.
     */
    where: EstadoExpedienteWhereUniqueInput
  }

  /**
   * EstadoExpediente updateMany
   */
  export type EstadoExpedienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstadoExpedientes.
     */
    data: XOR<EstadoExpedienteUpdateManyMutationInput, EstadoExpedienteUncheckedUpdateManyInput>
    /**
     * Filter which EstadoExpedientes to update
     */
    where?: EstadoExpedienteWhereInput
    /**
     * Limit how many EstadoExpedientes to update.
     */
    limit?: number
  }

  /**
   * EstadoExpediente upsert
   */
  export type EstadoExpedienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpediente
     */
    select?: EstadoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoExpediente
     */
    omit?: EstadoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoExpedienteInclude<ExtArgs> | null
    /**
     * The filter to search for the EstadoExpediente to update in case it exists.
     */
    where: EstadoExpedienteWhereUniqueInput
    /**
     * In case the EstadoExpediente found by the `where` argument doesn't exist, create a new EstadoExpediente with this data.
     */
    create: XOR<EstadoExpedienteCreateInput, EstadoExpedienteUncheckedCreateInput>
    /**
     * In case the EstadoExpediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoExpedienteUpdateInput, EstadoExpedienteUncheckedUpdateInput>
  }

  /**
   * EstadoExpediente delete
   */
  export type EstadoExpedienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpediente
     */
    select?: EstadoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoExpediente
     */
    omit?: EstadoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoExpedienteInclude<ExtArgs> | null
    /**
     * Filter which EstadoExpediente to delete.
     */
    where: EstadoExpedienteWhereUniqueInput
  }

  /**
   * EstadoExpediente deleteMany
   */
  export type EstadoExpedienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoExpedientes to delete
     */
    where?: EstadoExpedienteWhereInput
    /**
     * Limit how many EstadoExpedientes to delete.
     */
    limit?: number
  }

  /**
   * EstadoExpediente.Expediente
   */
  export type EstadoExpediente$ExpedienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    where?: ExpedienteWhereInput
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    cursor?: ExpedienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpedienteScalarFieldEnum | ExpedienteScalarFieldEnum[]
  }

  /**
   * EstadoExpediente without action
   */
  export type EstadoExpedienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoExpediente
     */
    select?: EstadoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoExpediente
     */
    omit?: EstadoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoExpedienteInclude<ExtArgs> | null
  }


  /**
   * Model Expediente
   */

  export type AggregateExpediente = {
    _count: ExpedienteCountAggregateOutputType | null
    _avg: ExpedienteAvgAggregateOutputType | null
    _sum: ExpedienteSumAggregateOutputType | null
    _min: ExpedienteMinAggregateOutputType | null
    _max: ExpedienteMaxAggregateOutputType | null
  }

  export type ExpedienteAvgAggregateOutputType = {
    id: number | null
    estadoId: number | null
  }

  export type ExpedienteSumAggregateOutputType = {
    id: number | null
    estadoId: number | null
  }

  export type ExpedienteMinAggregateOutputType = {
    id: number | null
    numero: string | null
    fechaCreacion: Date | null
    estadoId: number | null
  }

  export type ExpedienteMaxAggregateOutputType = {
    id: number | null
    numero: string | null
    fechaCreacion: Date | null
    estadoId: number | null
  }

  export type ExpedienteCountAggregateOutputType = {
    id: number
    numero: number
    fechaCreacion: number
    estadoId: number
    _all: number
  }


  export type ExpedienteAvgAggregateInputType = {
    id?: true
    estadoId?: true
  }

  export type ExpedienteSumAggregateInputType = {
    id?: true
    estadoId?: true
  }

  export type ExpedienteMinAggregateInputType = {
    id?: true
    numero?: true
    fechaCreacion?: true
    estadoId?: true
  }

  export type ExpedienteMaxAggregateInputType = {
    id?: true
    numero?: true
    fechaCreacion?: true
    estadoId?: true
  }

  export type ExpedienteCountAggregateInputType = {
    id?: true
    numero?: true
    fechaCreacion?: true
    estadoId?: true
    _all?: true
  }

  export type ExpedienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expediente to aggregate.
     */
    where?: ExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedientes to fetch.
     */
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expedientes
    **/
    _count?: true | ExpedienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpedienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpedienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpedienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpedienteMaxAggregateInputType
  }

  export type GetExpedienteAggregateType<T extends ExpedienteAggregateArgs> = {
        [P in keyof T & keyof AggregateExpediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpediente[P]>
      : GetScalarType<T[P], AggregateExpediente[P]>
  }




  export type ExpedienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedienteWhereInput
    orderBy?: ExpedienteOrderByWithAggregationInput | ExpedienteOrderByWithAggregationInput[]
    by: ExpedienteScalarFieldEnum[] | ExpedienteScalarFieldEnum
    having?: ExpedienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpedienteCountAggregateInputType | true
    _avg?: ExpedienteAvgAggregateInputType
    _sum?: ExpedienteSumAggregateInputType
    _min?: ExpedienteMinAggregateInputType
    _max?: ExpedienteMaxAggregateInputType
  }

  export type ExpedienteGroupByOutputType = {
    id: number
    numero: string
    fechaCreacion: Date
    estadoId: number
    _count: ExpedienteCountAggregateOutputType | null
    _avg: ExpedienteAvgAggregateOutputType | null
    _sum: ExpedienteSumAggregateOutputType | null
    _min: ExpedienteMinAggregateOutputType | null
    _max: ExpedienteMaxAggregateOutputType | null
  }

  type GetExpedienteGroupByPayload<T extends ExpedienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpedienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpedienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpedienteGroupByOutputType[P]>
            : GetScalarType<T[P], ExpedienteGroupByOutputType[P]>
        }
      >
    >


  export type ExpedienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    fechaCreacion?: boolean
    estadoId?: boolean
    estado?: boolean | EstadoExpedienteDefaultArgs<ExtArgs>
    movimientos?: boolean | Expediente$movimientosArgs<ExtArgs>
    _count?: boolean | ExpedienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expediente"]>



  export type ExpedienteSelectScalar = {
    id?: boolean
    numero?: boolean
    fechaCreacion?: boolean
    estadoId?: boolean
  }

  export type ExpedienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "fechaCreacion" | "estadoId", ExtArgs["result"]["expediente"]>
  export type ExpedienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado?: boolean | EstadoExpedienteDefaultArgs<ExtArgs>
    movimientos?: boolean | Expediente$movimientosArgs<ExtArgs>
    _count?: boolean | ExpedienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExpedientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expediente"
    objects: {
      estado: Prisma.$EstadoExpedientePayload<ExtArgs>
      movimientos: Prisma.$MovimientoExpedientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: string
      fechaCreacion: Date
      estadoId: number
    }, ExtArgs["result"]["expediente"]>
    composites: {}
  }

  type ExpedienteGetPayload<S extends boolean | null | undefined | ExpedienteDefaultArgs> = $Result.GetResult<Prisma.$ExpedientePayload, S>

  type ExpedienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpedienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpedienteCountAggregateInputType | true
    }

  export interface ExpedienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expediente'], meta: { name: 'Expediente' } }
    /**
     * Find zero or one Expediente that matches the filter.
     * @param {ExpedienteFindUniqueArgs} args - Arguments to find a Expediente
     * @example
     * // Get one Expediente
     * const expediente = await prisma.expediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpedienteFindUniqueArgs>(args: SelectSubset<T, ExpedienteFindUniqueArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpedienteFindUniqueOrThrowArgs} args - Arguments to find a Expediente
     * @example
     * // Get one Expediente
     * const expediente = await prisma.expediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpedienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpedienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteFindFirstArgs} args - Arguments to find a Expediente
     * @example
     * // Get one Expediente
     * const expediente = await prisma.expediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpedienteFindFirstArgs>(args?: SelectSubset<T, ExpedienteFindFirstArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteFindFirstOrThrowArgs} args - Arguments to find a Expediente
     * @example
     * // Get one Expediente
     * const expediente = await prisma.expediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpedienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpedienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expedientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expedientes
     * const expedientes = await prisma.expediente.findMany()
     * 
     * // Get first 10 Expedientes
     * const expedientes = await prisma.expediente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expedienteWithIdOnly = await prisma.expediente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpedienteFindManyArgs>(args?: SelectSubset<T, ExpedienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expediente.
     * @param {ExpedienteCreateArgs} args - Arguments to create a Expediente.
     * @example
     * // Create one Expediente
     * const Expediente = await prisma.expediente.create({
     *   data: {
     *     // ... data to create a Expediente
     *   }
     * })
     * 
     */
    create<T extends ExpedienteCreateArgs>(args: SelectSubset<T, ExpedienteCreateArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expedientes.
     * @param {ExpedienteCreateManyArgs} args - Arguments to create many Expedientes.
     * @example
     * // Create many Expedientes
     * const expediente = await prisma.expediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpedienteCreateManyArgs>(args?: SelectSubset<T, ExpedienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Expediente.
     * @param {ExpedienteDeleteArgs} args - Arguments to delete one Expediente.
     * @example
     * // Delete one Expediente
     * const Expediente = await prisma.expediente.delete({
     *   where: {
     *     // ... filter to delete one Expediente
     *   }
     * })
     * 
     */
    delete<T extends ExpedienteDeleteArgs>(args: SelectSubset<T, ExpedienteDeleteArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expediente.
     * @param {ExpedienteUpdateArgs} args - Arguments to update one Expediente.
     * @example
     * // Update one Expediente
     * const expediente = await prisma.expediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpedienteUpdateArgs>(args: SelectSubset<T, ExpedienteUpdateArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expedientes.
     * @param {ExpedienteDeleteManyArgs} args - Arguments to filter Expedientes to delete.
     * @example
     * // Delete a few Expedientes
     * const { count } = await prisma.expediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpedienteDeleteManyArgs>(args?: SelectSubset<T, ExpedienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expedientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expedientes
     * const expediente = await prisma.expediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpedienteUpdateManyArgs>(args: SelectSubset<T, ExpedienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expediente.
     * @param {ExpedienteUpsertArgs} args - Arguments to update or create a Expediente.
     * @example
     * // Update or create a Expediente
     * const expediente = await prisma.expediente.upsert({
     *   create: {
     *     // ... data to create a Expediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expediente we want to update
     *   }
     * })
     */
    upsert<T extends ExpedienteUpsertArgs>(args: SelectSubset<T, ExpedienteUpsertArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expedientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteCountArgs} args - Arguments to filter Expedientes to count.
     * @example
     * // Count the number of Expedientes
     * const count = await prisma.expediente.count({
     *   where: {
     *     // ... the filter for the Expedientes we want to count
     *   }
     * })
    **/
    count<T extends ExpedienteCountArgs>(
      args?: Subset<T, ExpedienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpedienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpedienteAggregateArgs>(args: Subset<T, ExpedienteAggregateArgs>): Prisma.PrismaPromise<GetExpedienteAggregateType<T>>

    /**
     * Group by Expediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedienteGroupByArgs} args - Group by arguments.
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
      T extends ExpedienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpedienteGroupByArgs['orderBy'] }
        : { orderBy?: ExpedienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExpedienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpedienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expediente model
   */
  readonly fields: ExpedienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpedienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estado<T extends EstadoExpedienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoExpedienteDefaultArgs<ExtArgs>>): Prisma__EstadoExpedienteClient<$Result.GetResult<Prisma.$EstadoExpedientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movimientos<T extends Expediente$movimientosArgs<ExtArgs> = {}>(args?: Subset<T, Expediente$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expediente model
   */
  interface ExpedienteFieldRefs {
    readonly id: FieldRef<"Expediente", 'Int'>
    readonly numero: FieldRef<"Expediente", 'String'>
    readonly fechaCreacion: FieldRef<"Expediente", 'DateTime'>
    readonly estadoId: FieldRef<"Expediente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Expediente findUnique
   */
  export type ExpedienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which Expediente to fetch.
     */
    where: ExpedienteWhereUniqueInput
  }

  /**
   * Expediente findUniqueOrThrow
   */
  export type ExpedienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which Expediente to fetch.
     */
    where: ExpedienteWhereUniqueInput
  }

  /**
   * Expediente findFirst
   */
  export type ExpedienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which Expediente to fetch.
     */
    where?: ExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedientes to fetch.
     */
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expedientes.
     */
    cursor?: ExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expedientes.
     */
    distinct?: ExpedienteScalarFieldEnum | ExpedienteScalarFieldEnum[]
  }

  /**
   * Expediente findFirstOrThrow
   */
  export type ExpedienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which Expediente to fetch.
     */
    where?: ExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedientes to fetch.
     */
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expedientes.
     */
    cursor?: ExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expedientes.
     */
    distinct?: ExpedienteScalarFieldEnum | ExpedienteScalarFieldEnum[]
  }

  /**
   * Expediente findMany
   */
  export type ExpedienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which Expedientes to fetch.
     */
    where?: ExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedientes to fetch.
     */
    orderBy?: ExpedienteOrderByWithRelationInput | ExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expedientes.
     */
    cursor?: ExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedientes.
     */
    skip?: number
    distinct?: ExpedienteScalarFieldEnum | ExpedienteScalarFieldEnum[]
  }

  /**
   * Expediente create
   */
  export type ExpedienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Expediente.
     */
    data: XOR<ExpedienteCreateInput, ExpedienteUncheckedCreateInput>
  }

  /**
   * Expediente createMany
   */
  export type ExpedienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expedientes.
     */
    data: ExpedienteCreateManyInput | ExpedienteCreateManyInput[]
  }

  /**
   * Expediente update
   */
  export type ExpedienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Expediente.
     */
    data: XOR<ExpedienteUpdateInput, ExpedienteUncheckedUpdateInput>
    /**
     * Choose, which Expediente to update.
     */
    where: ExpedienteWhereUniqueInput
  }

  /**
   * Expediente updateMany
   */
  export type ExpedienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expedientes.
     */
    data: XOR<ExpedienteUpdateManyMutationInput, ExpedienteUncheckedUpdateManyInput>
    /**
     * Filter which Expedientes to update
     */
    where?: ExpedienteWhereInput
    /**
     * Limit how many Expedientes to update.
     */
    limit?: number
  }

  /**
   * Expediente upsert
   */
  export type ExpedienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Expediente to update in case it exists.
     */
    where: ExpedienteWhereUniqueInput
    /**
     * In case the Expediente found by the `where` argument doesn't exist, create a new Expediente with this data.
     */
    create: XOR<ExpedienteCreateInput, ExpedienteUncheckedCreateInput>
    /**
     * In case the Expediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpedienteUpdateInput, ExpedienteUncheckedUpdateInput>
  }

  /**
   * Expediente delete
   */
  export type ExpedienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
    /**
     * Filter which Expediente to delete.
     */
    where: ExpedienteWhereUniqueInput
  }

  /**
   * Expediente deleteMany
   */
  export type ExpedienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expedientes to delete
     */
    where?: ExpedienteWhereInput
    /**
     * Limit how many Expedientes to delete.
     */
    limit?: number
  }

  /**
   * Expediente.movimientos
   */
  export type Expediente$movimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    where?: MovimientoExpedienteWhereInput
    orderBy?: MovimientoExpedienteOrderByWithRelationInput | MovimientoExpedienteOrderByWithRelationInput[]
    cursor?: MovimientoExpedienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoExpedienteScalarFieldEnum | MovimientoExpedienteScalarFieldEnum[]
  }

  /**
   * Expediente without action
   */
  export type ExpedienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expediente
     */
    select?: ExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expediente
     */
    omit?: ExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedienteInclude<ExtArgs> | null
  }


  /**
   * Model MovimientoExpediente
   */

  export type AggregateMovimientoExpediente = {
    _count: MovimientoExpedienteCountAggregateOutputType | null
    _avg: MovimientoExpedienteAvgAggregateOutputType | null
    _sum: MovimientoExpedienteSumAggregateOutputType | null
    _min: MovimientoExpedienteMinAggregateOutputType | null
    _max: MovimientoExpedienteMaxAggregateOutputType | null
  }

  export type MovimientoExpedienteAvgAggregateOutputType = {
    id: number | null
    fiscalId: number | null
    expedienteId: number | null
  }

  export type MovimientoExpedienteSumAggregateOutputType = {
    id: number | null
    fiscalId: number | null
    expedienteId: number | null
  }

  export type MovimientoExpedienteMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    tipo: string | null
    motivo: string | null
    fiscalId: number | null
    expedienteId: number | null
  }

  export type MovimientoExpedienteMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    tipo: string | null
    motivo: string | null
    fiscalId: number | null
    expedienteId: number | null
  }

  export type MovimientoExpedienteCountAggregateOutputType = {
    id: number
    fecha: number
    tipo: number
    motivo: number
    fiscalId: number
    expedienteId: number
    _all: number
  }


  export type MovimientoExpedienteAvgAggregateInputType = {
    id?: true
    fiscalId?: true
    expedienteId?: true
  }

  export type MovimientoExpedienteSumAggregateInputType = {
    id?: true
    fiscalId?: true
    expedienteId?: true
  }

  export type MovimientoExpedienteMinAggregateInputType = {
    id?: true
    fecha?: true
    tipo?: true
    motivo?: true
    fiscalId?: true
    expedienteId?: true
  }

  export type MovimientoExpedienteMaxAggregateInputType = {
    id?: true
    fecha?: true
    tipo?: true
    motivo?: true
    fiscalId?: true
    expedienteId?: true
  }

  export type MovimientoExpedienteCountAggregateInputType = {
    id?: true
    fecha?: true
    tipo?: true
    motivo?: true
    fiscalId?: true
    expedienteId?: true
    _all?: true
  }

  export type MovimientoExpedienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoExpediente to aggregate.
     */
    where?: MovimientoExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoExpedientes to fetch.
     */
    orderBy?: MovimientoExpedienteOrderByWithRelationInput | MovimientoExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimientoExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoExpedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoExpedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimientoExpedientes
    **/
    _count?: true | MovimientoExpedienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimientoExpedienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimientoExpedienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimientoExpedienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimientoExpedienteMaxAggregateInputType
  }

  export type GetMovimientoExpedienteAggregateType<T extends MovimientoExpedienteAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimientoExpediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimientoExpediente[P]>
      : GetScalarType<T[P], AggregateMovimientoExpediente[P]>
  }




  export type MovimientoExpedienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoExpedienteWhereInput
    orderBy?: MovimientoExpedienteOrderByWithAggregationInput | MovimientoExpedienteOrderByWithAggregationInput[]
    by: MovimientoExpedienteScalarFieldEnum[] | MovimientoExpedienteScalarFieldEnum
    having?: MovimientoExpedienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimientoExpedienteCountAggregateInputType | true
    _avg?: MovimientoExpedienteAvgAggregateInputType
    _sum?: MovimientoExpedienteSumAggregateInputType
    _min?: MovimientoExpedienteMinAggregateInputType
    _max?: MovimientoExpedienteMaxAggregateInputType
  }

  export type MovimientoExpedienteGroupByOutputType = {
    id: number
    fecha: Date
    tipo: string
    motivo: string | null
    fiscalId: number
    expedienteId: number
    _count: MovimientoExpedienteCountAggregateOutputType | null
    _avg: MovimientoExpedienteAvgAggregateOutputType | null
    _sum: MovimientoExpedienteSumAggregateOutputType | null
    _min: MovimientoExpedienteMinAggregateOutputType | null
    _max: MovimientoExpedienteMaxAggregateOutputType | null
  }

  type GetMovimientoExpedienteGroupByPayload<T extends MovimientoExpedienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientoExpedienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimientoExpedienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimientoExpedienteGroupByOutputType[P]>
            : GetScalarType<T[P], MovimientoExpedienteGroupByOutputType[P]>
        }
      >
    >


  export type MovimientoExpedienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    tipo?: boolean
    motivo?: boolean
    fiscalId?: boolean
    expedienteId?: boolean
    fiscal?: boolean | FiscalDefaultArgs<ExtArgs>
    expediente?: boolean | ExpedienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoExpediente"]>



  export type MovimientoExpedienteSelectScalar = {
    id?: boolean
    fecha?: boolean
    tipo?: boolean
    motivo?: boolean
    fiscalId?: boolean
    expedienteId?: boolean
  }

  export type MovimientoExpedienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "tipo" | "motivo" | "fiscalId" | "expedienteId", ExtArgs["result"]["movimientoExpediente"]>
  export type MovimientoExpedienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fiscal?: boolean | FiscalDefaultArgs<ExtArgs>
    expediente?: boolean | ExpedienteDefaultArgs<ExtArgs>
  }

  export type $MovimientoExpedientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimientoExpediente"
    objects: {
      fiscal: Prisma.$FiscalPayload<ExtArgs>
      expediente: Prisma.$ExpedientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      tipo: string
      motivo: string | null
      fiscalId: number
      expedienteId: number
    }, ExtArgs["result"]["movimientoExpediente"]>
    composites: {}
  }

  type MovimientoExpedienteGetPayload<S extends boolean | null | undefined | MovimientoExpedienteDefaultArgs> = $Result.GetResult<Prisma.$MovimientoExpedientePayload, S>

  type MovimientoExpedienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimientoExpedienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimientoExpedienteCountAggregateInputType | true
    }

  export interface MovimientoExpedienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimientoExpediente'], meta: { name: 'MovimientoExpediente' } }
    /**
     * Find zero or one MovimientoExpediente that matches the filter.
     * @param {MovimientoExpedienteFindUniqueArgs} args - Arguments to find a MovimientoExpediente
     * @example
     * // Get one MovimientoExpediente
     * const movimientoExpediente = await prisma.movimientoExpediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimientoExpedienteFindUniqueArgs>(args: SelectSubset<T, MovimientoExpedienteFindUniqueArgs<ExtArgs>>): Prisma__MovimientoExpedienteClient<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimientoExpediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimientoExpedienteFindUniqueOrThrowArgs} args - Arguments to find a MovimientoExpediente
     * @example
     * // Get one MovimientoExpediente
     * const movimientoExpediente = await prisma.movimientoExpediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimientoExpedienteFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimientoExpedienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimientoExpedienteClient<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoExpediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoExpedienteFindFirstArgs} args - Arguments to find a MovimientoExpediente
     * @example
     * // Get one MovimientoExpediente
     * const movimientoExpediente = await prisma.movimientoExpediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimientoExpedienteFindFirstArgs>(args?: SelectSubset<T, MovimientoExpedienteFindFirstArgs<ExtArgs>>): Prisma__MovimientoExpedienteClient<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoExpediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoExpedienteFindFirstOrThrowArgs} args - Arguments to find a MovimientoExpediente
     * @example
     * // Get one MovimientoExpediente
     * const movimientoExpediente = await prisma.movimientoExpediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimientoExpedienteFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimientoExpedienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimientoExpedienteClient<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimientoExpedientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoExpedienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimientoExpedientes
     * const movimientoExpedientes = await prisma.movimientoExpediente.findMany()
     * 
     * // Get first 10 MovimientoExpedientes
     * const movimientoExpedientes = await prisma.movimientoExpediente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimientoExpedienteWithIdOnly = await prisma.movimientoExpediente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimientoExpedienteFindManyArgs>(args?: SelectSubset<T, MovimientoExpedienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimientoExpediente.
     * @param {MovimientoExpedienteCreateArgs} args - Arguments to create a MovimientoExpediente.
     * @example
     * // Create one MovimientoExpediente
     * const MovimientoExpediente = await prisma.movimientoExpediente.create({
     *   data: {
     *     // ... data to create a MovimientoExpediente
     *   }
     * })
     * 
     */
    create<T extends MovimientoExpedienteCreateArgs>(args: SelectSubset<T, MovimientoExpedienteCreateArgs<ExtArgs>>): Prisma__MovimientoExpedienteClient<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimientoExpedientes.
     * @param {MovimientoExpedienteCreateManyArgs} args - Arguments to create many MovimientoExpedientes.
     * @example
     * // Create many MovimientoExpedientes
     * const movimientoExpediente = await prisma.movimientoExpediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimientoExpedienteCreateManyArgs>(args?: SelectSubset<T, MovimientoExpedienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovimientoExpediente.
     * @param {MovimientoExpedienteDeleteArgs} args - Arguments to delete one MovimientoExpediente.
     * @example
     * // Delete one MovimientoExpediente
     * const MovimientoExpediente = await prisma.movimientoExpediente.delete({
     *   where: {
     *     // ... filter to delete one MovimientoExpediente
     *   }
     * })
     * 
     */
    delete<T extends MovimientoExpedienteDeleteArgs>(args: SelectSubset<T, MovimientoExpedienteDeleteArgs<ExtArgs>>): Prisma__MovimientoExpedienteClient<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimientoExpediente.
     * @param {MovimientoExpedienteUpdateArgs} args - Arguments to update one MovimientoExpediente.
     * @example
     * // Update one MovimientoExpediente
     * const movimientoExpediente = await prisma.movimientoExpediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimientoExpedienteUpdateArgs>(args: SelectSubset<T, MovimientoExpedienteUpdateArgs<ExtArgs>>): Prisma__MovimientoExpedienteClient<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimientoExpedientes.
     * @param {MovimientoExpedienteDeleteManyArgs} args - Arguments to filter MovimientoExpedientes to delete.
     * @example
     * // Delete a few MovimientoExpedientes
     * const { count } = await prisma.movimientoExpediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimientoExpedienteDeleteManyArgs>(args?: SelectSubset<T, MovimientoExpedienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimientoExpedientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoExpedienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimientoExpedientes
     * const movimientoExpediente = await prisma.movimientoExpediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimientoExpedienteUpdateManyArgs>(args: SelectSubset<T, MovimientoExpedienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovimientoExpediente.
     * @param {MovimientoExpedienteUpsertArgs} args - Arguments to update or create a MovimientoExpediente.
     * @example
     * // Update or create a MovimientoExpediente
     * const movimientoExpediente = await prisma.movimientoExpediente.upsert({
     *   create: {
     *     // ... data to create a MovimientoExpediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimientoExpediente we want to update
     *   }
     * })
     */
    upsert<T extends MovimientoExpedienteUpsertArgs>(args: SelectSubset<T, MovimientoExpedienteUpsertArgs<ExtArgs>>): Prisma__MovimientoExpedienteClient<$Result.GetResult<Prisma.$MovimientoExpedientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimientoExpedientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoExpedienteCountArgs} args - Arguments to filter MovimientoExpedientes to count.
     * @example
     * // Count the number of MovimientoExpedientes
     * const count = await prisma.movimientoExpediente.count({
     *   where: {
     *     // ... the filter for the MovimientoExpedientes we want to count
     *   }
     * })
    **/
    count<T extends MovimientoExpedienteCountArgs>(
      args?: Subset<T, MovimientoExpedienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimientoExpedienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimientoExpediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoExpedienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimientoExpedienteAggregateArgs>(args: Subset<T, MovimientoExpedienteAggregateArgs>): Prisma.PrismaPromise<GetMovimientoExpedienteAggregateType<T>>

    /**
     * Group by MovimientoExpediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoExpedienteGroupByArgs} args - Group by arguments.
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
      T extends MovimientoExpedienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimientoExpedienteGroupByArgs['orderBy'] }
        : { orderBy?: MovimientoExpedienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MovimientoExpedienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoExpedienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovimientoExpediente model
   */
  readonly fields: MovimientoExpedienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimientoExpediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimientoExpedienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fiscal<T extends FiscalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FiscalDefaultArgs<ExtArgs>>): Prisma__FiscalClient<$Result.GetResult<Prisma.$FiscalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expediente<T extends ExpedienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpedienteDefaultArgs<ExtArgs>>): Prisma__ExpedienteClient<$Result.GetResult<Prisma.$ExpedientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovimientoExpediente model
   */
  interface MovimientoExpedienteFieldRefs {
    readonly id: FieldRef<"MovimientoExpediente", 'Int'>
    readonly fecha: FieldRef<"MovimientoExpediente", 'DateTime'>
    readonly tipo: FieldRef<"MovimientoExpediente", 'String'>
    readonly motivo: FieldRef<"MovimientoExpediente", 'String'>
    readonly fiscalId: FieldRef<"MovimientoExpediente", 'Int'>
    readonly expedienteId: FieldRef<"MovimientoExpediente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MovimientoExpediente findUnique
   */
  export type MovimientoExpedienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoExpediente to fetch.
     */
    where: MovimientoExpedienteWhereUniqueInput
  }

  /**
   * MovimientoExpediente findUniqueOrThrow
   */
  export type MovimientoExpedienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoExpediente to fetch.
     */
    where: MovimientoExpedienteWhereUniqueInput
  }

  /**
   * MovimientoExpediente findFirst
   */
  export type MovimientoExpedienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoExpediente to fetch.
     */
    where?: MovimientoExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoExpedientes to fetch.
     */
    orderBy?: MovimientoExpedienteOrderByWithRelationInput | MovimientoExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoExpedientes.
     */
    cursor?: MovimientoExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoExpedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoExpedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoExpedientes.
     */
    distinct?: MovimientoExpedienteScalarFieldEnum | MovimientoExpedienteScalarFieldEnum[]
  }

  /**
   * MovimientoExpediente findFirstOrThrow
   */
  export type MovimientoExpedienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoExpediente to fetch.
     */
    where?: MovimientoExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoExpedientes to fetch.
     */
    orderBy?: MovimientoExpedienteOrderByWithRelationInput | MovimientoExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoExpedientes.
     */
    cursor?: MovimientoExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoExpedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoExpedientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoExpedientes.
     */
    distinct?: MovimientoExpedienteScalarFieldEnum | MovimientoExpedienteScalarFieldEnum[]
  }

  /**
   * MovimientoExpediente findMany
   */
  export type MovimientoExpedienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoExpedientes to fetch.
     */
    where?: MovimientoExpedienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoExpedientes to fetch.
     */
    orderBy?: MovimientoExpedienteOrderByWithRelationInput | MovimientoExpedienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimientoExpedientes.
     */
    cursor?: MovimientoExpedienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoExpedientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoExpedientes.
     */
    skip?: number
    distinct?: MovimientoExpedienteScalarFieldEnum | MovimientoExpedienteScalarFieldEnum[]
  }

  /**
   * MovimientoExpediente create
   */
  export type MovimientoExpedienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimientoExpediente.
     */
    data: XOR<MovimientoExpedienteCreateInput, MovimientoExpedienteUncheckedCreateInput>
  }

  /**
   * MovimientoExpediente createMany
   */
  export type MovimientoExpedienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimientoExpedientes.
     */
    data: MovimientoExpedienteCreateManyInput | MovimientoExpedienteCreateManyInput[]
  }

  /**
   * MovimientoExpediente update
   */
  export type MovimientoExpedienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimientoExpediente.
     */
    data: XOR<MovimientoExpedienteUpdateInput, MovimientoExpedienteUncheckedUpdateInput>
    /**
     * Choose, which MovimientoExpediente to update.
     */
    where: MovimientoExpedienteWhereUniqueInput
  }

  /**
   * MovimientoExpediente updateMany
   */
  export type MovimientoExpedienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimientoExpedientes.
     */
    data: XOR<MovimientoExpedienteUpdateManyMutationInput, MovimientoExpedienteUncheckedUpdateManyInput>
    /**
     * Filter which MovimientoExpedientes to update
     */
    where?: MovimientoExpedienteWhereInput
    /**
     * Limit how many MovimientoExpedientes to update.
     */
    limit?: number
  }

  /**
   * MovimientoExpediente upsert
   */
  export type MovimientoExpedienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimientoExpediente to update in case it exists.
     */
    where: MovimientoExpedienteWhereUniqueInput
    /**
     * In case the MovimientoExpediente found by the `where` argument doesn't exist, create a new MovimientoExpediente with this data.
     */
    create: XOR<MovimientoExpedienteCreateInput, MovimientoExpedienteUncheckedCreateInput>
    /**
     * In case the MovimientoExpediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimientoExpedienteUpdateInput, MovimientoExpedienteUncheckedUpdateInput>
  }

  /**
   * MovimientoExpediente delete
   */
  export type MovimientoExpedienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
    /**
     * Filter which MovimientoExpediente to delete.
     */
    where: MovimientoExpedienteWhereUniqueInput
  }

  /**
   * MovimientoExpediente deleteMany
   */
  export type MovimientoExpedienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoExpedientes to delete
     */
    where?: MovimientoExpedienteWhereInput
    /**
     * Limit how many MovimientoExpedientes to delete.
     */
    limit?: number
  }

  /**
   * MovimientoExpediente without action
   */
  export type MovimientoExpedienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoExpediente
     */
    select?: MovimientoExpedienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoExpediente
     */
    omit?: MovimientoExpedienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoExpedienteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FiscalScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password'
  };

  export type FiscalScalarFieldEnum = (typeof FiscalScalarFieldEnum)[keyof typeof FiscalScalarFieldEnum]


  export const EstadoExpedienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EstadoExpedienteScalarFieldEnum = (typeof EstadoExpedienteScalarFieldEnum)[keyof typeof EstadoExpedienteScalarFieldEnum]


  export const ExpedienteScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    fechaCreacion: 'fechaCreacion',
    estadoId: 'estadoId'
  };

  export type ExpedienteScalarFieldEnum = (typeof ExpedienteScalarFieldEnum)[keyof typeof ExpedienteScalarFieldEnum]


  export const MovimientoExpedienteScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    tipo: 'tipo',
    motivo: 'motivo',
    fiscalId: 'fiscalId',
    expedienteId: 'expedienteId'
  };

  export type MovimientoExpedienteScalarFieldEnum = (typeof MovimientoExpedienteScalarFieldEnum)[keyof typeof MovimientoExpedienteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FiscalWhereInput = {
    AND?: FiscalWhereInput | FiscalWhereInput[]
    OR?: FiscalWhereInput[]
    NOT?: FiscalWhereInput | FiscalWhereInput[]
    id?: IntFilter<"Fiscal"> | number
    nombre?: StringFilter<"Fiscal"> | string
    email?: StringFilter<"Fiscal"> | string
    password?: StringFilter<"Fiscal"> | string
    MovimientoExpediente?: MovimientoExpedienteListRelationFilter
  }

  export type FiscalOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    MovimientoExpediente?: MovimientoExpedienteOrderByRelationAggregateInput
  }

  export type FiscalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: FiscalWhereInput | FiscalWhereInput[]
    OR?: FiscalWhereInput[]
    NOT?: FiscalWhereInput | FiscalWhereInput[]
    nombre?: StringFilter<"Fiscal"> | string
    password?: StringFilter<"Fiscal"> | string
    MovimientoExpediente?: MovimientoExpedienteListRelationFilter
  }, "id" | "email">

  export type FiscalOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: FiscalCountOrderByAggregateInput
    _avg?: FiscalAvgOrderByAggregateInput
    _max?: FiscalMaxOrderByAggregateInput
    _min?: FiscalMinOrderByAggregateInput
    _sum?: FiscalSumOrderByAggregateInput
  }

  export type FiscalScalarWhereWithAggregatesInput = {
    AND?: FiscalScalarWhereWithAggregatesInput | FiscalScalarWhereWithAggregatesInput[]
    OR?: FiscalScalarWhereWithAggregatesInput[]
    NOT?: FiscalScalarWhereWithAggregatesInput | FiscalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fiscal"> | number
    nombre?: StringWithAggregatesFilter<"Fiscal"> | string
    email?: StringWithAggregatesFilter<"Fiscal"> | string
    password?: StringWithAggregatesFilter<"Fiscal"> | string
  }

  export type EstadoExpedienteWhereInput = {
    AND?: EstadoExpedienteWhereInput | EstadoExpedienteWhereInput[]
    OR?: EstadoExpedienteWhereInput[]
    NOT?: EstadoExpedienteWhereInput | EstadoExpedienteWhereInput[]
    id?: IntFilter<"EstadoExpediente"> | number
    nombre?: StringFilter<"EstadoExpediente"> | string
    Expediente?: ExpedienteListRelationFilter
  }

  export type EstadoExpedienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    Expediente?: ExpedienteOrderByRelationAggregateInput
  }

  export type EstadoExpedienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: EstadoExpedienteWhereInput | EstadoExpedienteWhereInput[]
    OR?: EstadoExpedienteWhereInput[]
    NOT?: EstadoExpedienteWhereInput | EstadoExpedienteWhereInput[]
    Expediente?: ExpedienteListRelationFilter
  }, "id" | "nombre">

  export type EstadoExpedienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: EstadoExpedienteCountOrderByAggregateInput
    _avg?: EstadoExpedienteAvgOrderByAggregateInput
    _max?: EstadoExpedienteMaxOrderByAggregateInput
    _min?: EstadoExpedienteMinOrderByAggregateInput
    _sum?: EstadoExpedienteSumOrderByAggregateInput
  }

  export type EstadoExpedienteScalarWhereWithAggregatesInput = {
    AND?: EstadoExpedienteScalarWhereWithAggregatesInput | EstadoExpedienteScalarWhereWithAggregatesInput[]
    OR?: EstadoExpedienteScalarWhereWithAggregatesInput[]
    NOT?: EstadoExpedienteScalarWhereWithAggregatesInput | EstadoExpedienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EstadoExpediente"> | number
    nombre?: StringWithAggregatesFilter<"EstadoExpediente"> | string
  }

  export type ExpedienteWhereInput = {
    AND?: ExpedienteWhereInput | ExpedienteWhereInput[]
    OR?: ExpedienteWhereInput[]
    NOT?: ExpedienteWhereInput | ExpedienteWhereInput[]
    id?: IntFilter<"Expediente"> | number
    numero?: StringFilter<"Expediente"> | string
    fechaCreacion?: DateTimeFilter<"Expediente"> | Date | string
    estadoId?: IntFilter<"Expediente"> | number
    estado?: XOR<EstadoExpedienteScalarRelationFilter, EstadoExpedienteWhereInput>
    movimientos?: MovimientoExpedienteListRelationFilter
  }

  export type ExpedienteOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    fechaCreacion?: SortOrder
    estadoId?: SortOrder
    estado?: EstadoExpedienteOrderByWithRelationInput
    movimientos?: MovimientoExpedienteOrderByRelationAggregateInput
  }

  export type ExpedienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero?: string
    AND?: ExpedienteWhereInput | ExpedienteWhereInput[]
    OR?: ExpedienteWhereInput[]
    NOT?: ExpedienteWhereInput | ExpedienteWhereInput[]
    fechaCreacion?: DateTimeFilter<"Expediente"> | Date | string
    estadoId?: IntFilter<"Expediente"> | number
    estado?: XOR<EstadoExpedienteScalarRelationFilter, EstadoExpedienteWhereInput>
    movimientos?: MovimientoExpedienteListRelationFilter
  }, "id" | "numero">

  export type ExpedienteOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    fechaCreacion?: SortOrder
    estadoId?: SortOrder
    _count?: ExpedienteCountOrderByAggregateInput
    _avg?: ExpedienteAvgOrderByAggregateInput
    _max?: ExpedienteMaxOrderByAggregateInput
    _min?: ExpedienteMinOrderByAggregateInput
    _sum?: ExpedienteSumOrderByAggregateInput
  }

  export type ExpedienteScalarWhereWithAggregatesInput = {
    AND?: ExpedienteScalarWhereWithAggregatesInput | ExpedienteScalarWhereWithAggregatesInput[]
    OR?: ExpedienteScalarWhereWithAggregatesInput[]
    NOT?: ExpedienteScalarWhereWithAggregatesInput | ExpedienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expediente"> | number
    numero?: StringWithAggregatesFilter<"Expediente"> | string
    fechaCreacion?: DateTimeWithAggregatesFilter<"Expediente"> | Date | string
    estadoId?: IntWithAggregatesFilter<"Expediente"> | number
  }

  export type MovimientoExpedienteWhereInput = {
    AND?: MovimientoExpedienteWhereInput | MovimientoExpedienteWhereInput[]
    OR?: MovimientoExpedienteWhereInput[]
    NOT?: MovimientoExpedienteWhereInput | MovimientoExpedienteWhereInput[]
    id?: IntFilter<"MovimientoExpediente"> | number
    fecha?: DateTimeFilter<"MovimientoExpediente"> | Date | string
    tipo?: StringFilter<"MovimientoExpediente"> | string
    motivo?: StringNullableFilter<"MovimientoExpediente"> | string | null
    fiscalId?: IntFilter<"MovimientoExpediente"> | number
    expedienteId?: IntFilter<"MovimientoExpediente"> | number
    fiscal?: XOR<FiscalScalarRelationFilter, FiscalWhereInput>
    expediente?: XOR<ExpedienteScalarRelationFilter, ExpedienteWhereInput>
  }

  export type MovimientoExpedienteOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipo?: SortOrder
    motivo?: SortOrderInput | SortOrder
    fiscalId?: SortOrder
    expedienteId?: SortOrder
    fiscal?: FiscalOrderByWithRelationInput
    expediente?: ExpedienteOrderByWithRelationInput
  }

  export type MovimientoExpedienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovimientoExpedienteWhereInput | MovimientoExpedienteWhereInput[]
    OR?: MovimientoExpedienteWhereInput[]
    NOT?: MovimientoExpedienteWhereInput | MovimientoExpedienteWhereInput[]
    fecha?: DateTimeFilter<"MovimientoExpediente"> | Date | string
    tipo?: StringFilter<"MovimientoExpediente"> | string
    motivo?: StringNullableFilter<"MovimientoExpediente"> | string | null
    fiscalId?: IntFilter<"MovimientoExpediente"> | number
    expedienteId?: IntFilter<"MovimientoExpediente"> | number
    fiscal?: XOR<FiscalScalarRelationFilter, FiscalWhereInput>
    expediente?: XOR<ExpedienteScalarRelationFilter, ExpedienteWhereInput>
  }, "id">

  export type MovimientoExpedienteOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipo?: SortOrder
    motivo?: SortOrderInput | SortOrder
    fiscalId?: SortOrder
    expedienteId?: SortOrder
    _count?: MovimientoExpedienteCountOrderByAggregateInput
    _avg?: MovimientoExpedienteAvgOrderByAggregateInput
    _max?: MovimientoExpedienteMaxOrderByAggregateInput
    _min?: MovimientoExpedienteMinOrderByAggregateInput
    _sum?: MovimientoExpedienteSumOrderByAggregateInput
  }

  export type MovimientoExpedienteScalarWhereWithAggregatesInput = {
    AND?: MovimientoExpedienteScalarWhereWithAggregatesInput | MovimientoExpedienteScalarWhereWithAggregatesInput[]
    OR?: MovimientoExpedienteScalarWhereWithAggregatesInput[]
    NOT?: MovimientoExpedienteScalarWhereWithAggregatesInput | MovimientoExpedienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MovimientoExpediente"> | number
    fecha?: DateTimeWithAggregatesFilter<"MovimientoExpediente"> | Date | string
    tipo?: StringWithAggregatesFilter<"MovimientoExpediente"> | string
    motivo?: StringNullableWithAggregatesFilter<"MovimientoExpediente"> | string | null
    fiscalId?: IntWithAggregatesFilter<"MovimientoExpediente"> | number
    expedienteId?: IntWithAggregatesFilter<"MovimientoExpediente"> | number
  }

  export type FiscalCreateInput = {
    nombre: string
    email: string
    password: string
    MovimientoExpediente?: MovimientoExpedienteCreateNestedManyWithoutFiscalInput
  }

  export type FiscalUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password: string
    MovimientoExpediente?: MovimientoExpedienteUncheckedCreateNestedManyWithoutFiscalInput
  }

  export type FiscalUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    MovimientoExpediente?: MovimientoExpedienteUpdateManyWithoutFiscalNestedInput
  }

  export type FiscalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    MovimientoExpediente?: MovimientoExpedienteUncheckedUpdateManyWithoutFiscalNestedInput
  }

  export type FiscalCreateManyInput = {
    nombre: string
    email: string
    password: string
  }

  export type FiscalUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FiscalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoExpedienteCreateInput = {
    nombre: string
    Expediente?: ExpedienteCreateNestedManyWithoutEstadoInput
  }

  export type EstadoExpedienteUncheckedCreateInput = {
    id?: number
    nombre: string
    Expediente?: ExpedienteUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type EstadoExpedienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    Expediente?: ExpedienteUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoExpedienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    Expediente?: ExpedienteUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoExpedienteCreateManyInput = {
    nombre: string
  }

  export type EstadoExpedienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoExpedienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedienteCreateInput = {
    numero: string
    fechaCreacion?: Date | string
    estado: EstadoExpedienteCreateNestedOneWithoutExpedienteInput
    movimientos?: MovimientoExpedienteCreateNestedManyWithoutExpedienteInput
  }

  export type ExpedienteUncheckedCreateInput = {
    id?: number
    numero: string
    fechaCreacion?: Date | string
    estadoId: number
    movimientos?: MovimientoExpedienteUncheckedCreateNestedManyWithoutExpedienteInput
  }

  export type ExpedienteUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EstadoExpedienteUpdateOneRequiredWithoutExpedienteNestedInput
    movimientos?: MovimientoExpedienteUpdateManyWithoutExpedienteNestedInput
  }

  export type ExpedienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estadoId?: IntFieldUpdateOperationsInput | number
    movimientos?: MovimientoExpedienteUncheckedUpdateManyWithoutExpedienteNestedInput
  }

  export type ExpedienteCreateManyInput = {
    numero: string
    fechaCreacion?: Date | string
    estadoId: number
  }

  export type ExpedienteUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpedienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estadoId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimientoExpedienteCreateInput = {
    fecha?: Date | string
    tipo: string
    motivo?: string | null
    fiscal: FiscalCreateNestedOneWithoutMovimientoExpedienteInput
    expediente: ExpedienteCreateNestedOneWithoutMovimientosInput
  }

  export type MovimientoExpedienteUncheckedCreateInput = {
    id?: number
    fecha?: Date | string
    tipo: string
    motivo?: string | null
    fiscalId: number
    expedienteId: number
  }

  export type MovimientoExpedienteUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: FiscalUpdateOneRequiredWithoutMovimientoExpedienteNestedInput
    expediente?: ExpedienteUpdateOneRequiredWithoutMovimientosNestedInput
  }

  export type MovimientoExpedienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalId?: IntFieldUpdateOperationsInput | number
    expedienteId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimientoExpedienteCreateManyInput = {
    fecha?: Date | string
    tipo: string
    motivo?: string | null
    fiscalId: number
    expedienteId: number
  }

  export type MovimientoExpedienteUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimientoExpedienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalId?: IntFieldUpdateOperationsInput | number
    expedienteId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MovimientoExpedienteListRelationFilter = {
    every?: MovimientoExpedienteWhereInput
    some?: MovimientoExpedienteWhereInput
    none?: MovimientoExpedienteWhereInput
  }

  export type MovimientoExpedienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FiscalCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type FiscalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FiscalMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type FiscalMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type FiscalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ExpedienteListRelationFilter = {
    every?: ExpedienteWhereInput
    some?: ExpedienteWhereInput
    none?: ExpedienteWhereInput
  }

  export type ExpedienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstadoExpedienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstadoExpedienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstadoExpedienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstadoExpedienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstadoExpedienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EstadoExpedienteScalarRelationFilter = {
    is?: EstadoExpedienteWhereInput
    isNot?: EstadoExpedienteWhereInput
  }

  export type ExpedienteCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    fechaCreacion?: SortOrder
    estadoId?: SortOrder
  }

  export type ExpedienteAvgOrderByAggregateInput = {
    id?: SortOrder
    estadoId?: SortOrder
  }

  export type ExpedienteMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    fechaCreacion?: SortOrder
    estadoId?: SortOrder
  }

  export type ExpedienteMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    fechaCreacion?: SortOrder
    estadoId?: SortOrder
  }

  export type ExpedienteSumOrderByAggregateInput = {
    id?: SortOrder
    estadoId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FiscalScalarRelationFilter = {
    is?: FiscalWhereInput
    isNot?: FiscalWhereInput
  }

  export type ExpedienteScalarRelationFilter = {
    is?: ExpedienteWhereInput
    isNot?: ExpedienteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MovimientoExpedienteCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipo?: SortOrder
    motivo?: SortOrder
    fiscalId?: SortOrder
    expedienteId?: SortOrder
  }

  export type MovimientoExpedienteAvgOrderByAggregateInput = {
    id?: SortOrder
    fiscalId?: SortOrder
    expedienteId?: SortOrder
  }

  export type MovimientoExpedienteMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipo?: SortOrder
    motivo?: SortOrder
    fiscalId?: SortOrder
    expedienteId?: SortOrder
  }

  export type MovimientoExpedienteMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    tipo?: SortOrder
    motivo?: SortOrder
    fiscalId?: SortOrder
    expedienteId?: SortOrder
  }

  export type MovimientoExpedienteSumOrderByAggregateInput = {
    id?: SortOrder
    fiscalId?: SortOrder
    expedienteId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MovimientoExpedienteCreateNestedManyWithoutFiscalInput = {
    create?: XOR<MovimientoExpedienteCreateWithoutFiscalInput, MovimientoExpedienteUncheckedCreateWithoutFiscalInput> | MovimientoExpedienteCreateWithoutFiscalInput[] | MovimientoExpedienteUncheckedCreateWithoutFiscalInput[]
    connectOrCreate?: MovimientoExpedienteCreateOrConnectWithoutFiscalInput | MovimientoExpedienteCreateOrConnectWithoutFiscalInput[]
    createMany?: MovimientoExpedienteCreateManyFiscalInputEnvelope
    connect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
  }

  export type MovimientoExpedienteUncheckedCreateNestedManyWithoutFiscalInput = {
    create?: XOR<MovimientoExpedienteCreateWithoutFiscalInput, MovimientoExpedienteUncheckedCreateWithoutFiscalInput> | MovimientoExpedienteCreateWithoutFiscalInput[] | MovimientoExpedienteUncheckedCreateWithoutFiscalInput[]
    connectOrCreate?: MovimientoExpedienteCreateOrConnectWithoutFiscalInput | MovimientoExpedienteCreateOrConnectWithoutFiscalInput[]
    createMany?: MovimientoExpedienteCreateManyFiscalInputEnvelope
    connect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MovimientoExpedienteUpdateManyWithoutFiscalNestedInput = {
    create?: XOR<MovimientoExpedienteCreateWithoutFiscalInput, MovimientoExpedienteUncheckedCreateWithoutFiscalInput> | MovimientoExpedienteCreateWithoutFiscalInput[] | MovimientoExpedienteUncheckedCreateWithoutFiscalInput[]
    connectOrCreate?: MovimientoExpedienteCreateOrConnectWithoutFiscalInput | MovimientoExpedienteCreateOrConnectWithoutFiscalInput[]
    upsert?: MovimientoExpedienteUpsertWithWhereUniqueWithoutFiscalInput | MovimientoExpedienteUpsertWithWhereUniqueWithoutFiscalInput[]
    createMany?: MovimientoExpedienteCreateManyFiscalInputEnvelope
    set?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    disconnect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    delete?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    connect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    update?: MovimientoExpedienteUpdateWithWhereUniqueWithoutFiscalInput | MovimientoExpedienteUpdateWithWhereUniqueWithoutFiscalInput[]
    updateMany?: MovimientoExpedienteUpdateManyWithWhereWithoutFiscalInput | MovimientoExpedienteUpdateManyWithWhereWithoutFiscalInput[]
    deleteMany?: MovimientoExpedienteScalarWhereInput | MovimientoExpedienteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovimientoExpedienteUncheckedUpdateManyWithoutFiscalNestedInput = {
    create?: XOR<MovimientoExpedienteCreateWithoutFiscalInput, MovimientoExpedienteUncheckedCreateWithoutFiscalInput> | MovimientoExpedienteCreateWithoutFiscalInput[] | MovimientoExpedienteUncheckedCreateWithoutFiscalInput[]
    connectOrCreate?: MovimientoExpedienteCreateOrConnectWithoutFiscalInput | MovimientoExpedienteCreateOrConnectWithoutFiscalInput[]
    upsert?: MovimientoExpedienteUpsertWithWhereUniqueWithoutFiscalInput | MovimientoExpedienteUpsertWithWhereUniqueWithoutFiscalInput[]
    createMany?: MovimientoExpedienteCreateManyFiscalInputEnvelope
    set?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    disconnect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    delete?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    connect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    update?: MovimientoExpedienteUpdateWithWhereUniqueWithoutFiscalInput | MovimientoExpedienteUpdateWithWhereUniqueWithoutFiscalInput[]
    updateMany?: MovimientoExpedienteUpdateManyWithWhereWithoutFiscalInput | MovimientoExpedienteUpdateManyWithWhereWithoutFiscalInput[]
    deleteMany?: MovimientoExpedienteScalarWhereInput | MovimientoExpedienteScalarWhereInput[]
  }

  export type ExpedienteCreateNestedManyWithoutEstadoInput = {
    create?: XOR<ExpedienteCreateWithoutEstadoInput, ExpedienteUncheckedCreateWithoutEstadoInput> | ExpedienteCreateWithoutEstadoInput[] | ExpedienteUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutEstadoInput | ExpedienteCreateOrConnectWithoutEstadoInput[]
    createMany?: ExpedienteCreateManyEstadoInputEnvelope
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
  }

  export type ExpedienteUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<ExpedienteCreateWithoutEstadoInput, ExpedienteUncheckedCreateWithoutEstadoInput> | ExpedienteCreateWithoutEstadoInput[] | ExpedienteUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutEstadoInput | ExpedienteCreateOrConnectWithoutEstadoInput[]
    createMany?: ExpedienteCreateManyEstadoInputEnvelope
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
  }

  export type ExpedienteUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<ExpedienteCreateWithoutEstadoInput, ExpedienteUncheckedCreateWithoutEstadoInput> | ExpedienteCreateWithoutEstadoInput[] | ExpedienteUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutEstadoInput | ExpedienteCreateOrConnectWithoutEstadoInput[]
    upsert?: ExpedienteUpsertWithWhereUniqueWithoutEstadoInput | ExpedienteUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: ExpedienteCreateManyEstadoInputEnvelope
    set?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    disconnect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    delete?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    update?: ExpedienteUpdateWithWhereUniqueWithoutEstadoInput | ExpedienteUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: ExpedienteUpdateManyWithWhereWithoutEstadoInput | ExpedienteUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: ExpedienteScalarWhereInput | ExpedienteScalarWhereInput[]
  }

  export type ExpedienteUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<ExpedienteCreateWithoutEstadoInput, ExpedienteUncheckedCreateWithoutEstadoInput> | ExpedienteCreateWithoutEstadoInput[] | ExpedienteUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: ExpedienteCreateOrConnectWithoutEstadoInput | ExpedienteCreateOrConnectWithoutEstadoInput[]
    upsert?: ExpedienteUpsertWithWhereUniqueWithoutEstadoInput | ExpedienteUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: ExpedienteCreateManyEstadoInputEnvelope
    set?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    disconnect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    delete?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    connect?: ExpedienteWhereUniqueInput | ExpedienteWhereUniqueInput[]
    update?: ExpedienteUpdateWithWhereUniqueWithoutEstadoInput | ExpedienteUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: ExpedienteUpdateManyWithWhereWithoutEstadoInput | ExpedienteUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: ExpedienteScalarWhereInput | ExpedienteScalarWhereInput[]
  }

  export type EstadoExpedienteCreateNestedOneWithoutExpedienteInput = {
    create?: XOR<EstadoExpedienteCreateWithoutExpedienteInput, EstadoExpedienteUncheckedCreateWithoutExpedienteInput>
    connectOrCreate?: EstadoExpedienteCreateOrConnectWithoutExpedienteInput
    connect?: EstadoExpedienteWhereUniqueInput
  }

  export type MovimientoExpedienteCreateNestedManyWithoutExpedienteInput = {
    create?: XOR<MovimientoExpedienteCreateWithoutExpedienteInput, MovimientoExpedienteUncheckedCreateWithoutExpedienteInput> | MovimientoExpedienteCreateWithoutExpedienteInput[] | MovimientoExpedienteUncheckedCreateWithoutExpedienteInput[]
    connectOrCreate?: MovimientoExpedienteCreateOrConnectWithoutExpedienteInput | MovimientoExpedienteCreateOrConnectWithoutExpedienteInput[]
    createMany?: MovimientoExpedienteCreateManyExpedienteInputEnvelope
    connect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
  }

  export type MovimientoExpedienteUncheckedCreateNestedManyWithoutExpedienteInput = {
    create?: XOR<MovimientoExpedienteCreateWithoutExpedienteInput, MovimientoExpedienteUncheckedCreateWithoutExpedienteInput> | MovimientoExpedienteCreateWithoutExpedienteInput[] | MovimientoExpedienteUncheckedCreateWithoutExpedienteInput[]
    connectOrCreate?: MovimientoExpedienteCreateOrConnectWithoutExpedienteInput | MovimientoExpedienteCreateOrConnectWithoutExpedienteInput[]
    createMany?: MovimientoExpedienteCreateManyExpedienteInputEnvelope
    connect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EstadoExpedienteUpdateOneRequiredWithoutExpedienteNestedInput = {
    create?: XOR<EstadoExpedienteCreateWithoutExpedienteInput, EstadoExpedienteUncheckedCreateWithoutExpedienteInput>
    connectOrCreate?: EstadoExpedienteCreateOrConnectWithoutExpedienteInput
    upsert?: EstadoExpedienteUpsertWithoutExpedienteInput
    connect?: EstadoExpedienteWhereUniqueInput
    update?: XOR<XOR<EstadoExpedienteUpdateToOneWithWhereWithoutExpedienteInput, EstadoExpedienteUpdateWithoutExpedienteInput>, EstadoExpedienteUncheckedUpdateWithoutExpedienteInput>
  }

  export type MovimientoExpedienteUpdateManyWithoutExpedienteNestedInput = {
    create?: XOR<MovimientoExpedienteCreateWithoutExpedienteInput, MovimientoExpedienteUncheckedCreateWithoutExpedienteInput> | MovimientoExpedienteCreateWithoutExpedienteInput[] | MovimientoExpedienteUncheckedCreateWithoutExpedienteInput[]
    connectOrCreate?: MovimientoExpedienteCreateOrConnectWithoutExpedienteInput | MovimientoExpedienteCreateOrConnectWithoutExpedienteInput[]
    upsert?: MovimientoExpedienteUpsertWithWhereUniqueWithoutExpedienteInput | MovimientoExpedienteUpsertWithWhereUniqueWithoutExpedienteInput[]
    createMany?: MovimientoExpedienteCreateManyExpedienteInputEnvelope
    set?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    disconnect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    delete?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    connect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    update?: MovimientoExpedienteUpdateWithWhereUniqueWithoutExpedienteInput | MovimientoExpedienteUpdateWithWhereUniqueWithoutExpedienteInput[]
    updateMany?: MovimientoExpedienteUpdateManyWithWhereWithoutExpedienteInput | MovimientoExpedienteUpdateManyWithWhereWithoutExpedienteInput[]
    deleteMany?: MovimientoExpedienteScalarWhereInput | MovimientoExpedienteScalarWhereInput[]
  }

  export type MovimientoExpedienteUncheckedUpdateManyWithoutExpedienteNestedInput = {
    create?: XOR<MovimientoExpedienteCreateWithoutExpedienteInput, MovimientoExpedienteUncheckedCreateWithoutExpedienteInput> | MovimientoExpedienteCreateWithoutExpedienteInput[] | MovimientoExpedienteUncheckedCreateWithoutExpedienteInput[]
    connectOrCreate?: MovimientoExpedienteCreateOrConnectWithoutExpedienteInput | MovimientoExpedienteCreateOrConnectWithoutExpedienteInput[]
    upsert?: MovimientoExpedienteUpsertWithWhereUniqueWithoutExpedienteInput | MovimientoExpedienteUpsertWithWhereUniqueWithoutExpedienteInput[]
    createMany?: MovimientoExpedienteCreateManyExpedienteInputEnvelope
    set?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    disconnect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    delete?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    connect?: MovimientoExpedienteWhereUniqueInput | MovimientoExpedienteWhereUniqueInput[]
    update?: MovimientoExpedienteUpdateWithWhereUniqueWithoutExpedienteInput | MovimientoExpedienteUpdateWithWhereUniqueWithoutExpedienteInput[]
    updateMany?: MovimientoExpedienteUpdateManyWithWhereWithoutExpedienteInput | MovimientoExpedienteUpdateManyWithWhereWithoutExpedienteInput[]
    deleteMany?: MovimientoExpedienteScalarWhereInput | MovimientoExpedienteScalarWhereInput[]
  }

  export type FiscalCreateNestedOneWithoutMovimientoExpedienteInput = {
    create?: XOR<FiscalCreateWithoutMovimientoExpedienteInput, FiscalUncheckedCreateWithoutMovimientoExpedienteInput>
    connectOrCreate?: FiscalCreateOrConnectWithoutMovimientoExpedienteInput
    connect?: FiscalWhereUniqueInput
  }

  export type ExpedienteCreateNestedOneWithoutMovimientosInput = {
    create?: XOR<ExpedienteCreateWithoutMovimientosInput, ExpedienteUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: ExpedienteCreateOrConnectWithoutMovimientosInput
    connect?: ExpedienteWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FiscalUpdateOneRequiredWithoutMovimientoExpedienteNestedInput = {
    create?: XOR<FiscalCreateWithoutMovimientoExpedienteInput, FiscalUncheckedCreateWithoutMovimientoExpedienteInput>
    connectOrCreate?: FiscalCreateOrConnectWithoutMovimientoExpedienteInput
    upsert?: FiscalUpsertWithoutMovimientoExpedienteInput
    connect?: FiscalWhereUniqueInput
    update?: XOR<XOR<FiscalUpdateToOneWithWhereWithoutMovimientoExpedienteInput, FiscalUpdateWithoutMovimientoExpedienteInput>, FiscalUncheckedUpdateWithoutMovimientoExpedienteInput>
  }

  export type ExpedienteUpdateOneRequiredWithoutMovimientosNestedInput = {
    create?: XOR<ExpedienteCreateWithoutMovimientosInput, ExpedienteUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: ExpedienteCreateOrConnectWithoutMovimientosInput
    upsert?: ExpedienteUpsertWithoutMovimientosInput
    connect?: ExpedienteWhereUniqueInput
    update?: XOR<XOR<ExpedienteUpdateToOneWithWhereWithoutMovimientosInput, ExpedienteUpdateWithoutMovimientosInput>, ExpedienteUncheckedUpdateWithoutMovimientosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MovimientoExpedienteCreateWithoutFiscalInput = {
    fecha?: Date | string
    tipo: string
    motivo?: string | null
    expediente: ExpedienteCreateNestedOneWithoutMovimientosInput
  }

  export type MovimientoExpedienteUncheckedCreateWithoutFiscalInput = {
    id?: number
    fecha?: Date | string
    tipo: string
    motivo?: string | null
    expedienteId: number
  }

  export type MovimientoExpedienteCreateOrConnectWithoutFiscalInput = {
    where: MovimientoExpedienteWhereUniqueInput
    create: XOR<MovimientoExpedienteCreateWithoutFiscalInput, MovimientoExpedienteUncheckedCreateWithoutFiscalInput>
  }

  export type MovimientoExpedienteCreateManyFiscalInputEnvelope = {
    data: MovimientoExpedienteCreateManyFiscalInput | MovimientoExpedienteCreateManyFiscalInput[]
  }

  export type MovimientoExpedienteUpsertWithWhereUniqueWithoutFiscalInput = {
    where: MovimientoExpedienteWhereUniqueInput
    update: XOR<MovimientoExpedienteUpdateWithoutFiscalInput, MovimientoExpedienteUncheckedUpdateWithoutFiscalInput>
    create: XOR<MovimientoExpedienteCreateWithoutFiscalInput, MovimientoExpedienteUncheckedCreateWithoutFiscalInput>
  }

  export type MovimientoExpedienteUpdateWithWhereUniqueWithoutFiscalInput = {
    where: MovimientoExpedienteWhereUniqueInput
    data: XOR<MovimientoExpedienteUpdateWithoutFiscalInput, MovimientoExpedienteUncheckedUpdateWithoutFiscalInput>
  }

  export type MovimientoExpedienteUpdateManyWithWhereWithoutFiscalInput = {
    where: MovimientoExpedienteScalarWhereInput
    data: XOR<MovimientoExpedienteUpdateManyMutationInput, MovimientoExpedienteUncheckedUpdateManyWithoutFiscalInput>
  }

  export type MovimientoExpedienteScalarWhereInput = {
    AND?: MovimientoExpedienteScalarWhereInput | MovimientoExpedienteScalarWhereInput[]
    OR?: MovimientoExpedienteScalarWhereInput[]
    NOT?: MovimientoExpedienteScalarWhereInput | MovimientoExpedienteScalarWhereInput[]
    id?: IntFilter<"MovimientoExpediente"> | number
    fecha?: DateTimeFilter<"MovimientoExpediente"> | Date | string
    tipo?: StringFilter<"MovimientoExpediente"> | string
    motivo?: StringNullableFilter<"MovimientoExpediente"> | string | null
    fiscalId?: IntFilter<"MovimientoExpediente"> | number
    expedienteId?: IntFilter<"MovimientoExpediente"> | number
  }

  export type ExpedienteCreateWithoutEstadoInput = {
    numero: string
    fechaCreacion?: Date | string
    movimientos?: MovimientoExpedienteCreateNestedManyWithoutExpedienteInput
  }

  export type ExpedienteUncheckedCreateWithoutEstadoInput = {
    id?: number
    numero: string
    fechaCreacion?: Date | string
    movimientos?: MovimientoExpedienteUncheckedCreateNestedManyWithoutExpedienteInput
  }

  export type ExpedienteCreateOrConnectWithoutEstadoInput = {
    where: ExpedienteWhereUniqueInput
    create: XOR<ExpedienteCreateWithoutEstadoInput, ExpedienteUncheckedCreateWithoutEstadoInput>
  }

  export type ExpedienteCreateManyEstadoInputEnvelope = {
    data: ExpedienteCreateManyEstadoInput | ExpedienteCreateManyEstadoInput[]
  }

  export type ExpedienteUpsertWithWhereUniqueWithoutEstadoInput = {
    where: ExpedienteWhereUniqueInput
    update: XOR<ExpedienteUpdateWithoutEstadoInput, ExpedienteUncheckedUpdateWithoutEstadoInput>
    create: XOR<ExpedienteCreateWithoutEstadoInput, ExpedienteUncheckedCreateWithoutEstadoInput>
  }

  export type ExpedienteUpdateWithWhereUniqueWithoutEstadoInput = {
    where: ExpedienteWhereUniqueInput
    data: XOR<ExpedienteUpdateWithoutEstadoInput, ExpedienteUncheckedUpdateWithoutEstadoInput>
  }

  export type ExpedienteUpdateManyWithWhereWithoutEstadoInput = {
    where: ExpedienteScalarWhereInput
    data: XOR<ExpedienteUpdateManyMutationInput, ExpedienteUncheckedUpdateManyWithoutEstadoInput>
  }

  export type ExpedienteScalarWhereInput = {
    AND?: ExpedienteScalarWhereInput | ExpedienteScalarWhereInput[]
    OR?: ExpedienteScalarWhereInput[]
    NOT?: ExpedienteScalarWhereInput | ExpedienteScalarWhereInput[]
    id?: IntFilter<"Expediente"> | number
    numero?: StringFilter<"Expediente"> | string
    fechaCreacion?: DateTimeFilter<"Expediente"> | Date | string
    estadoId?: IntFilter<"Expediente"> | number
  }

  export type EstadoExpedienteCreateWithoutExpedienteInput = {
    nombre: string
  }

  export type EstadoExpedienteUncheckedCreateWithoutExpedienteInput = {
    id?: number
    nombre: string
  }

  export type EstadoExpedienteCreateOrConnectWithoutExpedienteInput = {
    where: EstadoExpedienteWhereUniqueInput
    create: XOR<EstadoExpedienteCreateWithoutExpedienteInput, EstadoExpedienteUncheckedCreateWithoutExpedienteInput>
  }

  export type MovimientoExpedienteCreateWithoutExpedienteInput = {
    fecha?: Date | string
    tipo: string
    motivo?: string | null
    fiscal: FiscalCreateNestedOneWithoutMovimientoExpedienteInput
  }

  export type MovimientoExpedienteUncheckedCreateWithoutExpedienteInput = {
    id?: number
    fecha?: Date | string
    tipo: string
    motivo?: string | null
    fiscalId: number
  }

  export type MovimientoExpedienteCreateOrConnectWithoutExpedienteInput = {
    where: MovimientoExpedienteWhereUniqueInput
    create: XOR<MovimientoExpedienteCreateWithoutExpedienteInput, MovimientoExpedienteUncheckedCreateWithoutExpedienteInput>
  }

  export type MovimientoExpedienteCreateManyExpedienteInputEnvelope = {
    data: MovimientoExpedienteCreateManyExpedienteInput | MovimientoExpedienteCreateManyExpedienteInput[]
  }

  export type EstadoExpedienteUpsertWithoutExpedienteInput = {
    update: XOR<EstadoExpedienteUpdateWithoutExpedienteInput, EstadoExpedienteUncheckedUpdateWithoutExpedienteInput>
    create: XOR<EstadoExpedienteCreateWithoutExpedienteInput, EstadoExpedienteUncheckedCreateWithoutExpedienteInput>
    where?: EstadoExpedienteWhereInput
  }

  export type EstadoExpedienteUpdateToOneWithWhereWithoutExpedienteInput = {
    where?: EstadoExpedienteWhereInput
    data: XOR<EstadoExpedienteUpdateWithoutExpedienteInput, EstadoExpedienteUncheckedUpdateWithoutExpedienteInput>
  }

  export type EstadoExpedienteUpdateWithoutExpedienteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoExpedienteUncheckedUpdateWithoutExpedienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MovimientoExpedienteUpsertWithWhereUniqueWithoutExpedienteInput = {
    where: MovimientoExpedienteWhereUniqueInput
    update: XOR<MovimientoExpedienteUpdateWithoutExpedienteInput, MovimientoExpedienteUncheckedUpdateWithoutExpedienteInput>
    create: XOR<MovimientoExpedienteCreateWithoutExpedienteInput, MovimientoExpedienteUncheckedCreateWithoutExpedienteInput>
  }

  export type MovimientoExpedienteUpdateWithWhereUniqueWithoutExpedienteInput = {
    where: MovimientoExpedienteWhereUniqueInput
    data: XOR<MovimientoExpedienteUpdateWithoutExpedienteInput, MovimientoExpedienteUncheckedUpdateWithoutExpedienteInput>
  }

  export type MovimientoExpedienteUpdateManyWithWhereWithoutExpedienteInput = {
    where: MovimientoExpedienteScalarWhereInput
    data: XOR<MovimientoExpedienteUpdateManyMutationInput, MovimientoExpedienteUncheckedUpdateManyWithoutExpedienteInput>
  }

  export type FiscalCreateWithoutMovimientoExpedienteInput = {
    nombre: string
    email: string
    password: string
  }

  export type FiscalUncheckedCreateWithoutMovimientoExpedienteInput = {
    id?: number
    nombre: string
    email: string
    password: string
  }

  export type FiscalCreateOrConnectWithoutMovimientoExpedienteInput = {
    where: FiscalWhereUniqueInput
    create: XOR<FiscalCreateWithoutMovimientoExpedienteInput, FiscalUncheckedCreateWithoutMovimientoExpedienteInput>
  }

  export type ExpedienteCreateWithoutMovimientosInput = {
    numero: string
    fechaCreacion?: Date | string
    estado: EstadoExpedienteCreateNestedOneWithoutExpedienteInput
  }

  export type ExpedienteUncheckedCreateWithoutMovimientosInput = {
    id?: number
    numero: string
    fechaCreacion?: Date | string
    estadoId: number
  }

  export type ExpedienteCreateOrConnectWithoutMovimientosInput = {
    where: ExpedienteWhereUniqueInput
    create: XOR<ExpedienteCreateWithoutMovimientosInput, ExpedienteUncheckedCreateWithoutMovimientosInput>
  }

  export type FiscalUpsertWithoutMovimientoExpedienteInput = {
    update: XOR<FiscalUpdateWithoutMovimientoExpedienteInput, FiscalUncheckedUpdateWithoutMovimientoExpedienteInput>
    create: XOR<FiscalCreateWithoutMovimientoExpedienteInput, FiscalUncheckedCreateWithoutMovimientoExpedienteInput>
    where?: FiscalWhereInput
  }

  export type FiscalUpdateToOneWithWhereWithoutMovimientoExpedienteInput = {
    where?: FiscalWhereInput
    data: XOR<FiscalUpdateWithoutMovimientoExpedienteInput, FiscalUncheckedUpdateWithoutMovimientoExpedienteInput>
  }

  export type FiscalUpdateWithoutMovimientoExpedienteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FiscalUncheckedUpdateWithoutMovimientoExpedienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedienteUpsertWithoutMovimientosInput = {
    update: XOR<ExpedienteUpdateWithoutMovimientosInput, ExpedienteUncheckedUpdateWithoutMovimientosInput>
    create: XOR<ExpedienteCreateWithoutMovimientosInput, ExpedienteUncheckedCreateWithoutMovimientosInput>
    where?: ExpedienteWhereInput
  }

  export type ExpedienteUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: ExpedienteWhereInput
    data: XOR<ExpedienteUpdateWithoutMovimientosInput, ExpedienteUncheckedUpdateWithoutMovimientosInput>
  }

  export type ExpedienteUpdateWithoutMovimientosInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EstadoExpedienteUpdateOneRequiredWithoutExpedienteNestedInput
  }

  export type ExpedienteUncheckedUpdateWithoutMovimientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estadoId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimientoExpedienteCreateManyFiscalInput = {
    fecha?: Date | string
    tipo: string
    motivo?: string | null
    expedienteId: number
  }

  export type MovimientoExpedienteUpdateWithoutFiscalInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    expediente?: ExpedienteUpdateOneRequiredWithoutMovimientosNestedInput
  }

  export type MovimientoExpedienteUncheckedUpdateWithoutFiscalInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    expedienteId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimientoExpedienteUncheckedUpdateManyWithoutFiscalInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    expedienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpedienteCreateManyEstadoInput = {
    numero: string
    fechaCreacion?: Date | string
  }

  export type ExpedienteUpdateWithoutEstadoInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientos?: MovimientoExpedienteUpdateManyWithoutExpedienteNestedInput
  }

  export type ExpedienteUncheckedUpdateWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientos?: MovimientoExpedienteUncheckedUpdateManyWithoutExpedienteNestedInput
  }

  export type ExpedienteUncheckedUpdateManyWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoExpedienteCreateManyExpedienteInput = {
    fecha?: Date | string
    tipo: string
    motivo?: string | null
    fiscalId: number
  }

  export type MovimientoExpedienteUpdateWithoutExpedienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal?: FiscalUpdateOneRequiredWithoutMovimientoExpedienteNestedInput
  }

  export type MovimientoExpedienteUncheckedUpdateWithoutExpedienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimientoExpedienteUncheckedUpdateManyWithoutExpedienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalId?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.BaseDMMF
}