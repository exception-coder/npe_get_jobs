import { IMutation } from '@univerjs/core';
import { ITableSetConfig } from '../../types/type';
export interface ISetSheetTableMutationParams {
    unitId: string;
    subUnitId: string;
    tableId: string;
    config: ITableSetConfig;
}
export declare const SetSheetTableMutation: IMutation<ISetSheetTableMutationParams>;
