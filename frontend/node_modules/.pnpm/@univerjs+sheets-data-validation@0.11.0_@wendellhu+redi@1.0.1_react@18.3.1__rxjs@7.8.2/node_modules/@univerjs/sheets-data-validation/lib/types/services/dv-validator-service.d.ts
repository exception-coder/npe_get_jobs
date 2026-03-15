import { IDataValidationRule, IRange, Nullable, ObjectMatrix, DataValidationStatus, Disposable, IUniverInstanceService, LifecycleService } from '@univerjs/core';
import { SheetDataValidationModel } from '../models/sheet-data-validation-model';
import { DataValidationCacheService } from './dv-cache.service';
export declare class SheetsDataValidationValidatorService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _sheetDataValidationModel;
    private readonly _dataValidationCacheService;
    private readonly _lifecycleService;
    constructor(_univerInstanceService: IUniverInstanceService, _sheetDataValidationModel: SheetDataValidationModel, _dataValidationCacheService: DataValidationCacheService, _lifecycleService: LifecycleService);
    private _initRecalculate;
    private _validatorByCell;
    validatorCell(unitId: string, subUnitId: string, row: number, col: number): Promise<DataValidationStatus>;
    validatorRanges(unitId: string, subUnitId: string, ranges: IRange[]): Promise<DataValidationStatus[][]>;
    validatorWorksheet(unitId: string, subUnitId: string): Promise<ObjectMatrix<Nullable<DataValidationStatus>>>;
    validatorWorkbook(unitId: string): Promise<Record<string, ObjectMatrix<Nullable<DataValidationStatus>>>>;
    getDataValidations(unitId: string, subUnitId: string, ranges: IRange[]): IDataValidationRule[];
    getDataValidation(unitId: string, subUnitId: string, ranges: IRange[]): Nullable<IDataValidationRule>;
}
