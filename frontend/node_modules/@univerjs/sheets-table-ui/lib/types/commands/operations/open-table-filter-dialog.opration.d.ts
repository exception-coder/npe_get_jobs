import { ICommand } from '@univerjs/core';
export interface IOpenTableFilterPanelOperationParams {
    row: number;
    col: number;
    unitId: string;
    subUnitId: string;
    tableId: string;
}
export declare const OpenTableFilterPanelOperation: ICommand<IOpenTableFilterPanelOperationParams>;
