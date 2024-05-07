import { getTypeOf } from './misc';

/**
 * Returns null if the value is null, otherwise throws an error.
 * Functional alternative to null casting.
 *
 * @throws {TypeError}
 */
export function asNull<T>(value: T, errMsg?: string): T extends null ? T : never {
  // @ts-ignore
  if (value === null) return value;
  throw new TypeError(errMsg || `${getTypeOf(value)} is not null`);
}

/**
 * Returns true if the value is null.
 */
export function isNull<T extends null>(value: unknown): value is T {
  return value === null;
}

/**
 * Returns null no matter what the value is.
 */
export function toNull<T>(_value: T): T extends null ? T : null {
  // @ts-ignore
  return null;
}
