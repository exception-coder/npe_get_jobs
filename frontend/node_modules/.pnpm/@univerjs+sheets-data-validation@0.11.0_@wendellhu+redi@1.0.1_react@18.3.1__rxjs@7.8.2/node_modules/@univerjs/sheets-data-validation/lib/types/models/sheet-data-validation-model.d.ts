import { DataValidationType, ISheetDataValidationRule, DataValidationStatus, Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IRuleChange, DataValidationModel, DataValidatorRegistryService } from '@univerjs/data-validation';
import { ISheetLocation } from '@univerjs/sheets';
import { DataValidationCacheService } from '../services/dv-cache.service';
import { DataValidationCustomFormulaService } from '../services/dv-custom-formula.service';
import { DataValidationFormulaService } from '../services/dv-formula.service';
import { RuleMatrix } from './rule-matrix';
export interface IValidStatusChange {
    unitId: string;
    subUnitId: string;
    row: number;
    col: number;
    ruleId: string;
    status: DataValidationStatus;
}
export declare class SheetDataValidationModel extends Disposable {
    private readonly _dataValidationModel;
    private readonly _univerInstanceService;
    private _dataValidatorRegistryService;
    private _dataValidationCacheService;
    private _dataValidationFormulaService;
    private _dataValidationCustomFormulaService;
    private readonly _commandService;
    private readonly _ruleMatrixMap;
    private readonly _validStatusChange$;
    private readonly _ruleChange$;
    readonly ruleChange$: import('rxjs').Observable<IRuleChange>;
    readonly validStatusChange$: import('rxjs').Observable<IValidStatusChange>;
    constructor(_dataValidationModel: DataValidationModel, _univerInstanceService: IUniverInstanceService, _dataValidatorRegistryService: DataValidatorRegistryService, _dataValidationCacheService: DataValidationCacheService, _dataValidationFormulaService: DataValidationFormulaService, _dataValidationCustomFormulaService: DataValidationCustomFormulaService, _commandService: ICommandService);
    private _initUniverInstanceListener;
    private _initRuleUpdateListener;
    private _ensureRuleMatrix;
    private _addRuleSideEffect;
    private _addRule;
    private _updateRule;
    private _removeRule;
    getValidator(type: DataValidationType | string): import('@univerjs/data-validation').BaseDataValidator | undefined;
    getRuleIdByLocation(unitId: string, subUnitId: string, row: number, col: number): string | undefined;
    getRuleByLocation(unitId: string, subUnitId: string, row: number, col: number): ISheetDataValidationRule | undefined;
    validator(rule: ISheetDataValidationRule, pos: ISheetLocation, _onCompete?: (status: DataValidationStatus, changed: boolean) => void): DataValidationStatus;
    getRuleObjectMatrix(unitId: string, subUnitId: string): RuleMatrix;
    getRuleById(unitId: string, subUnitId: string, ruleId: string): ISheetDataValidationRule | undefined;
    getRuleIndex(unitId: string, subUnitId: string, ruleId: string): number;
    getRules(unitId: string, subUnitId: string): ISheetDataValidationRule[];
    getUnitRules(unitId: string): [string, ISheetDataValidationRule[]][];
    deleteUnitRules(unitId: string): void;
    getSubUnitIds(unitId: string): string[];
    getAll(): (readonly [string, [string, import('@univerjs/core').IDataValidationRule[]][]])[];
}
