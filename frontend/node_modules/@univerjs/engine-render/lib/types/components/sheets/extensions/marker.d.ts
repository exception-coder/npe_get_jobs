import { IRange, IScale } from '@univerjs/core';
import { UniverRenderingContext } from '../../../context';
import { SpreadsheetSkeleton } from '../sheet.render-skeleton';
import { SheetExtension } from './sheet-extension';
export declare class Marker extends SheetExtension {
    protected Z_INDEX: number;
    uKey: string;
    draw(ctx: UniverRenderingContext, parentScale: IScale, skeleton: SpreadsheetSkeleton, diffRanges: IRange[]): void;
}
