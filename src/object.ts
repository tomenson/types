/**
 * Returns the value if it's an object, otherwise throws an error.
 * Functional alternative to object casting.
 *
 * @throws {TypeError}
 */
export function asObject<T extends object>(value: unknown, errMsg?: string): T {
  if (value && typeof value === 'object') return value as T;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} cannot be converted to an object`);
}

/**
 * Returns the value if it's an object or null, otherwise throws an error.
 * Functional alternative to object casting.
 *
 * @throws {TypeError}
 */
export function asObjectOrNull<T extends object>(value: unknown, errMsg?: string): T | null {
  return value !== null ? asObject<T>(value, errMsg) : null;
}

/**
 * Returns true if the value is an object. Arrays are also considered objects.
 * Functional alternative to object (excluding null) type guard.
 */
export function isObject<T extends object>(value: unknown): value is T {
  return value !== null && typeof value === 'object';
}

/**
 * Converts the value to an object.
 */
export function toObject<T extends object>(value: unknown): T {
  if (value === null || value === undefined) return {} as T;

  return (typeof value === 'object' ? value : { valueOf: () => value }) as T;
}
