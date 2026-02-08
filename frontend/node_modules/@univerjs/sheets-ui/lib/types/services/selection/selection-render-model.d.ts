import { ICellWithCoord, IRangeWithCoord, Nullable, RANGE_TYPE } from '@univerjs/core';
import { ISelectionWithCoord } from '@univerjs/sheets';
/**
 * Data model for SelectionControl.model
 * NOT Same as @univerjs/sheet.WorkbookSelectionModel, that's data model for Workbook
 */
export declare class SelectionRenderModel implements IRangeWithCoord {
    private _startColumn;
    private _startRow;
    private _endColumn;
    private _endRow;
    private _startX;
    private _startY;
    private _endX;
    private _endY;
    /**
     * The highlight cell of a selection. aka: current cell
     */
    private _primary;
    private _rangeType;
    constructor();
    get startColumn(): number;
    get startRow(): number;
    get endColumn(): number;
    get endRow(): number;
    get startX(): number;
    get startY(): number;
    get endX(): number;
    get endY(): number;
    get currentCell(): Nullable<ICellWithCoord>;
    get rangeType(): RANGE_TYPE;
    /**
     * @deprecated, Duplicate with `Rectangle`
     */
    isEqual(rangeWithCoord: IRangeWithCoord): boolean;
    highlightToSelection(): Nullable<IRangeWithCoord>;
    getRange(): IRangeWithCoord;
    getCell(): Nullable<ICellWithCoord>;
    getRangeType(): RANGE_TYPE;
    setRangeType(rangeType: RANGE_TYPE): void;
    getValue(): ISelectionWithCoord;
    setValue(newSelectionRange: IRangeWithCoord, currentCell: Nullable<ICellWithCoord>): void;
    /**
     * Set primary cell.
     * @TODO lumixraku there are 3 concepts for same thing, primary and current and highlight
     * highlight is best. primary sometimes means the actual cell(actual means ignore merge)
     * @param currentCell
     */
    setCurrentCell(currentCell: Nullable<ICellWithCoord>): void;
    clearCurrentCell(): void;
}
