import { IStyleData, Nullable } from '@univerjs/core';
export type IRangeThemeStyleItem = Pick<IStyleData, 'bg' | 'ol' | 'bd' | 'cl' | 'ht' | 'vt' | 'bl'>;
export interface IRangeThemeStyleJSON {
    name: string;
    wholeStyle?: IRangeThemeStyleItem;
    headerRowStyle?: IRangeThemeStyleItem;
    headerColumnStyle?: IRangeThemeStyleItem;
    firstRowStyle?: IRangeThemeStyleItem;
    secondRowStyle?: IRangeThemeStyleItem;
    lastRowStyle?: IRangeThemeStyleItem;
    firstColumnStyle?: IRangeThemeStyleItem;
    secondColumnStyle?: IRangeThemeStyleItem;
    lastColumnStyle?: IRangeThemeStyleItem;
}
export declare function composeStyles(styles: IStyleData[]): IRangeThemeStyleItem;
/**
 * Range theme style
 * @description The range theme style is used to set the style of the range.This class is used to create a build-in theme style or a custom theme style.
 */
export declare class RangeThemeStyle {
    private _name;
    /**
     * @property {Nullable<IRangeThemeStyleItem>} wholeStyle effect for the whole range.
     */
    wholeStyle: Nullable<IRangeThemeStyleItem>;
    /**
     * @property {Nullable<IRangeThemeStyleItem>} headerRowStyle effect for the header row.
     */
    headerRowStyle: Nullable<IRangeThemeStyleItem>;
    /**
     * @property {Nullable<IRangeThemeStyleItem>} headerColumnStyle effect for the header column.
     */
    headerColumnStyle: Nullable<IRangeThemeStyleItem>;
    /**
     * @property {Nullable<IRangeThemeStyleItem>} firstRowStyle effect for the first row.
     */
    firstRowStyle: Nullable<IRangeThemeStyleItem>;
    /**
     * @property {Nullable<IRangeThemeStyleItem>} secondRowStyle effect for the second row.
     */
    secondRowStyle: Nullable<IRangeThemeStyleItem>;
    /**
     * @property {Nullable<IRangeThemeStyleItem>} lastRowStyle effect for the last row.
     */
    lastRowStyle: Nullable<IRangeThemeStyleItem>;
    /**
     * @property {Nullable<IRangeThemeStyleItem>} firstColumnStyle effect for the first column.
     */
    firstColumnStyle: Nullable<IRangeThemeStyleItem>;
    /**
     * @property {Nullable<IRangeThemeStyleItem>} secondColumnStyle effect for the second column.
     */
    secondColumnStyle: Nullable<IRangeThemeStyleItem>;
    /**
     * @property {Nullable<IRangeThemeStyleItem>} lastColumnStyle effect for the last column.
     */
    lastColumnStyle: Nullable<IRangeThemeStyleItem>;
    /**
     * @property {Nullable<IRangeThemeStyleItem>} quickly get merge style
     */
    private _mergeCacheMap;
    /**
     * @constructor
     * @param {string} name The name of the range theme style, it used to identify the range theme style.
     * @param {IRangeThemeStyleJSON} [options] The options to initialize the range theme style.
     */
    constructor(name: string, options?: Omit<IRangeThemeStyleJSON, 'name'>);
    /**
     * Gets the name of the range theme style.The name is read only, and use to identifier the range theme style.
     * @returns {string} The name of the range theme style.
     */
    getName(): string;
    getWholeStyle(): Nullable<IRangeThemeStyleItem>;
    setWholeStyle(style: Nullable<IRangeThemeStyleItem>): void;
    getFirstRowStyle(): Nullable<IRangeThemeStyleItem>;
    setFirstRowStyle(style: Nullable<IRangeThemeStyleItem>): void;
    getSecondRowStyle(): Nullable<IRangeThemeStyleItem>;
    setSecondRowStyle(style: Nullable<IRangeThemeStyleItem>): void;
    getLastRowStyle(): Nullable<IRangeThemeStyleItem>;
    setLastRowStyle(style: Nullable<IRangeThemeStyleItem>): void;
    getFirstColumnStyle(): Nullable<IRangeThemeStyleItem>;
    setFirstColumnStyle(style: Nullable<IRangeThemeStyleItem>): void;
    getSecondColumnStyle(): Nullable<IRangeThemeStyleItem>;
    setSecondColumnStyle(style: Nullable<IRangeThemeStyleItem>): void;
    getLastColumnStyle(): Nullable<IRangeThemeStyleItem>;
    setLastColumnStyle(style: Nullable<IRangeThemeStyleItem>): void;
    getHeaderRowStyle(): Nullable<IRangeThemeStyleItem>;
    setHeaderRowStyle(style: Nullable<IRangeThemeStyleItem>): void;
    getHeaderColumnStyle(): Nullable<IRangeThemeStyleItem>;
    setHeaderColumnStyle(style: Nullable<IRangeThemeStyleItem>): void;
    getStyle(offsetRow: number, offsetCol: number, isLastRow: boolean, isLastCol: boolean, isToggled: boolean): IRangeThemeStyleItem | null;
    private _getMergeStyle;
    private _mergeStyle;
    private _resetStyleCache;
    toJson(): IRangeThemeStyleJSON;
    fromJson(json: IRangeThemeStyleJSON): void;
    dispose(): void;
}
