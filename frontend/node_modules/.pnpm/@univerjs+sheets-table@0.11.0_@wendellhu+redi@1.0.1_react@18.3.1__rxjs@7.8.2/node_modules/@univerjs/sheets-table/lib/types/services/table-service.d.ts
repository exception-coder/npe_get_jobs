import { Worksheet, Disposable } from '@univerjs/core';
import { ITableFilterItem, ITableInfoWithUnitId, ITableOptions, ITableRange, TableMetaType } from '../types/type';
import { TableManager } from '../model/table-manager';
import { TableConditionTypeEnum } from '../types/enum';
export declare class SheetTableService extends Disposable {
    private _tableManager;
    constructor(_tableManager: TableManager);
    getTableInfo(unitId: string, tableId: string): ITableInfoWithUnitId | undefined;
    getTableList(unitId: string): ITableInfoWithUnitId[];
    addTable(unitId: string, subUnitId: string, tableName: string, rangeInfo: ITableRange, tableHeader?: string[], tableId?: string, options?: ITableOptions): string;
    deleteTable(unitId: string, subUnitId: string, tableId: string): void;
    getTableMeta(unitId: string, tableId: string): TableMetaType | undefined;
    setTableMeta(unitId: string, tableId: string, meta: TableMetaType): void;
    getTableColumnMeta(unitId: string, tableId: string, index: number): TableMetaType | undefined;
    selTableColumnMeta(unitId: string, tableId: string, index: number, meta: TableMetaType): void;
    addFilter(unitId: string, tableId: string, column: number, filter: ITableFilterItem): void;
    getCellValueWithConditionType(sheet: Worksheet, row: number, col: number, conditionType?: TableConditionTypeEnum): string | number | Date | null | undefined;
}
