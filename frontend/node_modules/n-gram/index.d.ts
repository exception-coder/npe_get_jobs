/**
 * Factory returning a function that converts a value string to n-grams.
 *
 * @param {number} n
 */
export function nGram(
  n: number
): <T extends string | unknown[]>(
  value?: T | undefined
) => T extends any[] ? T : string[]
/**
 * Create n-grams from a given value.
 *
 * @template {string|Array<unknown>} T
 * @param {T} [value]
 * @returns {T extends any[] ? T : Array<string>}
 */
export function bigram<T extends string | unknown[]>(
  value?: T | undefined
): T extends any[] ? T : string[]
/**
 * Create n-grams from a given value.
 *
 * @template {string|Array<unknown>} T
 * @param {T} [value]
 * @returns {T extends any[] ? T : Array<string>}
 */
export function trigram<T extends string | unknown[]>(
  value?: T | undefined
): T extends any[] ? T : string[]
