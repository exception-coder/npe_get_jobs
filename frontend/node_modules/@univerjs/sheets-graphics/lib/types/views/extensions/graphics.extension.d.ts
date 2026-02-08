import { IRange, IScale, ISelectionCellWithMergeInfo } from '@univerjs/core';
import { IDrawInfo, SpreadsheetSkeleton, UniverRenderingContext, SheetExtension } from '@univerjs/engine-render';
type IGraphicsRenderer = (ctx: UniverRenderingContext, skeleton: SpreadsheetSkeleton, coordInfo: ISelectionCellWithMergeInfo) => void;
export declare class Graphics extends SheetExtension {
    uKey: string;
    protected Z_INDEX: number;
    private _graphicsRenderMap;
    registerRenderer(key: string, renderer: IGraphicsRenderer): void;
    draw(ctx: UniverRenderingContext, _parentScale: IScale, skeleton: SpreadsheetSkeleton, diffBounds: IRange[], { viewRanges }: IDrawInfo): void;
    dispose(): void;
    copy(): Graphics;
}
export {};
