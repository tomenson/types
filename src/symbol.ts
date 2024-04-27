/**
 * Returns the value if it's a symbol, otherwise throws an error.
 * Functional alternative to symbol casting.
 *
 * @throws {TypeError}
 */
export function asSymbol<T extends symbol>(value: unknown, errMsg?: string): T {
  if (typeof value === 'symbol') return value as T;
  throw new TypeError(errMsg || `${value === null ? null : typeof value} cannot be converted to a symbol`);
}

/**
 * Returns true if the value is a symbol.
 * Functional alternative to symbol type guard.
 */
export function isSymbol<T extends symbol>(value: unknown): value is T {
  return typeof value === 'symbol';
}

/**
 * Converts the value to a symbol.
 */
export function toSymbol<T extends symbol>(value: unknown): T {
  if (value === null || value === undefined) return Symbol() as T;
  if (typeof value === 'symbol') return value as T;

  try {
    // @ts-expect-error Bad argument.
    return Symbol(value) as T;
  } catch {
    return Symbol(String(value)) as T;
  }
}
