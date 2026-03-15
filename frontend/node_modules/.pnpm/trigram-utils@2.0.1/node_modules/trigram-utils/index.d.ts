/**
 * Clean `value`.
 * Removed general non-important (as in, for language detection) punctuation
 * marks, symbols, and digits.
 *
 * @param {string|null} [value]
 * @returns {string}
 */
export function clean(value?: string | null | undefined): string
/**
 * Get clean, padded, trigrams.
 *
 * @param {string} [value]
 * @returns {string[]}
 */
export function trigrams(value?: string | undefined): string[]
/**
 * Get an `Object` with trigrams as its attributes, and their occurence count as
 * their values.
 *
 * @param {string} value
 * @returns {TrigramDictionary}
 */
export function asDictionary(value: string): TrigramDictionary
/**
 * Get an `Array` containing trigram--count tuples from a given value.
 *
 * @param {string} value
 * @returns {TrigramTuples}
 */
export function asTuples(value: string): TrigramTuples
/**
 * Get an `Array` containing trigram--count tuples from a given value.
 *
 * @param {TrigramTuples} tuples
 * @returns {TrigramDictionary}
 */
export function tuplesAsDictionary(tuples: TrigramTuples): TrigramDictionary
export type TrigramTuple = [string, number]
export type TrigramTuples = [string, number][]
export type TrigramDictionary = Record<string, number>
