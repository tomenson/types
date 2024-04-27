/**
 * Returns the value if it's a Promise object, otherwise throws an error.
 * Functional alternative to Promise casting.
 *
 * @throws {TypeError}
 */
export function asPromise<T extends Promise<void>>(value: unknown): T {
  if (isPromise(value)) return value as T;
  throw new TypeError(`${value === null ? null : typeof value} is not a Promise`);
}

/**
 * Returns true if the value is a Promise object.
 */
export function isPromise<T extends Promise<void>>(value: unknown): value is T {
  return value ? Object.prototype.toString.call(value) === '[object Promise]' : false;
}

/**
 * Converts the value to a Promise object.
 */
export function toPromise<T extends Promise<void>>(value: unknown): T {
  return (isPromise(value) ? value : Promise.resolve(value)) as T;
}
