import { IStyleData } from '../types/interfaces';
import { IKeyValue, Nullable } from './types';
/**
 * Universal tool library
 */
export declare class Tools {
    static deleteNull(obj: any): any;
    static stringAt(index: number): string;
    static indexAt(code: string): number;
    static deleteBlank(value?: string): string | undefined;
    static getSystemType(): string;
    static getBrowserType(): string;
    static getClassName(instance: object): string;
    /** @deprecated This method is deprecated, please use `import { merge } from '@univerjs/core` instead */
    static deepMerge(target: any, ...sources: any[]): any;
    static numberFixed(value: number, digit: number): number;
    static diffValue(one: any, two: any): boolean;
    static deepClone<T = unknown>(value: T): T;
    static getLanguage(): string;
    static getValueType(value: any): string;
    static isDefine<T>(value?: T | void): value is T;
    static isBlank(value: any): boolean;
    static isPlainObject(value: any): value is object;
    static isDate(value?: Date): value is Date;
    static isRegExp(value?: any): value is RegExp;
    static isArray<T>(value?: any): value is T[];
    static isString(value?: any): value is string;
    static isNumber(value?: any): value is number;
    static isStringNumber(value?: any): boolean;
    static isObject<T>(value?: any): value is T;
    static isEmptyObject(value?: any): boolean;
    static isTablet(): boolean;
    static isIPhone(): boolean;
    static isLegalUrl(url: string): boolean;
    static normalizeUrl(url: string): string;
    static topLevelDomainCombiningString(): string;
    /**
     * remove all null from object
     * @param obj
     * @returns
     */
    static removeNull(value: IKeyValue): object;
    /**
     * Generate a two-dimensional array with the specified number of rows and columns, and fill in the values
     * @param rows row length
     * @param columns column length
     * @param value value to be set
     * @returns
     */
    static fillTwoDimensionalArray(rows: number, columns: number, value: any): any[][];
    /**
     * Generate a two-dimensional array with the specified number of rows and columns, and fill in the values
     * @param rows row length
     * @param columns column length
     * @param value value to be set
     * @returns
     */
    static numToWord(x: number): string;
    /**
     * Column subscript letter to number
     *
     * @param a - Column subscript letter,e.g.,"A1"
     * @returns Column subscript number,e.g.,0
     *
     */
    static ABCatNum(a: string): number;
    /**
     * Column subscript number to letter
     *
     * @param n Column subscript number,e.g.,0
     * @returns Column subscript letter,e.g.,"A1"
     */
    static chatAtABC(n: number): string;
    /**
     * extend two objects
     * @param originJson
     * @param extendJson
     * @returns
     */
    static commonExtend<T>(originJson: IKeyValue, extendJson: IKeyValue): T;
    static hasIntersectionBetweenTwoRanges(range1Start: number, range1End: number, range2Start: number, range2End: number): boolean;
    static isStartValidPosition(name: string): boolean;
    static isValidParameter(name: string): boolean;
    static clamp(value: number, min: number, max: number): number;
    static now(): number;
}
export declare function generateRandomId(n?: number, alphabet?: string): string;
/**
 * compose styles by priority, the latter will overwrite the former
 * @param { Nullable<IStyleData>[]} styles the styles to be composed
 * @returns  { Nullable<IStyleData>[]} Returns the composed style
 */
export declare function composeStyles(...styles: Nullable<IStyleData>[]): IStyleData;
export declare const isNodeEnv: () => boolean;
/**
 * Converts a wildcard pattern with ? and * to a regular expression.
 * @param {string} wildChar - The wildcard string containing ? and *
 * @returns {RegExp} The generated regular expression
 */
export declare function createREGEXFromWildChar(wildChar: string): RegExp;
