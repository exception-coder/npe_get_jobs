import { IRange, Nullable, Disposable, ICommandService, ObjectMatrix, RefAlias } from '@univerjs/core';
import { IActiveDirtyManagerService } from '@univerjs/engine-formula';
import { ConditionalFormattingRuleModel } from '../models/conditional-formatting-rule-model';
type IFormulaItem = {
    formulaText: string;
    cfId: string;
    id: string;
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
    status: FormulaResultStatus;
    formulaId: string;
    result: ObjectMatrix<string | number | boolean | undefined | null | void>;
};
export declare enum FormulaResultStatus {
    NOT_REGISTER = 1,
    SUCCESS = 2,
    WAIT = 3,
    ERROR = 4
}
export declare class ConditionalFormattingFormulaService extends Disposable {
    private _commandService;
    private _activeDirtyManagerService;
    private _conditionalFormattingRuleModel;
    private _formulaMap;
    private _result$;
    result$: import('rxjs').Observable<IFormulaItem & {
        isAllFinished: boolean;
    }>;
    constructor(_commandService: ICommandService, _activeDirtyManagerService: IActiveDirtyManagerService, _conditionalFormattingRuleModel: ConditionalFormattingRuleModel);
    private _initRuleChange;
    private _initFormulaCalculationResultChange;
    private _ensureSubunitFormulaMap;
    getSubUnitFormulaMap(unitId: string, subUnitId: string): RefAlias<IFormulaItem, "id" | "formulaId"> | undefined;
    registerFormulaWithRange(unitId: string, subUnitId: string, cfId: string, formulaText: string, ranges?: IRange[]): void;
    private _removeFormulaByCfId;
    getFormulaResultWithCoords(unitId: string, subUnitId: string, cfId: string, formulaText: string, row?: number, col?: number): {
        status: FormulaResultStatus;
        result?: undefined;
    } | {
        result: Nullable<string | number | boolean | void | null | undefined>;
        status: FormulaResultStatus;
    };
    getFormulaMatrix(unitId: string, subUnitId: string, cfId: string, formulaText: string): {
        status: FormulaResultStatus;
        result?: undefined;
    } | {
        result: ObjectMatrix<string | number | boolean | void | null | undefined>;
        status: FormulaResultStatus;
    } | undefined;
    /**
     * If `formulaText` is not provided, then all caches related to `cfId` will be deleted.
     */
    deleteCache(unitId: string, subUnitId: string, cfId: string, formulaText?: string): IFormulaItem[];
    private _getAllFormulaResultByCfId;
    /**
     * The external environment is not aware of`formulaId`;it communicates internally with the formula engine.
     */
    private _createFormulaId;
    /**
     * A conditional formatting may have multiple formulas;if the formulas are identical,then the results will be consistent.
     */
    createCFormulaId(cfId: string, formulaText: string): string;
}
export {};
