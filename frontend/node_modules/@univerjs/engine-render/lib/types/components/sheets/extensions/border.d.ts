import { IRange, IScale, ObjectMatrix, BorderStyleTypes } from '@univerjs/core';
import { UniverRenderingContext } from '../../../context';
import { IDrawInfo } from '../../extension';
import { BorderCache } from '../interfaces';
import { SpreadsheetSkeleton } from '../sheet.render-skeleton';
import { SheetExtension } from './sheet-extension';
interface IRenderBorderContext {
    ctx: UniverRenderingContext;
    overflowCache: ObjectMatrix<IRange>;
    precisionScale: number;
    spreadsheetSkeleton: SpreadsheetSkeleton;
    diffRanges: IRange[];
    viewRanges: IRange[];
}
export declare class Border extends SheetExtension {
    uKey: string;
    Z_INDEX: number;
    preStyle: BorderStyleTypes;
    preColor: string;
    draw(ctx: UniverRenderingContext, _parentScale: IScale, spreadsheetSkeleton: SpreadsheetSkeleton, diffRanges: IRange[], { viewRanges }: IDrawInfo): void;
    renderBorderByCell(renderBorderContext: IRenderBorderContext, row: number, col: number, borderCacheItem: BorderCache): true | undefined;
    private _getOverflowExclusion;
}
export {};
