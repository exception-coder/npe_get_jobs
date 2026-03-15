import { IOperation } from '@univerjs/core';
export interface ISetWorksheetActiveOperationParams {
    unitId: string;
    subUnitId: string;
}
export declare const SetWorksheetActiveOperation: IOperation<ISetWorksheetActiveOperationParams>;
