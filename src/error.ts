/**
 * Returns the value if it's an Error object, otherwise throws an error.
 * Functional alternative to Error casting.
 *
 * @throws {TypeError}
 */
export function asError<T>(value: T, errMsg?: string): T extends Error ? T : never {
  // @ts-ignore
  if (isError(value)) return value;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} is not an Error object`);
}

/**
 * Returns true if the value is an Error object.
 */
export function isError<T extends Error>(value: unknown): value is T {
  return value ? Object.prototype.toString.call(value).endsWith('Error]') : false;
}

/**
 * Converts the value to an Error object.
 */
export function toError<T>(value: T): T extends Error ? T : Error {
  // @ts-ignore
  if (value === null || value === undefined) return new Error();
  // @ts-ignore
  return isError(value) ? value : new Error(String(value));
}
