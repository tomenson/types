/**
 * Callback function as generic.
 */
export type Callback<A extends [], R = void> = (...args: A) => R;

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
export type JSONObject = Record<string, JSONValue>;

/**
 * JSON primitive value.
 */
export type JSONPrimitive = boolean | null | number | string;

/**
 * JSON value.
 */
export type JSONValue = boolean | null | number | string | JSONValue[] | { [key: string]: JSONValue };

/**
 * Unmutable array with fixed length.
 */
export type Tuple<T = unknown> = readonly [T, ...T[]];

/**
 * Declare values to be unknown.
 */
export type Unknown<T> = T extends object ? { [k in keyof T]: unknown } : T extends object[] ? unknown[] : unknown;

/**
 * Immutable array type.
 */
export type ImmutableArray<T = unknown> = readonly T[];

/**
 * Immutable object type.
 */
export type ImmutableObject<T extends object> = {
  readonly [K in keyof T]: T[K];
};

/**
 * Unknown object type.
 */
export type UnknownObject<T extends object> = {
  [K in keyof T]: unknown;
};
