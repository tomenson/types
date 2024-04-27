import type { AnyFunction } from './types';

/**
 * Returns the value if it's a function, otherwise throws an error.
 * Functional alternative to function casting.
 *
 * @throws {TypeError}
 */
export function asFunction<T>(value: T, errMsg?: string): T extends AnyFunction ? T : never {
  // @ts-ignore
  if (typeof value === 'function') return value;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} is not a function`);
}

/**
 * Returns true if the value is a function.
 * Functional alternative to function type guard.
 */
export function isFunction<T extends AnyFunction>(value: unknown): value is T {
  return typeof value === 'function';
}

/**
 * Converts the value to a function.
 */
export function toFunction<T>(value: T): T extends AnyFunction ? T : () => T {
  // @ts-ignore
  return (typeof value === 'function' ? value : () => value);
}
