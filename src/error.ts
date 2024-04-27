/**
 * Returns the value if it's an Error object, otherwise throws an error.
 * Functional alternative to Error casting.
 *
 * @throws {TypeError}
 */
export function asError<T extends Error>(value: unknown, errMsg?: string): T {
  if (isError(value)) return value as T;
  throw new TypeError(
    errMsg || `${value === null ? null : typeof value} is not an Error object`,
  );
}

/**
 * Returns true if the value is an Error object.
 */
export function isError<T extends Error>(value: unknown): value is T {
  return value
    ? Object.prototype.toString.call(value).endsWith('Error]')
    : false;
}

/**
 * Converts the value to an Error object.
 */
export function toError<T extends Error>(value: unknown): T {
  if (value === null || value === undefined) return new Error() as T;
  return (isError(value) ? value : new Error(String(value))) as T;
}
