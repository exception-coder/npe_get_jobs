import { IRange } from './typedef';
import { Disposable } from '../shared/lifecycle';
export declare class SpanModel extends Disposable {
    /**
     * @property Cache for RANGE_TYPE.NORMAL
     */
    private _cellCache;
    /**
     * @property Cache for RANGE_TYPE.ROW
     */
    private _rowCache;
    /**
     * @property Cache for RANGE_TYPE.COLUMN
     */
    private _columnCache;
    /**
     * @property Whether has RANGE_TYPE.ROW
     */
    private _hasRow;
    /**
     * @property Whether has RANGE_TYPE.COLUMN
     */
    private _hasColumn;
    /**
     * @property Whether has RANGE_TYPE.ALL
     */
    private _hasAll;
    /**
     * @property Index for RANGE_TYPE.ALL
     */
    private _allIndex;
    /**
     * @property the original merge data
     */
    private _mergeData;
    private _rangeMap;
    private _skeletonCache;
    constructor(mergeData: IRange[]);
    private _init;
    private _clearCache;
    private _createCache;
    /**
     * Rebuild the merge data cache when the merge data is changed.
     * @param {IRange[]} mergeData
     */
    rebuild(mergeData: IRange[]): void;
    private _createRowCache;
    private _createColumnCache;
    private _createCellAllCache;
    private _createCellCache;
    add(range: IRange): void;
    remove(row: number, column: number): void;
    getMergedCell(row: number, column: number): IRange | null;
    /**
     * Return index of merge data if (row,col) is in merge range. -1 means not in merge range.
     * @param row
     * @param column
     * @returns {number} index of merge range.
     */
    getMergeDataIndex(row: number, column: number): number;
    isRowContainsMergedCell(row: number): boolean;
    isColumnContainsMergedCell(column: number): boolean;
    getMergedCellRange(startRow: number, startColumn: number, endRow: number, endColumn: number): IRange[];
    /**
     * @deprecated sigificant performance impact, use _getCellMergeInfo instead.
     * @param startRow
     * @param startColumn
     * @param endRow
     * @param endColumn
     */
    getMergedCellRangeForSkeleton(startRow: number, startColumn: number, endRow: number, endColumn: number): IRange[];
    private _getRangeFromCache;
    private _getSkeletonRangeFromCache;
    private _getMergeDataIndex;
    getMergeDataSnapshot(): IRange[];
    dispose(): void;
}
