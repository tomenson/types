/**
 * Returns undefined if the value is undefined, otherwise throws an error.
 * Functional alternative to undefined casting.
 *
 * @throws {TypeError}
 */
export function asUndefined<T>(value: T, errMsg?: string): T extends undefined ? T : never {
  // @ts-ignore
  if (value === undefined) return;
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
export function toUndefined<T>(_value: T): T extends undefined ? T : undefined {
  // @ts-ignore
  return;
}
