import { getTypeOf } from './misc';

/**
 * Returns the value if it's an object, otherwise throws an error.
 * Functional alternative to object casting.
 *
 * @throws {TypeError}
 */
export function asObject<T>(value: T, errMsg?: string): T extends object ? T : never {
  // @ts-ignore
  if (value && typeof value === 'object') return value;
  throw new TypeError(errMsg || `${getTypeOf(value)} cannot be converted to an object`);
}

/**
 * Returns the value if it's an object or null, otherwise throws an error.
 * Functional alternative to object casting.
 *
 * @throws {TypeError}
 */
export function asObjectOrNull<T>(value: T, errMsg?: string): T extends object | null ? T : never {
  // @ts-ignore
  return value !== null ? asObject(value, errMsg) : null;
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
export function toObject<T>(value: T): T extends object ? T : { valueOf(): T } {
  // @ts-ignore
  if (value === null || value === undefined) return {};
  // @ts-ignore
  return typeof value === 'object' ? value : {
    valueOf() {
      return value;
    },
  };
}
