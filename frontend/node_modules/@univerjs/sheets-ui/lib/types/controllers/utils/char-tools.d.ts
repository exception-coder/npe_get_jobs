import { IFunctionService, LexerTreeBuilder } from '@univerjs/engine-formula';
import { LocaleType } from '@univerjs/core';
export declare function isCJKLocale(locale: LocaleType): boolean;
/**
 * Convert all full-width characters to half-width characters and try to parse them. If the parsing is successful, apply them. If the parsing is not successful, return them to full-width characters.
 *
 * Convert full-width characters to half-width characters
 * 1. Formula
 * 2. Boolean
 * 3. Formatted number
 *
 * Not converted
 * 1. Force string
 * 2. Chinese single and double quotation marks
 * 3. Characters between single and double quotes in formulas
 * 4. Other text that cannot be recognized as formulas, Boolean values, or numbers
 *
 * @param str
 * @param lexerTreeBuilder
 * @returns
 */
export declare function normalizeString(str: string, lexerTreeBuilder: LexerTreeBuilder, currentLocale: LocaleType, functionService: IFunctionService): string;
