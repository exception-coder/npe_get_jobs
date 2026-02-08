import { DataValidationStatus, IRange, ISheetDataValidationRule, Nullable, Disposable, ICommandService, IUniverInstanceService, ObjectMatrix } from '@univerjs/core';
import { DataValidationModel } from '@univerjs/data-validation';
export declare class DataValidationCacheService extends Disposable {
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _sheetDataValidationModel;
    private _cacheMatrix;
    private _dirtyRanges$;
    readonly dirtyRanges$: import('rxjs').Observable<{
        unitId: string;
        subUnitId: string;
        ranges: IRange[];
        isSetRange?: boolean;
    }>;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _sheetDataValidationModel: DataValidationModel);
    private _initDirtyRanges;
    private _initSheetRemove;
    private _ensureCache;
    ensureCache(unitId: string, subUnitId: string): ObjectMatrix<Nullable<DataValidationStatus>>;
    addRule(unitId: string, subUnitId: string, rule: ISheetDataValidationRule): void;
    removeRule(unitId: string, subUnitId: string, rule: ISheetDataValidationRule): void;
    markRangeDirty(unitId: string, subUnitId: string, ranges: IRange[], isSetRange?: boolean): void;
    private _deleteRange;
    getValue(unitId: string, subUnitId: string, row: number, col: number): Nullable<Nullable<DataValidationStatus>>;
}
