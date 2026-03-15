import { Nullable } from '@univerjs/core';
import { IViewportInfo, Vector2 } from '../../basics/vector2';
import { UniverRenderingContext } from '../../context';
import { ColumnHeaderLayout, IColumnsHeaderCfgParam } from './extensions/column-header-layout';
import { SpreadsheetSkeleton } from './sheet.render-skeleton';
import { SpreadsheetHeader } from './sheet-component';
export declare class SpreadsheetColumnHeader extends SpreadsheetHeader {
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
    private _columnHeaderLayoutExtension;
    constructor(oKey: string, spreadsheetSkeleton?: SpreadsheetSkeleton);
    get columnHeaderLayoutExtension(): ColumnHeaderLayout;
    draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
    isHit(coord: Vector2): boolean;
    private _initialDefaultExtension;
    /**
     * Customize column header, such as custom header text and background.
     * @param cfg
     */
    setCustomHeader(cfg: IColumnsHeaderCfgParam, sheetId?: string): void;
}
