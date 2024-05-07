import { getTypeOf } from './misc';

/**
 * Returns the value if it's a number, otherwise throws an error.
 * Functional alternative to number casting.
 *
 * @throws {TypeError}
 */
export function asNumber<T>(value: T, errMsg?: string): T extends number ? T : never {
  // @ts-ignore
  if (typeof value === 'number') return value;
  throw new TypeError(errMsg || `${getTypeOf(value)} is not a number`);
}

/**
 * Returns true if the value is a number.
 * Functional alternative to number type guard.
 */
export function isNumber<T extends number>(value: unknown): value is T {
  return typeof value === 'number';
}

/**
 * Converts the value to a number.
 */
export function toNumber<T>(value: T): T extends number ? T : number {
  // @ts-ignore
  if (value === null || value === undefined) return NaN;

  try {
    // @ts-ignore
    return Number(value);
  } catch {
    // @ts-ignore
    return NaN;
  }
}
