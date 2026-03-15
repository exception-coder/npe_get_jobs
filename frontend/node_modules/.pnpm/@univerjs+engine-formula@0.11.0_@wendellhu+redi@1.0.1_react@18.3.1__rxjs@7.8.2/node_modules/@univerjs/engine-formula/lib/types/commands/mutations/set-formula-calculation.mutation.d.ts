import { IExecutionOptions, IMutation, Nullable } from '@univerjs/core';
import { IRuntimeOtherUnitDataType, IRuntimeUnitDataPrimitiveType } from '../../basics/common';
import { IFormulaDirtyData } from '../../services/current-data.service';
import { FormulaExecutedStateType, IExecutionInProgressParams } from '../../services/runtime.service';
export interface ISetFormulaCalculationStartMutation extends IFormulaDirtyData {
    options: Nullable<IExecutionOptions>;
}
/**
 * TODO: @DR-Univer
 * Trigger the calculation of the formula and stop the formula
 */
export declare const SetFormulaCalculationStartMutation: IMutation<ISetFormulaCalculationStartMutation>;
export interface ISetFormulaCalculationStopMutation {
}
export declare const SetFormulaCalculationStopMutation: IMutation<ISetFormulaCalculationStopMutation>;
export interface ISetFormulaCalculationNotificationMutation {
    functionsExecutedState?: FormulaExecutedStateType;
    stageInfo?: IExecutionInProgressParams;
}
export declare const SetFormulaCalculationNotificationMutation: IMutation<ISetFormulaCalculationNotificationMutation>;
export interface ISetFormulaCalculationResultMutation {
    unitData: IRuntimeUnitDataPrimitiveType;
    unitOtherData: IRuntimeOtherUnitDataType;
}
export declare const SetFormulaCalculationResultMutation: IMutation<ISetFormulaCalculationResultMutation>;
