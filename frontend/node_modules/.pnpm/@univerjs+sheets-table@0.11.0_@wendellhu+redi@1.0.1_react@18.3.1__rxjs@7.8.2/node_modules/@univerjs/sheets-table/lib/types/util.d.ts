import { ICellData, IDocumentData, Nullable } from '@univerjs/core';
import { ITableConditionFilterItem, ITableFilterItem, ITableManualFilterItem } from './types/type';
import { SheetsTableButtonStateEnum, SheetsTableSortStateEnum } from './types/enum';
export declare function getColumnName(columnIndex: number, columnText: string): string;
export declare const getStringFromDataStream: (data: IDocumentData) => string;
/**
 *  transform cell data to dimension name
 * @param cellData the sheet cell data
 * @param styles workBook styles collection
 * @param patternInfoRecord The cache record for pattern info
 * @returns {string} The dimension name
 */
export declare function convertCellDataToString(cellData: Nullable<ICellData>): string;
export declare function getTableFilterState(tableFilter: ITableFilterItem | undefined, sortState: SheetsTableSortStateEnum): SheetsTableButtonStateEnum;
export declare function isConditionFilter(filter: ITableFilterItem | undefined): filter is ITableConditionFilterItem;
export declare function isManualFilter(filter: ITableFilterItem | undefined): filter is ITableManualFilterItem;
