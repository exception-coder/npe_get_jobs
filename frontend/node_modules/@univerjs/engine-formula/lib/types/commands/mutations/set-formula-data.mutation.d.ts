import { IMutation } from '@univerjs/core';
import { IFormulaData } from '../../basics/common';
export interface ISetFormulaDataMutationParams {
    formulaData: IFormulaData;
}
/**
 * There is no need to process data here, it is used as the main thread to send data to the worker.
 * The main thread has already updated the data in advance, and there is no need to update it again here.
 *
 * @deprecated Do not use command system as rpc calling method.
 */
export declare const SetFormulaDataMutation: IMutation<ISetFormulaDataMutationParams>;
