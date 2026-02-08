import { ITableColumnJson, ITableFilterItem, ITableInfo, ITableJson, ITableOptions, ITableRange } from '../types/type';
import { TableColumn } from './table-column';
import { TableFilters } from './table-filter';
export declare class Table {
    private _id;
    private _name;
    /**
     * @property {string} tableStyleId The table style id. If the property is empty, the default style will be used.
     */
    private _tableStyleId?;
    private _showHeader;
    private _showFooter;
    private _range;
    private _columns;
    private _columnOrder;
    tableMeta: Record<string, any>;
    private _tableFilters;
    private _subUnitId;
    constructor(id: string, name: string, range: ITableRange, header: string[], options?: ITableOptions);
    _init(header: string[], options: ITableOptions): void;
    setTableFilterColumn(columnIndex: number, filter: ITableFilterItem): void;
    getTableFilterColumn(columnIndex: number): ITableFilterItem | undefined;
    getTableFilters(): TableFilters;
    getTableFilterRange(): {
        startRow: number;
        startColumn: number;
        endRow: number;
        endColumn: number;
    };
    setColumns(columns: ITableColumnJson[]): void;
    getColumnsCount(): number;
    insertColumn(index: number, column: TableColumn): void;
    removeColumn(index: number): void;
    setTableMeta(meta: Record<string, any>): void;
    getTableMeta(): Record<string, any>;
    getColumn(columnId: string): TableColumn | undefined;
    getTableColumnByIndex(index: number): TableColumn | undefined;
    getColumnNameByIndex(index: number): string;
    getId(): string;
    getRangeInfo(): {
        startRow: number;
        startColumn: number;
        endRow: number;
        endColumn: number;
    };
    getRange(): {
        startRow: number;
        startColumn: number;
        endRow: number;
        endColumn: number;
    };
    setRange(range: ITableRange): void;
    setDisplayName(name: string): void;
    getDisplayName(): string;
    getSubunitId(): string;
    setSubunitId(subUnitId: string): void;
    getTableStyleId(): string;
    setTableStyleId(tableStyleId: string): void;
    isShowHeader(): boolean;
    setShowHeader(showHeader: boolean): void;
    isShowFooter(): boolean;
    getTableInfo(): ITableInfo;
    getTableConfig(): {
        name: string;
        range: {
            startRow: number;
            startColumn: number;
            endRow: number;
            endColumn: number;
        };
        options: {
            showHeader: boolean;
            showFooter: boolean;
        };
        tableStyleId: string | undefined;
    };
    getFilterStates(range: ITableRange): import('..').SheetsTableButtonStateEnum[];
    toJSON(): ITableJson;
    fromJSON(json: ITableJson): void;
    dispose(): void;
}
