/**
 * Returns the value if it's a RegExp object, otherwise throws an error.
 * Functional alternative to RegExp casting.
 *
 * @throws {TypeError}
 */
export function asRegExp<T extends RegExp>(value: unknown, errMsg?: string): T {
  if (isRegExp(value)) return value as T;
  throw new TypeError(
    errMsg ||
      `${value === null ? null : typeof value} cannot be converted to a RegExp`,
  );
}

/**
 * Returns true if the value is a RegExp object.
 */
export function isRegExp<T extends RegExp>(value: unknown): value is T {
  return value
    ? Object.prototype.toString.call(value) === '[object RegExp]'
    : false;
}

/**
 * Converts the value to a RegExp object.
 */
export function toRegExp<T extends RegExp>(value: unknown): T {
  if (value === null || value === undefined) return new RegExp('') as T;
  return (isRegExp(value) ? value : new RegExp(String(value))) as T;
}
