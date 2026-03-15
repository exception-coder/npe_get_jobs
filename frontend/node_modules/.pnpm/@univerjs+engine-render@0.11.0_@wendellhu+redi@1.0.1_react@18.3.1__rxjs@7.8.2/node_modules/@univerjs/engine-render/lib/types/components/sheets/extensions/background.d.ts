import { ICellWithCoord, IRange, IScale, ObjectMatrix } from '@univerjs/core';
import { UniverRenderingContext } from '../../../context';
import { IDrawInfo } from '../../extension';
import { SpreadsheetSkeleton } from '../sheet.render-skeleton';
import { SheetExtension } from './sheet-extension';
interface IRenderBGContext {
    ctx: UniverRenderingContext;
    spreadsheetSkeleton: SpreadsheetSkeleton;
    backgroundPositions: ObjectMatrix<ICellWithCoord>;
    checkOutOfViewBound: boolean;
    backgroundPaths: Path2D;
    scaleX: number;
    scaleY: number;
    viewRanges: IRange[];
    diffRanges: IRange[];
    cellInfo: ICellWithCoord;
}
export declare class Background extends SheetExtension {
    uKey: string;
    Z_INDEX: number;
    PRINTING_Z_INDEX: number;
    get zIndex(): number;
    draw(ctx: UniverRenderingContext, _parentScale: IScale, spreadsheetSkeleton: SpreadsheetSkeleton, diffRanges: IRange[], { viewRanges, checkOutOfViewBound }: IDrawInfo): void;
    renderBGByCell(bgContext: IRenderBGContext, row: number, col: number): true | undefined;
}
export {};
