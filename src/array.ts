/**
 * Returns the value if it's an array, otherwise throws an error.
 * Functional alternative to array casting.
 *
 * @throws {TypeError}
 */
export function asArray<T extends unknown[]>(value: unknown, errMsg?: string): T {
  if (Array.isArray(value)) return value as T;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} is not an array`);
}

/**
 * Returns true if the value is an array.
 */
export function isArray<T extends unknown[]>(value: unknown): value is T {
  return Array.isArray(value);
}

/**
 * Converts the value to an array.
 */
export function toArray<T extends unknown[]>(value: unknown): T {
  if (value === null || value === undefined) return [] as unknown as T;
  if (Array.isArray(value)) return value as T;
  // @ts-expect-error Unknown property.
  if (typeof value !== 'object' || typeof value.length !== 'number') return [value] as T;

  try {
    // @ts-expect-error Bad argument.
    return Array.from(value) as T;
  } catch {
    return [] as unknown as T;
  }
}
