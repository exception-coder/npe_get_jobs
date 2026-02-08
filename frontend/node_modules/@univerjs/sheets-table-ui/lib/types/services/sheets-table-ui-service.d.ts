import { ITableFilterItem, SheetTableService, TableManager } from '@univerjs/sheets-table';
import { ITableFilterItemList, FilterByEnum } from '../types';
import { Disposable, ICommandService, IUniverInstanceService, LocaleService } from '@univerjs/core';
interface ISheetTableFilterPanelProps {
    unitId: string;
    subUnitId: string;
    tableFilter: ITableFilterItem | undefined;
    currentFilterBy: FilterByEnum;
    tableId: string;
    columnIndex: number;
}
export declare class SheetsTableUiService extends Disposable {
    private _tableManager;
    private _sheetTableService;
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _localeService;
    private _itemsCache;
    constructor(_tableManager: TableManager, _sheetTableService: SheetTableService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _localeService: LocaleService);
    private _registerTableFilterChangeEvent;
    getTableFilterPanelInitProps(unitId: string, subUnitId: string, tableId: string, column: number): ISheetTableFilterPanelProps;
    getTableFilterCheckedItems(unitId: string, tableId: string, columnIndex: number): string[];
    setTableFilter(unitId: string, tableId: string, columnIndex: number, tableFilter: ITableFilterItem | undefined): void;
    getTableFilterItems(unitId: string, subUnitId: string, tableId: string, columnIndex: number): ITableFilterItemList;
}
export {};
