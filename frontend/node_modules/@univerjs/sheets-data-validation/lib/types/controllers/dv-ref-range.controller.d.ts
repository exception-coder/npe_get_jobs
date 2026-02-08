import { ISheetDataValidationRule, Disposable, Injector } from '@univerjs/core';
import { DataValidatorRegistryService } from '@univerjs/data-validation';
import { RefRangeService } from '@univerjs/sheets';
import { FormulaRefRangeService } from '@univerjs/sheets-formula';
import { SheetDataValidationModel } from '../models/sheet-data-validation-model';
import { DataValidationFormulaService } from '../services/dv-formula.service';
export declare class DataValidationRefRangeController extends Disposable {
    private _dataValidationModel;
    private _injector;
    private _refRangeService;
    private _dataValidationFormulaService;
    private _formulaRefRangeService;
    private _validatorRegistryService;
    private _disposableMap;
    constructor(_dataValidationModel: SheetDataValidationModel, _injector: Injector, _refRangeService: RefRangeService, _dataValidationFormulaService: DataValidationFormulaService, _formulaRefRangeService: FormulaRefRangeService, _validatorRegistryService: DataValidatorRegistryService);
    private _getIdWithUnitId;
    registerRule: (unitId: string, subUnitId: string, rule: ISheetDataValidationRule) => void;
    registerFormula(unitId: string, subUnitId: string, rule: ISheetDataValidationRule): void;
    register(unitId: string, subUnitId: string, rule: ISheetDataValidationRule): void;
    private _initRefRange;
}
