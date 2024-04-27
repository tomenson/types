/**
 * Returns the value if it's a Date object, otherwise throws an error.
 * Functional alternative to Date casting.
 *
 * @throws {TypeError}
 */
export function asDate<T extends Date>(value: unknown, errMsg?: string): T {
  if (isDate(value)) return value as T;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} is not a Date object`);
}

/**
 * Returns true if the value is a Date object.
 */
export function isDate<T extends Date>(value: unknown): value is T {
  return value ? Object.prototype.toString.call(value) === '[object Date]' : false;
}

/**
 * Converts the value to a Date object.
 */
export function toDate<T extends Date>(value: unknown): T {
  if (value === null || value === undefined) return new Date(0) as T;
  if (isDate(value)) return value as T;

  try {
    // @ts-expect-error Bad argument.
    return new Date(value) as T;
  } catch {
    return new Date(0) as T;
  }
}
