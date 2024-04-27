/**
 * Returns the value if it's an array, otherwise throws an error.
 * Functional alternative to array casting.
 *
 * @throws {TypeError}
 */
export function asArray<T>(value: T, errMsg?: string): T extends (infer I)[] ? I[] : never {
  // @ts-ignore
  if (Array.isArray(value)) return value;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} is not an array`);
}

/**
 * Returns true if the value is an array.
 */
export function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

/**
 * Converts the value to an array.
 */
export function toArray<T>(value: T): T extends (infer I)[] ? I[] : T[] {
  // @ts-ignore
  if (value === null || value === undefined) return [];
  // @ts-ignore
  if (Array.isArray(value)) return value;
  // @ts-ignore
  if (typeof value !== 'object' || typeof value.length !== 'number') return [value];

  try {
    // @ts-ignore
    return Array.from(value);
  } catch {
    // @ts-ignore
    return [];
  }
}
