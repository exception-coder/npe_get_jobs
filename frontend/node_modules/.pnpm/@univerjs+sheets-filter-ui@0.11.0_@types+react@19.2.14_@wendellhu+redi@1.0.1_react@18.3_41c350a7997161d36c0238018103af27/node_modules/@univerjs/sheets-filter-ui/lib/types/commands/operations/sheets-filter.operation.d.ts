import { IOperation } from '@univerjs/core';
import { FilterBy } from '@univerjs/sheets-filter';
export declare const FILTER_PANEL_OPENED_KEY = "FILTER_PANEL_OPENED";
export interface IOpenFilterPanelOperationParams {
    unitId: string;
    subUnitId: string;
    col: number;
}
/**
 * The operation to open the filter panel and prepare for changing the filter conditions on a given column.
 */
export declare const OpenFilterPanelOperation: IOperation<IOpenFilterPanelOperationParams>;
export declare const CloseFilterPanelOperation: IOperation;
export interface IChangeFilterByOperationParams {
    filterBy: FilterBy;
}
export declare const ChangeFilterByOperation: IOperation<IChangeFilterByOperationParams>;
