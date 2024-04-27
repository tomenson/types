/**
 * Returns the value if it's a boolean, otherwise throws an error.
 * Functional alternative to boolean casting.
 *
 * @throws {TypeError}
 */
export function asBoolean<T extends boolean>(value: unknown, errMsg?: string): T {
  if (typeof value === 'boolean') return value as T;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} is not a boolean`);
}

/**
 * Returns true if the value is a boolean.
 * Functional alternative to boolean type guard.
 */
export function isBoolean<T extends boolean>(value: unknown): value is T {
  return typeof value === 'boolean';
}

/**
 * Converts the value to a boolean.
 */
export function toBoolean<T extends boolean>(value: unknown): T {
  return Boolean(value) as T;
}
