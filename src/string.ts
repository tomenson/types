/**
 * Returns the value if it's a string, otherwise throws an error.
 * Functional alternative to string casting.
 *
 * @throws {TypeError}
 */
export function asString<T>(value: T, errMsg?: string): T extends string ? T : never {
  // @ts-ignore
  if (typeof value === 'string') return value;
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
export function toString<T>(value: T): T extends string ? T : string {
  // @ts-ignore
  return String(value);
}
