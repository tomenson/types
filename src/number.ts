/**
 * Returns the value if it's a number, otherwise throws an error.
 * Functional alternative to number casting.
 *
 * @throws {TypeError}
 */
export function asNumber<T extends number>(value: unknown, errMsg?: string): T {
  if (typeof value === 'number') return value as T;
  throw new TypeError(
    errMsg || `${value === null ? null : typeof value} is not a number`,
  );
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
export function toNumber<T extends number>(value: unknown): T {
  if (value === null || value === undefined) return NaN as T;

  try {
    return Number(value) as T;
  } catch {
    return NaN as T;
  }
}
