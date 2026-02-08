import { Nullable } from '@univerjs/core';
import { IViewportInfo, Vector2 } from '../../basics/vector2';
import { UniverRenderingContext } from '../../context';
import { IRowsHeaderCfgParam, RowHeaderLayout } from './extensions/row-header-layout';
import { SpreadsheetSkeleton } from './sheet.render-skeleton';
import { SpreadsheetHeader } from './sheet-component';
export declare class SpreadsheetRowHeader extends SpreadsheetHeader {
    getDocuments(): void;
    getNoMergeCellPositionByIndex(rowIndex: number, columnIndex: number): Nullable<{
        startY: number;
        startX: number;
        endX: number;
        endY: number;
    }>;
    getSelectionBounding(startRow: number, startColumn: number, endRow: number, endColumn: number): Nullable<{
        startRow: number;
        startColumn: number;
        endRow: number;
        endColumn: number;
    }>;
    private _rowHeaderLayoutExtension;
    constructor(oKey: string, spreadsheetSkeleton?: SpreadsheetSkeleton);
    get rowHeaderLayoutExtension(): RowHeaderLayout;
    draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
    isHit(coord: Vector2): boolean;
    private _initialDefaultExtension;
    setCustomHeader(cfg: IRowsHeaderCfgParam, sheetId?: string): void;
}
