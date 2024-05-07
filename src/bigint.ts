import { getTypeOf } from './misc';

/**
 * Returns the value if it's a bigint, otherwise throws an error.
 * Functional alternative to bigint casting.
 *
 * @throws {TypeError}
 */
export function asBigInt<T>(value: T, errMsg?: string): T extends bigint ? T : never {
  // @ts-ignore
  if (typeof value === 'bigint') return value;
  throw new TypeError(errMsg || `${getTypeOf(value)} is not a bigint`);
}

/**
 * Returns true if the value is a bigint.
 * Functional alternative to bigint type guard.
 */
export function isBigInt<T extends bigint>(value: unknown): value is T {
  return typeof value === 'bigint';
}

/**
 * Converts the value to a bigint.
 */
export function toBigInt<T>(value: T): T extends bigint ? T : bigint {
  // @ts-ignore
  if (value === null || value === undefined) return 0n;
  // @ts-ignore
  if (typeof value === 'bigint') return value;
  // @ts-ignore
  if (typeof value === 'object') return 0n;

  try {
    // @ts-ignore
    return BigInt(value);
  } catch {
    // @ts-ignore
    return 0n;
  }
}
