import { IRange, IScale } from '@univerjs/core';
import { SpreadsheetSkeleton, UniverRenderingContext, SheetExtension } from '@univerjs/engine-render';
export declare const IconUKey = "sheet-conditional-rule-icon";
export declare const DEFAULT_WIDTH = 15;
export declare const DEFAULT_PADDING = 2;
export declare class ConditionalFormattingIcon extends SheetExtension {
    private _paddingRightAndLeft;
    private _width;
    private _imageMap;
    uKey: string;
    Z_INDEX: number;
    _radius: number;
    constructor();
    draw(ctx: UniverRenderingContext, _parentScale: IScale, spreadsheetSkeleton: SpreadsheetSkeleton, diffRanges: IRange[]): false | undefined;
    private _init;
    private _createKey;
}
