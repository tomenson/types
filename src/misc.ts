import { toError } from './error';
import type { AnyFunction } from './types';

/**
 * Does nothing at all.
 * Useful as default for callbacks for instance.
 */
export function noop(): void {
  // Do nothing.
}

/**
 * Calls the function with the given arguments and returns the result.
 * If the function throws an error, it returns the error instead as an object.
 */
export function tryCatch<F extends AnyFunction>(fn: F, ...args: Parameters<F>): Error | ReturnType<F> {
  try {
    return fn(...args);
  } catch (err) {
    return toError(err);
  }
}
