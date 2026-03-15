import { IRange, IScale } from '@univerjs/core';
import { SpreadsheetSkeleton, UniverRenderingContext, SheetExtension } from '@univerjs/engine-render';
export declare const dataBarUKey = "sheet-conditional-rule-data-bar";
export declare const defaultDataBarPositiveColor = "#ffbe38";
export declare const defaultDataBarNativeColor = "#abd91a";
export declare const defaultPlaceholderColor = "#000";
export declare class DataBar extends SheetExtension {
    private _paddingRightAndLeft;
    private _paddingTopAndBottom;
    uKey: string;
    Z_INDEX: number;
    _radius: number;
    draw(ctx: UniverRenderingContext, _parentScale: IScale, spreadsheetSkeleton: SpreadsheetSkeleton, diffRanges: IRange[]): false | undefined;
    private _drawRectWithRoundedCorner;
}
