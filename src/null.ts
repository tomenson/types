/**
 * Returns null if the value is null, otherwise throws an error.
 * Functional alternative to null casting.
 *
 * @throws {TypeError}
 */
export function asNull<T extends null>(value: unknown, errMsg?: string): T {
  if (value === null) return value as T;
  throw new TypeError(errMsg || `${typeof value} is not null`);
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
export function toNull<T extends null>(_value: unknown): T {
  return null as T;
}
