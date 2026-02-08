import { IAccessor, ICellData, Nullable, Workbook, Worksheet } from '@univerjs/core';
import { IConditionFormattingRule } from '../type';
import { BehaviorSubject } from 'rxjs';
export declare enum CalculateEmitStatus {
    preComputingStart = "preComputingStart",
    preComputing = "preComputing",
    preComputingEnd = "preComputingEnd",
    preComputingError = "preComputingError"
}
export interface IContext {
    unitId: string;
    subUnitId: string;
    workbook: Workbook;
    worksheet: Worksheet;
    accessor: IAccessor;
    rule: IConditionFormattingRule;
    getCellValue: (row: number, col: number) => ICellData;
    limit: number;
}
/**
 * Processing Main Path Calculation Logic
 */
export declare abstract class BaseCalculateUnit<C = any, S = any> {
    private _context;
    /**
     * 3nd-level cache
     */
    private _cache;
    protected _preComputingStatus$: BehaviorSubject<CalculateEmitStatus>;
    preComputingStatus$: import('rxjs').Observable<CalculateEmitStatus>;
    /**
     * 2nd-level cache
     */
    private _preComputingCache;
    private _rule;
    constructor(_context: IContext);
    setCacheLength(length: number): void;
    clearCache(): void;
    resetPreComputingCache(): void;
    updateRule(rule: IConditionFormattingRule): void;
    getCell(row: number, col: number): Nullable<S>;
    abstract preComputing(row: number, col: number, context: IContext): void;
    /**
     * If a null value is returned, it indicates that caching is not required.
     */
    protected abstract getCellResult(row: number, col: number, preComputingResult: Nullable<C>, context: IContext): Nullable<S>;
    protected setPreComputingCache(v: C): void;
    protected getPreComputingResult(_row: number, _col: number): Nullable<C>;
    private _createKey;
    private _setCache;
    private _getContext;
    private _initClearCacheListener;
}
