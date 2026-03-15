export const bigram = nGram(2)
export const trigram = nGram(3)

/**
 * Factory returning a function that converts a value string to n-grams.
 *
 * @param {number} n
 */
export function nGram(n) {
  if (
    typeof n !== 'number' ||
    Number.isNaN(n) ||
    n < 1 ||
    n === Number.POSITIVE_INFINITY
  ) {
    throw new Error('`' + n + '` is not a valid argument for `n-gram`')
  }

  return grams

  /**
   * Create n-grams from a given value.
   *
   * @template {string|Array<unknown>} T
   * @param {T} [value]
   * @returns {T extends any[] ? T : Array<string>}
   */
  function grams(value) {
    /** @type {T extends any[] ? T : Array<string>} */
    // @ts-expect-error: pretty sure this is fine.
    const nGrams = []

    if (value === null || value === undefined) {
      return nGrams
    }

    const source = typeof value.slice === 'function' ? value : String(value)
    let index = source.length - n + 1

    if (index < 1) {
      return nGrams
    }

    while (index--) {
      nGrams[index] = source.slice(index, index + n)
    }

    return nGrams
  }
}
