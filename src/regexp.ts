import { getTypeOf } from './misc';

/**
 * Returns the value if it's a RegExp object, otherwise throws an error.
 * Functional alternative to RegExp casting.
 *
 * @throws {TypeError}
 */
export function asRegExp<T>(value: T, errMsg?: string): T extends RegExp ? T : never {
  // @ts-ignore
  if (isRegExp(value)) return value;
  throw new TypeError(errMsg || `${getTypeOf(value)} cannot be converted to a RegExp object`);
}

/**
 * Returns true if the value is a RegExp object.
 */
export function isRegExp<T extends RegExp>(value: unknown): value is T {
  return value ? Object.prototype.toString.call(value) === '[object RegExp]' : false;
}

/**
 * Converts the value to a RegExp object.
 */
export function toRegExp<T>(value: T): T extends RegExp ? T : RegExp {
  // @ts-ignore
  if (value === null || value === undefined) return new RegExp('');
  // @ts-ignore
  return isRegExp(value) ? value : new RegExp(String(value));
}
