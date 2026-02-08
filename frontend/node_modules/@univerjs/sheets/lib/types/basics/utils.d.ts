import { IAccessor, ICellData, IObjectMatrixPrimitiveType, IRange, Nullable, UniverInstanceService, Workbook, Worksheet } from '@univerjs/core';
import { IDiscreteRange } from './interfaces';
export declare const groupByKey: <T = Record<string, unknown>>(arr: T[], key: string, blankKey?: string) => Record<string, T[]>;
export declare const createUniqueKey: (initValue?: number) => () => number;
export declare function findFirstNonEmptyCell(range: IRange, worksheet: Worksheet): IRange | null;
/**
 * Generate cellValue from range and set null
 * @param range
 * @returns
 */
export declare function generateNullCell(range: IRange[]): IObjectMatrixPrimitiveType<Nullable<ICellData>>;
/**
 * Generate cellValue from range and set v/p/f/si/custom to null
 * @param range
 * @returns
 */
export declare function generateNullCellValue(range: IRange[]): IObjectMatrixPrimitiveType<ICellData>;
export declare function generateNullCellStyle(ranges: IRange[]): IObjectMatrixPrimitiveType<ICellData>;
export declare function getActiveWorksheet(instanceService: UniverInstanceService): [Nullable<Workbook>, Nullable<Worksheet>];
export declare function rangeToDiscreteRange(range: IRange, accessor: IAccessor, unitId?: string, subUnitId?: string): IDiscreteRange | null;
export declare function getVisibleRanges(ranges: IRange[], accessor: IAccessor, unitId?: string, subUnitId?: string): IRange[];
