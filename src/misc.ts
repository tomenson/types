import { toError } from './error';
import type { AnyFunction, JSONValue } from './types';

/**
 * Returns the name of the type of value.
 * Equivalent to the `typeof` operator except that null returns "null".
 * Cannot be used as a regular type guard.
 */
export function getTypeOf(value: unknown):
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'null'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined'
{
  return value === null ? 'null' : typeof value;
}

/**
 * Does nothing at all.
 * Useful as default for callbacks for instance.
 */
export function noop(): void {
  // Do nothing.
}

/**
 * Wrapped JSON parse. Throws an error if the given value not is a string.
 *
 * @throws {SyntaxError | TypeError}
 */
export function parse<T>(
  jsonStr: T,
  reviver?: (key: string, value: unknown) => unknown,
): T extends string ? JSONValue : never {
  if (typeof jsonStr !== 'string') throw new TypeError(`${getTypeOf(jsonStr)} is not a string`);
  return JSON.parse(jsonStr, reviver);
}

/**
 * Wrapped JSON stringify. Throws an error if the value not is allowed in JSON.
 *
 * @throws {TypeError}
 */
export function stringify<T>(
  value: T,
  replacer?: null | (number | string)[] | ((key: string, value: unknown) => unknown), space?: number | string,
): T extends JSONValue ? string : never {
  // @ts-ignore
  const jsonStr = JSON.stringify(value, replacer, space) as string | undefined;
  if (typeof jsonStr !== 'string') throw new TypeError(`${getTypeOf(value)} cannot be stringified`);
  // @ts-ignore
  return jsonStr;
}

/**
 * Calls the function with the given arguments and returns the result.
 * If the function throws an error, it returns the error instead as an object.
 */
export function tryCatch<F extends AnyFunction>(fn: F, ...args: Parameters<F>): Error | ReturnType<F> {
  try {
    return fn(...args);
  } catch (err) {
    return toError(err);
  }
}
