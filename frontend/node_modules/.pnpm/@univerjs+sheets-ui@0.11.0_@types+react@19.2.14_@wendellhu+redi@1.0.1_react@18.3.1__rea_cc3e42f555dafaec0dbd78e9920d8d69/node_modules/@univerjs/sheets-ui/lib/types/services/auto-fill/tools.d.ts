import { ICellData, IRange, Nullable, CellValueType, Direction } from '@univerjs/core';
export declare const chnNumChar: {
    零: number;
    一: number;
    二: number;
    三: number;
    四: number;
    五: number;
    六: number;
    七: number;
    八: number;
    九: number;
};
export declare const chnNumChar2: string[];
export declare const chnUnitSection: string[];
export declare const chnUnitChar: string[];
export interface ICopyDataInType {
    data: Array<Nullable<ICellData>>;
    index: ICopyDataInTypeIndexInfo;
}
export type ICopyDataInTypeIndexInfo = number[];
export declare const chnNameValue: {
    十: {
        value: number;
        secUnit: boolean;
    };
    百: {
        value: number;
        secUnit: boolean;
    };
    千: {
        value: number;
        secUnit: boolean;
    };
    万: {
        value: number;
        secUnit: boolean;
    };
    亿: {
        value: number;
        secUnit: boolean;
    };
};
export declare function chineseToNumber(chnStr?: Nullable<string>): number;
export declare function sectionToChinese(section: number): string;
export declare function numberToChinese(num: number): string;
export declare function isChnNumber(txt?: string): boolean;
export declare function matchExtendNumber(txt?: string): {
    isExtendNumber: boolean;
    matchTxt?: undefined;
    beforeTxt?: undefined;
    afterTxt?: undefined;
} | {
    isExtendNumber: boolean;
    matchTxt: number;
    beforeTxt: string;
    afterTxt: string;
};
export declare function isChnWeek1(txt: string): boolean;
export declare function isChnWeek2(txt: string): boolean;
export declare function isChnWeek3(txt: string): boolean;
export declare function getLenS(indexArr: any[], rsd: number): number;
/**
 * equal diff
 * @param arr
 * @returns
 */
export declare function isEqualDiff(arr: number[]): boolean;
export declare function getDataIndex(csLen: number, asLen: number, indexArr: number[]): ICopyDataInTypeIndexInfo;
export declare function fillCopy(data: Array<Nullable<ICellData>>, len: number): {
    p: import('@univerjs/core').IDocumentData | null;
    s: string | import('@univerjs/core').IStyleData | null;
    v: import('@univerjs/core').CellValue | null;
    t: CellValueType | null;
    f: string | null;
    ref?: Nullable<string>;
    si: string | null;
    custom?: import('@univerjs/core').CustomData;
}[];
export declare function fillCopyStyles(data: Array<Nullable<ICellData>>, len: number): {
    s: Nullable<string | import('@univerjs/core').IStyleData>;
}[];
export declare function isEqualRatio(arr: number[]): boolean;
export declare function getXArr(len: number): number[];
export declare function fillSeries(data: Array<Nullable<ICellData>>, len: number, direction: Direction): ICellData[];
export declare function forecast(x: number, yArr: number[], xArr: number[], forward?: boolean): number;
export declare function fillExtendNumber(data: Array<Nullable<ICellData>>, len: number, step: number): ICellData[];
export declare function fillOnlyFormat(data: Array<Nullable<ICellData>>, len: number): ICellData[];
export declare function fillChnWeek(data: Array<Nullable<ICellData>>, len: number, step: number, weekType?: number): ICellData[];
export declare function fillChnNumber(data: Array<Nullable<ICellData>>, len: number, step: number): ICellData[];
export declare function isLoopSeries(txt: string): boolean;
export declare function getLoopSeriesInfo(txt: string): {
    name: string;
    series: string[];
};
export declare function fillLoopSeries(data: Array<Nullable<ICellData>>, len: number, step: number, series: string[]): ICellData[];
export declare function getAutoFillRepeatRange(sourceRange: IRange, targetRange: IRange): {
    repeatStartCell: {
        col: number;
        row: number;
    };
    relativeRange: IRange;
}[];
/**
 * Formulas or Boolean values do not need to update cell.v
 * @param cell
 * @returns
 */
export declare function needsUpdateCellValue(cell: ICellData): boolean;
/**
 * Remove cell.custom
 * @param cell
 */
export declare function removeCellCustom(cell: Nullable<ICellData>): void;
