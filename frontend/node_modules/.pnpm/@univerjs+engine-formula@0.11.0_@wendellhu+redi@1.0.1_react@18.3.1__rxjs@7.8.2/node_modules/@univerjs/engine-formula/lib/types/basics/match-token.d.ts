import { compareToken, matchToken, operatorToken, prefixToken, suffixToken } from './token';
export declare const FORMULA_LEXER_TOKENS: (operatorToken | suffixToken | compareToken | matchToken | prefixToken)[];
export declare function isFormulaLexerToken(str: string): boolean;
export declare function includeFormulaLexerToken(str: string): boolean;
export declare function normalizeSheetName(sheetName: string): string;
/**
 * Determine whether the character is a token keyword for the formula engine.
 * @param char
 */
export declare function matchRefDrawToken(char: string): boolean;
export declare const TOKEN_CANNOT_BE_AT_END_SET: Set<string>;
export declare function isTokenCannotBeAtEnd(token: string): boolean;
export declare const TOKEN_CANNOT_PRECEDE_SUFFIX_TOKEN_SET: Set<string>;
export declare function isTokenCannotPrecedeSuffixToken(token: string): boolean;
