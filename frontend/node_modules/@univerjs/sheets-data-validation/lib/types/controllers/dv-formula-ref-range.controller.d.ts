import { ISheetDataValidationRule, Disposable } from '@univerjs/core';
import { DataValidatorRegistryService } from '@univerjs/data-validation';
import { FormulaRefRangeService } from '@univerjs/sheets-formula';
import { SheetDataValidationModel } from '../models/sheet-data-validation-model';
export declare class DataValidationFormulaRefRangeController extends Disposable {
    private _dataValidationModel;
    private _formulaRefRangeService;
    private _validatorRegistryService;
    private _disposableMap;
    constructor(_dataValidationModel: SheetDataValidationModel, _formulaRefRangeService: FormulaRefRangeService, _validatorRegistryService: DataValidatorRegistryService);
    private _getIdWithUnitId;
    registerRule: (unitId: string, subUnitId: string, rule: ISheetDataValidationRule) => void;
    register(unitId: string, subUnitId: string, rule: ISheetDataValidationRule): void;
    private _initRefRange;
}
