/**
 * Returns the value if it's a bigint, otherwise throws an error.
 * Functional alternative to bigint casting.
 *
 * @throws {TypeError}
 */
export function asBigInt<T extends bigint>(value: unknown, errMsg?: string): T {
  if (typeof value === 'bigint') return value as T;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} is not a bigint`);
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
export function toBigInt<T extends bigint>(value: unknown): T {
  if (value === null || value === undefined) return 0n as T;
  if (typeof value === 'bigint') return value as T;
  if (typeof value === 'object') return 0n as T;

  try {
    // @ts-expect-error Bad argument.
    return BigInt(value) as T;
  } catch {
    return 0n as T;
  }
}
