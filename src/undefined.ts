/**
 * Returns undefined if the value is undefined, otherwise throws an error.
 * Functional alternative to undefined casting.
 *
 * @throws {TypeError}
 */
export function asUndefined<T extends undefined>(value: unknown, errMsg?: string): T {
  if (value === undefined) return value as T;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} is not undefined`);
}

/**
 * Returns true if the value is undefined.
 */
export function isUndefined<T extends undefined>(value: unknown): value is T {
  return value === undefined;
}

/**
 * Returns undefined no matter what the value is.
 */
export function toUndefined<T extends undefined>(_value: unknown): T {
  return undefined as T;
}
