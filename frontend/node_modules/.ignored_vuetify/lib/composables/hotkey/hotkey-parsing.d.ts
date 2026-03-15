// Types
export declare const MODIFIERS: string[];
/**
 * Splits a single combination string into individual key parts.
 *
 * A combination is a set of keys that must be pressed simultaneously.
 * e.g. `ctrl+k`, `shift--`
 */
export declare function splitKeyCombination(combination: string, isInternal?: boolean): string[];
/**
 * Splits a hotkey string into its constituent combination groups.
 *
 * A sequence is a series of combinations that must be pressed in order.
 * e.g. `a-b`, `ctrl+k-p`
 */
export declare function splitKeySequence(str: string): string[];
