/**
 * Returns the value if it's a function, otherwise throws an error.
 * Functional alternative to function casting.
 *
 * @throws {TypeError}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function asFunction<T extends Function>(value: unknown, errMsg?: string): T {
  if (typeof value === 'function') return value as T;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} is not a function`);
}

/**
 * Returns true if the value is a function.
 * Functional alternative to function type guard.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction<T extends Function>(value: unknown): value is T {
  return typeof value === 'function';
}

/**
 * Converts the value to a function.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function toFunction<T extends Function>(value: unknown): T {
  return (typeof value === 'function' ? value : () => value) as T;
}
