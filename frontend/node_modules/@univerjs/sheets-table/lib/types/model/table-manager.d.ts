import { IRange, Disposable, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { ITableAddedEvent, ITableDeletedEvent, ITableFilterChangedEvent, ITableFilterItem, ITableInfoWithUnitId, ITableNameChangedEvent, ITableOptions, ITableRange, ITableRangeChangedEvent, ITableRangeRowColOperation, ITableRangeUpdate, ITableRangeWithState, ITableResource, ITableSetConfig, ITableThemeChangedEvent } from '../types/type';
import { Table } from './table';
export declare class TableManager extends Disposable {
    private readonly _univerInstanceService;
    private readonly _localeService;
    private _tableMap;
    private _tableAdd$;
    tableAdd$: import('rxjs').Observable<ITableAddedEvent>;
    private _tableDelete$;
    tableDelete$: import('rxjs').Observable<ITableDeletedEvent>;
    private _tableNameChanged$;
    tableNameChanged$: import('rxjs').Observable<ITableNameChangedEvent>;
    private _tableRangeChanged$;
    tableRangeChanged$: import('rxjs').Observable<ITableRangeChangedEvent>;
    private _tableThemeChanged$;
    tableThemeChanged$: import('rxjs').Observable<ITableThemeChangedEvent>;
    private _tableFilterChanged$;
    tableFilterChanged$: import('rxjs').Observable<ITableFilterChangedEvent>;
    private _tableInitStatus;
    tableInitStatus$: import('rxjs').Observable<boolean>;
    constructor(_univerInstanceService: IUniverInstanceService, _localeService: LocaleService);
    private _ensureUnit;
    getColumnHeader(unitId: string, subUnitId: string, range: ITableRange, prefixText?: string): string[];
    /**
     * Add a table to univer.
     * @param {string} unitId The unit id of the table.
     * @param {string} subUnitId The subunit id of the table.
     * @param {string} name The table name, it should be unique in the unit or it will be appended with a number.
     * @param {ITableRange} range The range of the table, it contains the unit id and subunit id.
     * @param {string[]} [header] The header of the table, if not provided, it will be generated based on the range.
     * @param {string} [initId] The initial id of the table, if not provided, a random id will be generated.
     * @param {ITableOptions} [options] Other options of the table.
     * @returns {string} The table id.
     */
    addTable(unitId: string, subUnitId: string, name: string, range: ITableRange, header?: string[], initId?: string, options?: ITableOptions): string;
    addFilter(unitId: string, tableId: string, column: number, filter: ITableFilterItem | undefined): void;
    getFilterRanges(unitId: string, subUnitId: string): IRange[];
    getSheetFilterRangeWithState(unitId: string, subUnitId: string): ITableRangeWithState[];
    getTable(unitId: string, tableId: string): Table | undefined;
    /**
     * Get the unique table name, in excel, the table name should be unique because it is used as a reference.
     * @param {string} unitId The unit id of the table.
     * @param {string} baseName The base name of the table.
     * @returns {string} The unique table name
     */
    getUniqueTableName(unitId: string, baseName: string): string;
    /**
     * Get table by unit id and table id.
     * @param {string} unitId  The unit id of the table.
     * @param {string} tableId The table id.
     * @returns {Table} The table.
     */
    getTableById(unitId: string, tableId: string): Table | undefined;
    getTableList(unitId: string): ITableInfoWithUnitId[];
    /**
     * Get the table list by unit id and subunit id.
     * @param {string} unitId The unit id of the table.
     * @param {string} subUnitId The subunit id of the table.
     * @returns {Table[]} The table list.
     */
    getTablesBySubunitId(unitId: string, subUnitId: string): Table[];
    getTablesInfoBySubunitId(unitId: string, subUnitId: string): {
        id: string;
        name: string;
        range: {
            startRow: number;
            startColumn: number;
            endRow: number;
            endColumn: number;
        };
    }[];
    deleteTable(unitId: string, tableId: string): void;
    operationTableRowCol(unitId: string, tableId: string, config: ITableRangeRowColOperation): void;
    updateTableRange(unitId: string, tableId: string, config: ITableRangeUpdate): void;
    setTableByConfig(unitId: string, tableId: string, config: ITableSetConfig): void;
    toJSON(unitId: string): ITableResource;
    fromJSON(unitId: string, data: ITableResource): void;
    deleteUnitId(unitId: string): void;
    dispose(): void;
}
