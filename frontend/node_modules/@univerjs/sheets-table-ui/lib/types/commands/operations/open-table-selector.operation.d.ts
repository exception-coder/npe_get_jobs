import { IAccessor, IRange, CommandType } from '@univerjs/core';
export declare const OpenTableSelectorOperation: {
    type: CommandType;
    id: string;
    handler(accessor: IAccessor): Promise<boolean>;
};
export interface ITableSelectionInfo {
    unitId: string;
    subUnitId: string;
    range: IRange;
    tableId?: string;
}
export declare function openRangeSelector(accessor: IAccessor, unitId: string, subUnitId: string, range: IRange, tableId?: string): Promise<ITableSelectionInfo | null>;
