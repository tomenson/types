/**
 * Returns the value if it's a Promise object, otherwise throws an error.
 * Functional alternative to Promise casting.
 *
 * @throws {TypeError}
 */
export function asPromise<T>(value: T): T extends Promise<infer I> ? T : never {
  // @ts-ignore
  if (isPromise(value)) return value;
  throw new TypeError(`${value === null ? null : typeof value} is not a Promise`);
}

/**
 * Returns true if the value is a Promise object.
 */
export function isPromise<T>(value: unknown): value is Promise<T> {
  return value ? Object.prototype.toString.call(value) === '[object Promise]' : false;
}

/**
 * Converts the value to a Promise object.
 */
export function toPromise<T>(value: T): T extends Promise<infer I> ? T : Promise<T> {
  // @ts-ignore
  return (isPromise(value) ? value : Promise.resolve(value));
}
