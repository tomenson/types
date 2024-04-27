/**
 * Function of any kind.
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * Type of items in an array.
 */
export type ArrayItem<T> = T extends (infer I)[] ? I : never;

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
 * Immutable array type.
 */
export type ImmutableArray<T = unknown> = readonly T[];

/**
 * Immutable object type.
 */
export type ImmutableObject<T extends object> = { readonly [K in keyof T]: T[K] };

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
 * Unknown type of object or array, or other value.
 */
export type Unknown<T> = T extends object ? { [k in keyof T]: unknown } : T extends object[] ? unknown[] : unknown;

/**
 * Type of value contained.
 */
export type ValueOf<T extends object> = ReturnType<T['valueOf']>;
