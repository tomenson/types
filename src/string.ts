/**
 * Returns the value if it's a string, otherwise throws an error.
 * Functional alternative to string casting.
 *
 * @throws {TypeError}
 */
export function asString<T extends string>(value: unknown, errMsg?: string): T {
  if (typeof value === 'string') return value as T;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} is not a string`);
}

/**
 * Returns true if the value is a string.
 * Functional alternative to string type guard.
 */
export function isString<T extends string>(value: unknown): value is T {
  return typeof value === 'string';
}

/**
 * Converts the value to a string.
 */
export function toString<T extends string>(value: unknown): T {
  return String(value) as T;
}
