import { BaseValueObject } from '../engine/value-object/base-value-object';
/**
 * covert number to preview string by pattern
 * @TODODushusir: Internationalization, reuse with numfmt
 *
 * @param pattern
 * @param value
 * @returns
 */
export declare const getFormatPreview: (pattern: string, value: number) => string;
export declare const getTextValueOfNumberFormat: (text: BaseValueObject) => string;
