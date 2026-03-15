import { IRange, IScale } from '@univerjs/core';
import { UniverRenderingContext } from '../../../context';
import { SpreadsheetSkeleton } from '../sheet.render-skeleton';
import { SheetExtension } from './sheet-extension';
export declare class Custom extends SheetExtension {
    protected Z_INDEX: number;
    uKey: string;
    draw(ctx: UniverRenderingContext, _parentScale: IScale, skeleton: SpreadsheetSkeleton, diffRanges: IRange[] | undefined): void;
}
