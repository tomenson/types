import { isError } from './error';

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
export function tryCatch<F extends (...args: A) => R, A extends unknown[], R = void>(fn: F, ...args: A): Error | R {
  try {
    return fn(...args);
  } catch (err) {
    return isError(err) ? err : new Error(String(err));
  }
}
