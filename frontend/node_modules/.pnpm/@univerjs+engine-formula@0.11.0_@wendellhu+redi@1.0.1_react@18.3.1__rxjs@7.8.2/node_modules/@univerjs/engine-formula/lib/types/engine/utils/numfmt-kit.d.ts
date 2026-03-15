import { ICellData, Nullable, Styles, LocaleType } from '@univerjs/core';
import { operatorToken } from '../../basics/token';
/**
 * Handling number formats in styles
 *
 * @param oldCell
 * @param cell
 */
export declare function handleNumfmtInCell(oldCell: Nullable<ICellData>, cell: Nullable<ICellData>, styles: Styles | undefined): Nullable<ICellData>;
/**
 * Process the priority of the newly set number format and the original format.
 *
 * Here is the priority of the number format in Excel:
 * ┌─────────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
 * │                 │ new format                                                                                                                                       │
 * ├─────────────────┼────────────┬────────────┬────────────┬────────────┬──────────┬──────────┬────────────┬──────────┬────────────┬──────────┬────────────┬───────────┤
 * │ Original format │ General    │ Number     │ Currency   │ Accounting │ Date     │ Time     │ Percentage │ Fraction │ Scientific │ Text     │ Special    │ Custom    │
 * ├─────────────────┼────────────┼────────────┼────────────┼────────────┼──────────┼──────────┼────────────┼──────────┼────────────┼──────────┼────────────┼───────────┤
 * │ General         │ General    │ Number     │ Currency   │ Accounting │ Date     │ Time     │ Percentage │ Fraction │ Scientific │ Text     │ Special    │ Custom    │
 * │ Number          │ Number     │ Number     │ Number     │ Number     │ Number   │ Number   │ Number     │ Number   │ Number     │ Number   │ Number     │ Number    │
 * │ Currency        │ Currency   │ Currency   │ Currency   │ Currency   │ Currency │ Currency │ Currency   │ Currency │ Currency   │ Currency │ Currency   │ Currency  │
 * │ Accounting      │ Accounting │ Accounting │ Accounting │ Accounting │ Date     │ Time     │ Percentage │ Fraction │ Scientific │ Text     │ Accounting │ Custom    │
 * │ Date            │ Date       │ Date       │ Currency   │ Accounting │ Date     │ Time     │ Percentage │ Fraction │ Scientific │ Text     │ Date       │ Custom    │
 * │ Time            │ Time       │ Time       │ Time       │ Time       │ Time     │ Time     │ Time       │ Time     │ Time       │ Time     │ Time       │ Time      │
 * │ Percentage      │ Percentage │ Percentage │ Currency   │ Accounting │ Date     │ Time     │ Percentage │ Fraction │ Scientific │ Text     │ Percentage │ Custom    │
 * │ Fraction        │ Fraction   │ Fraction   │ Currency   │ Accounting │ Date     │ Time     │ Percentage │ Fraction │ Scientific │ Text     │ Fraction   │ Custom    │
 * │ Scientific      │ Scientific │ Scientific │ Currency   │ Accounting │ Date     │ Time     │ Percentage │ Fraction │ Scientific │ Text     │ Scientific │ Custom    │
 * │ Text            │ Text       │ Text       │ Text       │ Text       │ Text     │ Text     │ Text       │ Text     │ Text       │ Text     │ Text       │ Text      │
 * │ Special         │ Special    │ Special    │ Special    │ Special    │ Special  │ Special  │ Special    │ Special  │ Special    │ Special  │ Special    │ Special   │
 * │ Custom          │ Custom     │ Custom     │ Currency   │ Accounting │ Date     │ Custom   │ Percentage │ Fraction │ Scientific │ Text     │ Custom     │ Custom    │
 * └─────────────────┴────────────┴────────────┴────────────┴────────────┴──────────┴──────────┴────────────┴──────────┴────────────┴──────────┴────────────┴───────────┘
 *
 * The number formats supported by Univer are different from Excel, so it only processes the parts that are the same as Excel. For different parts, we consider the newly set number format to have a higher priority.
 *
 * In the future, if Univer completely matches Excel, we will implement Excel’s priority rules.
 *
 * @param oldPattern
 * @param pattern
 * @returns
 */
export declare function compareNumfmtPriority(oldPattern: string, pattern: string): string;
export declare function clearNumberFormatTypeCache(): void;
/**
 * The number format of the formula inherits the number format of the referenced cell, usually taking the format of the cell at the front position, but some formats have higher priority, there are some special cases.
 *
 * e.g.
 * Currency * Currency = General
 * Currency / Currency = General
 *
 * For two cells with the same number format, the calculated result should inherit the following number format
 * ┌─────┬─────────┬──────────┬────────────┬─────────┬─────────┬────────────┬──────────┬────────────┬──────┬─────────┬──────────┐
 * │     │ Number  │ Currency │ Accounting │ Date    │ Time    │ Percentage │ Fraction │ Scientific │ Text │ Special │ Custom   │
 * ├─────┼─────────┼──────────┼────────────┼─────────┼─────────┼────────────┼──────────┼────────────┼──────┼─────────┼──────────┤
 * │  +  │ Number  │ Currency │ Accounting │ General │ Time    │ Percentage │ Fraction │ Scientific │ Text │ Special │ General  │
 * │  -  │ Number  │ Currency │ Accounting │ General │ Time    │ Percentage │ Fraction │ Scientific │ Text │ Special │ General  │
 * │  *  │ General │ General  │ General    │ General │ General │ Percentage │ Fraction │ Scientific │ Text │ General │ General  │
 * │  /  │ General │ General  │ General    │ General │ General │ Percentage │ Fraction │ Scientific │ Text │ General │ General  │
 * └─────┴─────────┴──────────┴────────────┴─────────┴─────────┴────────────┴──────────┴────────────┴──────┴─────────┴──────────┘
 *
 * @param previousPattern
 * @param nextPattern
 */
export declare function comparePatternPriority(previousPattern: string, nextPattern: string, operator: operatorToken): string;
export declare function getCurrencyFormat(locale: LocaleType, numberDigits?: number): string;
export declare function applyCurrencyFormat(locale: LocaleType, number: number, numberDigits?: number): string;
export declare function stringIsNumberPattern(input: string): {
    isNumberPattern: boolean;
    value: number;
    pattern: string;
} | {
    isNumberPattern: boolean;
    value?: undefined;
    pattern?: undefined;
};
export declare function clearStringToNumberPatternCache(): void;
