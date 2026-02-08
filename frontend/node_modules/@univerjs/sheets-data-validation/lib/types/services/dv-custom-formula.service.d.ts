import { ISheetDataValidationRule, Disposable, IUniverInstanceService } from '@univerjs/core';
import { DataValidationModel, DataValidatorRegistryService } from '@univerjs/data-validation';
import { RegisterOtherFormulaService } from '@univerjs/sheets-formula';
import { DataValidationCacheService } from './dv-cache.service';
interface IFormulaData {
    formula: string;
    originRow: number;
    originCol: number;
    formulaId: string;
}
export declare class DataValidationCustomFormulaService extends Disposable {
    private readonly _instanceSrv;
    private _registerOtherFormulaService;
    private readonly _dataValidationModel;
    private readonly _dataValidationCacheService;
    private readonly _validatorRegistryService;
    /**
     * Map of origin formula of rule
     */
    private _ruleFormulaMap;
    private _ruleFormulaMap2;
    constructor(_instanceSrv: IUniverInstanceService, _registerOtherFormulaService: RegisterOtherFormulaService, _dataValidationModel: DataValidationModel, _dataValidationCacheService: DataValidationCacheService, _validatorRegistryService: DataValidatorRegistryService);
    dispose(): void;
    private _initFormulaResultHandler;
    private _ensureMaps;
    private _registerFormula;
    private _handleDirtyRanges;
    private _initDirtyRanges;
    deleteByRuleId(unitId: string, subUnitId: string, ruleId: string): void;
    private _addFormulaByRange;
    addRule(unitId: string, subUnitId: string, rule: ISheetDataValidationRule): void;
    getCellFormulaValue(unitId: string, subUnitId: string, ruleId: string, row: number, column: number): Promise<import('@univerjs/core').Nullable<import('@univerjs/core').ICellData>>;
    getCellFormula2Value(unitId: string, subUnitId: string, ruleId: string, row: number, column: number): Promise<import('@univerjs/core').Nullable<import('@univerjs/core').ICellData>>;
    getCellFormulaValueSync(unitId: string, subUnitId: string, ruleId: string, row: number, column: number): import('@univerjs/core').Nullable<import('@univerjs/core').ICellData>;
    getCellFormula2ValueSync(unitId: string, subUnitId: string, ruleId: string, row: number, column: number): import('@univerjs/core').Nullable<import('@univerjs/core').ICellData>;
    getRuleFormulaInfo(unitId: string, subUnitId: string, ruleId: string): IFormulaData | undefined;
    makeRuleDirty(unitId: string, subUnitId: string, ruleId: string): void;
}
export {};
