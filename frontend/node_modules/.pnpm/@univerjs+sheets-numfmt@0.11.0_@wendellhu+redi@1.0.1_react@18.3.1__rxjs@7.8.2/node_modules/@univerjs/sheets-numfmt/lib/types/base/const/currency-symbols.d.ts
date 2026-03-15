import { LocaleType } from '@univerjs/core';
export declare const currencySymbols: string[];
export declare const localeCurrencySymbolMap: Map<LocaleType, string>;
/**
 * Get the currency symbol icon based on the locale.
 * TODO@wpxp123456: supplement more currency symbols icons. missing icons: ₩, ₫, NT$, ﷼.
 */
export declare function getCurrencySymbolIconByLocale(locale: LocaleType): {
    icon: string;
    symbol: string;
    locale: LocaleType;
};
/**
 * Get the currency symbol by locale.
 */
export declare function getCurrencySymbolByLocale(locale: LocaleType): string;
/**
 * Get the currency format string based on the locale and number of digits.
 */
export declare function getCurrencyFormat(locale: LocaleType, numberDigits?: number): string;
