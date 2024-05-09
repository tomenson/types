/**
 * Array of any kind. Use as constraint.
 */
export type AnyArray = any[];

/**
 * Function of any kind. Use as constraint.
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * Object of any kind. Use as constraint.
 */
export type AnyObject = { [key: any]: any };

/**
 * Type of items in an array.
 */
export type ArrayItem<T> = T extends (infer I)[] ? I : never;

/**
 * Callback function as generic.
 */
export type Callback<A = [], R = void> = (...args: A) => R;

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
export type ReadonlyObject<T = object> = T extends object ? { readonly [K in keyof T]: T[K] } : never;

/**
 * Unknown function, or object, or something else.
 */
export type Unknown<T = unknown> =
  T extends AnyArray ? UnknownArray<T> :
  T extends AnyFunction ? UnknownFunction<T> :
  T extends AnyObject ? UnknownObject<T> :
  unknown;

/**
 * Unknown array.
 */
export type UnknownArray<T = AnyArray> = T extends AnyArray ? unknown[] : never;

/**
 * Function with unknown arguments and unknown return type.
 */
export type UnknownFunction<T = AnyFunction> = T extends AnyFunction ? (...args: unknown[]) => unknown : never;

/**
 * Unknown object.
 */
export type UnknownObject<T = AnyObject> = T extends AnyObject ? { [K in keyof T]?: unknown } : never;

/**
 * Type of value contained.
 */
export type ValueOf<T> = ReturnType<T['valueOf']>;
