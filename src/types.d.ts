/**
 * Function of any kind.
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * Type of items in an array.
 */
export type ArrayItem<T> = T extends (infer I)[] ? I : never;

/**
 * Any object.
 */
export type AnyObject<T extends object = {}> = { [K in keyof T]?: any };

/**
 * Callback function as generic.
 */
export type Callback<A = [], R = void> = (...args: A) => R;

/**
 * Dictionary object with string keys.
 */
export type Dictionary<T = unknown> = Record<string, T>;

/**
 * Value equivalent to false.
 */
export type Falsy = 0 | 0n | '' | false | null | undefined;

/**
 * JSON array.
 */
export type JSONArray = JSONValue[];

/**
 * JSON object.
 */
export type JSONObject = { [key: string]: JSONValue };

/**
 * JSON primitive value.
 */
export type JSONPrimitive = boolean | null | number | string;

/**
 * JSON value.
 */
export type JSONValue = JSONArray | JSONObject | JSONPrimitive;

/**
 * Read-only array.
 */
export type ReadonlyArray<T = unknown> = readonly T[];

/**
 * Read-only object.
 */
export type ReadonlyObject<T extends object> = { readonly [K in keyof T]: T[K] };

/**
 * Function with unknown arguments and unknown return type.
 */
export type UnknownFunction = (...args: unknown[]) => unknown;

/**
 * Unknown object.
 */
export type UnknownObject<T extends object = {}> = { [K in keyof T]?: unknown };

/**
 * Type of value contained.
 */
export type ValueOf<T extends object> = ReturnType<T['valueOf']>;
