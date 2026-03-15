import { IMutation } from '@univerjs/core';
import { IOtherFormulaDataItem } from '../../basics/common';
export interface ISetOtherFormulaMutationParams {
    unitId: string;
    subUnitId: string;
    formulaMap: Record<string, IOtherFormulaDataItem>;
}
export interface IRemoveOtherFormulaMutationParams {
    unitId: string;
    subUnitId: string;
    formulaIdList: string[];
}
/**
 * In the formula engine, the mutation is solely responsible for communication between the worker and the main thread.
 * It requires setting local to true during execution.
 */
export declare const SetOtherFormulaMutation: IMutation<ISetOtherFormulaMutationParams>;
export declare const RemoveOtherFormulaMutation: IMutation<IRemoveOtherFormulaMutationParams>;
