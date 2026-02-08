import { IRange, Nullable } from '@univerjs/core';
import { IViewportInfo, Vector2 } from '../../basics/vector2';
import { UniverRenderingContext } from '../../context';
import { SHEET_EXTENSION_TYPE } from './extensions/sheet-extension';
import { SpreadsheetSkeleton } from './sheet.render-skeleton';
import { RenderComponent } from '../component';
export declare abstract class SheetComponent extends RenderComponent<SpreadsheetSkeleton, SHEET_EXTENSION_TYPE, IRange[]> {
    private _skeleton?;
    constructor(oKey: string, _skeleton?: SpreadsheetSkeleton | undefined);
    getSkeleton(): SpreadsheetSkeleton | undefined;
    updateSkeleton(spreadsheetSkeleton: SpreadsheetSkeleton): void;
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this | undefined;
    getParentScale(): {
        scaleX: number;
        scaleY: number;
    };
    abstract getDocuments(): any;
    abstract getNoMergeCellPositionByIndex(rowIndex: number, columnIndex: number): Nullable<{
        startY: number;
        startX: number;
        endX: number;
        endY: number;
    }>;
    getScrollXYByRelativeCoords(coord: Vector2): {
        x: number;
        y: number;
    };
    abstract getSelectionBounding(startRow: number, startColumn: number, endRow: number, endColumn: number): Nullable<{
        startRow: number;
        startColumn: number;
        endRow: number;
        endColumn: number;
    }>;
    protected abstract _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
    /**
     * TODO: DR-Univer, fix as unknown as
     */
    dispose(): void;
}
export declare abstract class SpreadsheetHeader extends SheetComponent {
    protected _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
}
