import { Worksheet } from '@univerjs/core';
import { SheetsTableButtonStateEnum, SheetsTableSortStateEnum } from '../types/enum';
import { ITableFilterItem, ITableFilterJSON, ITableRange } from '../types/type';
export declare class TableFilters {
    private _tableColumnFilterList;
    private _tableSortInfo;
    private _filterOutRows;
    constructor();
    setColumnFilter(columnIndex: number, filter: ITableFilterItem | undefined): void;
    setSortState(columnIndex: number, sortState: SheetsTableSortStateEnum): void;
    getColumnFilter(columnIndex: number): ITableFilterItem | undefined;
    getFilterState(columnIndex: number): SheetsTableButtonStateEnum;
    getSortState(): {
        columnIndex: number;
        sortState: SheetsTableSortStateEnum;
    };
    getFilterStates(range: ITableRange): SheetsTableButtonStateEnum[];
    getFilterOutRows(): Set<number>;
    doFilter(sheet: Worksheet, range: ITableRange): Set<number>;
    doColumnFilter(sheet: Worksheet, range: ITableRange, columnIndex: number, filterOutRows: Set<number>): void;
    private _getNumberCalculatedOptions;
    getExecuteFunc(sheet: Worksheet, range: ITableRange, columnIndex: number, filter: ITableFilterItem): (value: any) => boolean;
    toJSON(): ITableFilterJSON;
    fromJSON(json: ITableFilterJSON): void;
    dispose(): void;
}
