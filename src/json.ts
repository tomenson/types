import { getTypeOf } from './misc';
import type { JSONValue } from './types';

/**
 * Wrapped JSON parse. Throws an error if the given value not is a string.
 *
 * @throws {SyntaxError | TypeError}
 */
export function jsonParse<T>(
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
export function jsonStringify<T>(
  value: T,
  replacer?: null | (number | string)[] | ((key: string, value: unknown) => unknown), space?: number | string,
): T extends JSONValue ? string : never {
  // @ts-ignore
  const jsonStr = JSON.stringify(value, replacer, space) as string | undefined;
  if (typeof jsonStr !== 'string') throw new TypeError(`${getTypeOf(value)} cannot be stringified`);
  // @ts-ignore
  return jsonStr;
}
