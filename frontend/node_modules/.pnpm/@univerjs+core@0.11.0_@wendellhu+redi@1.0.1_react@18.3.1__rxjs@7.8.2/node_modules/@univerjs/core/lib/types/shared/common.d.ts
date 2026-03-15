import { CellValue, ICellData, ICellDataForSheetInterceptor, ICellWithCoord, IRange, IRangeWithCoord, ISelectionCell } from '../sheets/typedef';
import { Worksheet } from '../sheets/worksheet';
import { IDocumentData } from '../types/interfaces/i-document-data';
import { IColorStyle, IStyleData } from '../types/interfaces/i-style-data';
import { IObjectMatrixPrimitiveType } from './object-matrix';
import { Nullable } from './types';
/**
 * Data type convert, convert ICellWithCoord to IRangeWithCoord
 * @param cellInfo
 * @returns IRangeWithCoord
 */
export declare function convertCellToRange(cellInfo: ICellWithCoord): IRangeWithCoord;
/**
 * @deprecated use `convertCellToRange` instead
 */
declare const makeCellToSelection: typeof convertCellToRange;
export { makeCellToSelection };
export declare function makeCellRangeToRangeData(cellInfo: Nullable<ISelectionCell>): Nullable<IRange>;
export declare function isEmptyCell(cell: Nullable<ICellData>): boolean;
export declare function isCellCoverable(cell: Nullable<ICellDataForSheetInterceptor>): boolean;
export declare function getColorStyle(color: Nullable<IColorStyle>): Nullable<string>;
/**
 * A string starting with an equal sign is a formula
 * @param value
 * @returns
 */
export declare function isFormulaString(value: any): boolean;
/**
 * any string
 * @param value
 * @returns
 */
export declare function isFormulaId(value: any): boolean;
/**
 * transform style object to string
 * @param style
 * @returns
 */
export declare function handleStyleToString(style: IStyleData, isCell?: boolean): string;
export declare function getBorderStyleType(type: string): number;
export declare function getDocsUpdateBody(model: IDocumentData, segmentId?: string): import('..').IDocumentBody | undefined;
export declare function isValidRange(range: IRange, worksheet?: Worksheet): boolean;
/**
 * Covert row/column to range object
 * @param row
 * @param col
 * @returns
 */
export declare function cellToRange(row: number, col: number): IRange;
/**
 * Covert cell value to cell data.
 * @param {CellValue | ICellData} value - The cell value.
 * @returns {ICellData} The cell data.
 */
export declare function covertCellValue(value: CellValue | ICellData): ICellData;
/**
 * Covert cell value array or matrix to cell data.
 * @param {CellValue[][] | IObjectMatrixPrimitiveType<CellValue> | ICellData[][] | IObjectMatrixPrimitiveType<ICellData>} value - The cell value array or matrix.
 * @param {IRange} range - The range.
 * @returns {IObjectMatrixPrimitiveType<ICellData>} The cell data matrix.
 */
export declare function covertCellValues(value: CellValue[][] | IObjectMatrixPrimitiveType<CellValue> | ICellData[][] | IObjectMatrixPrimitiveType<ICellData>, range: IRange): IObjectMatrixPrimitiveType<ICellData>;
