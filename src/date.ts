/**
 * Returns the value if it's a Date object, otherwise throws an error.
 * Functional alternative to Date casting.
 *
 * @throws {TypeError}
 */
export function asDate<T>(value: T, errMsg?: string): T extends Date ? T : never {
  // @ts-ignore
  if (isDate(value)) return value;
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
export function toDate<T>(value: T): T extends Date ? T : Date {
  // @ts-ignore
  if (value === null || value === undefined) return new Date(0);
  // @ts-ignore
  if (isDate(value)) return value;

  try {
    // @ts-ignore
    return new Date(value);
  } catch {
    // @ts-ignore
    return new Date(0);
  }
}
