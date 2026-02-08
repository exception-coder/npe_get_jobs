import { IUniverInstanceService, Nullable, Workbook } from '@univerjs/core';
import { Engine, IRenderContext, IRenderManagerService, Rect, Scene, Spreadsheet, SpreadsheetColumnHeader, SpreadsheetHeader, SpreadsheetSkeleton, Viewport } from '@univerjs/engine-render';
export interface ISheetObjectParam {
    spreadsheet: Spreadsheet;
    spreadsheetRowHeader: SpreadsheetHeader;
    spreadsheetColumnHeader: SpreadsheetColumnHeader;
    /**
     * sheet corner: a rect which placed on the intersection of rowHeader & columnHeader
     */
    spreadsheetLeftTopPlaceholder: Rect;
    scene: Scene;
    engine: Engine;
}
/**
 * Get render objects of a spreadsheet.
 */
export declare function getSheetObject(univerInstanceService: IUniverInstanceService | Workbook, renderManagerService: IRenderManagerService | IRenderContext): Nullable<ISheetObjectParam>;
export declare function getCoordByCell(row: number, col: number, scene: Scene, skeleton: SpreadsheetSkeleton): {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
};
export declare function getCoordByOffset(evtOffsetX: number, evtOffsetY: number, scene: Scene, skeleton: SpreadsheetSkeleton, viewport?: Viewport, closeFirst?: boolean): {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    row: number;
    column: number;
};
export declare function getTransformCoord(evtOffsetX: number, evtOffsetY: number, scene: Scene, skeleton: SpreadsheetSkeleton): {
    x: number;
    y: number;
};
