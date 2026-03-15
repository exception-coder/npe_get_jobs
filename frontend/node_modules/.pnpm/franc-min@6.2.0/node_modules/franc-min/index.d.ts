/**
 * Get the most probable language for the given value.
 *
 * @param {string} [value]
 *   The value to test.
 * @param {Options} [options]
 *   Configuration.
 * @return {string}
 *  The most probable language.
 */
export function franc(value?: string | undefined, options?: Options | undefined): string;
/**
 * Get a list of probable languages the given value is
 * written in.
 *
 * @param {string} [value]
 *   The value to test.
 * @param {Options} [options]
 *   Configuration.
 * @return {Array<TrigramTuple>}
 *   An array containing language—distance tuples.
 */
export function francAll(value?: string | undefined, options?: Options | undefined): Array<import("trigram-utils").TrigramTuple>;
export type TrigramTuple = import('trigram-utils').TrigramTuple;
export type Options = {
    /**
     * Languages to allow.
     */
    only?: Array<string>;
    /**
     * Languages to ignore.
     */
    ignore?: Array<string>;
    /**
     * Minimum length to accept.
     */
    minLength?: number;
};
