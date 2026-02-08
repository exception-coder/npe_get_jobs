import { IMutation } from '@univerjs/core';
import { IArrayFormulaRangeType, IArrayFormulaUnitCellType } from '../../basics/common';
export interface ISetArrayFormulaDataMutationParams {
    arrayFormulaRange: IArrayFormulaRangeType;
    arrayFormulaCellData: IArrayFormulaUnitCellType;
}
/**
 * There is no need to process data here, it is used as the main thread to send data to the worker. The main thread has already updated the data in advance, and there is no need to update it again here.
 */
export declare const SetArrayFormulaDataMutation: IMutation<ISetArrayFormulaDataMutationParams>;
