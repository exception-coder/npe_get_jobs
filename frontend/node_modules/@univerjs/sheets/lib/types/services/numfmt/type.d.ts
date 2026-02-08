import { ICellData, IRange, Nullable, ObjectMatrix } from '@univerjs/core';
export type INumfmtItem = {
    i: string;
};
export type FormatType = 'currency' | 'date' | 'datetime' | 'error' | 'fraction' | 'general' | 'grouped' | 'number' | 'percent' | 'scientific' | 'text' | 'time' | 'unknown';
export interface INumfmtItemWithCache {
    _cache?: {
        result: ICellData;
        parameters: number;
    };
    pattern: string;
}
export declare const INumfmtService: import('@wendellhu/redi').IdentifierDecorator<INumfmtService>;
export interface INumfmtService {
    getValue(unitId: string, subUnitId: string, row: number, col: number, model?: ObjectMatrix<INumfmtItem>): Nullable<INumfmtItemWithCache>;
    setValues(unitId: string, subUnitId: string, values: Array<{
        ranges: IRange[];
        pattern: string;
    }>): void;
    deleteValues(unitId: string, subUnitId: string, values: IRange[]): void;
}
