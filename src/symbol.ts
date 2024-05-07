import { getTypeOf } from './misc';

/**
 * Returns the value if it's a symbol, otherwise throws an error.
 * Functional alternative to symbol casting.
 *
 * @throws {TypeError}
 */
export function asSymbol<T>(value: T, errMsg?: string): T extends symbol ? T : never {
  // @ts-ignore
  if (typeof value === 'symbol') return value;
  throw new TypeError(errMsg || `${getTypeOf(value)} is not a symbol`);
}

/**
 * Returns true if the value is a symbol.
 * Functional alternative to symbol type guard.
 */
export function isSymbol<T extends symbol>(value: T): value is T {
  return typeof value === 'symbol';
}

/**
 * Converts the value to a symbol.
 */
export function toSymbol<T>(value: T): T extends symbol ? T : symbol {
  // @ts-ignore
  if (value === null || value === undefined) return Symbol();
  // @ts-ignore
  if (typeof value === 'symbol') return value;

  try {
    // @ts-ignore
    return Symbol(value);
  } catch {
    // @ts-ignore
    return Symbol(String(value));
  }
}
