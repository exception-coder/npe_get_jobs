import { IScale } from '@univerjs/core';
import { SpreadsheetSkeleton, UniverRenderingContext, SheetExtension } from '@univerjs/engine-render';
export declare const worksheetProtectionKey = "worksheet-protection";
export declare class WorksheetProtectionRenderExtension extends SheetExtension {
    uKey: string;
    Z_INDEX: number;
    private _pattern;
    private _img;
    protected _shadowStrategy: 'always' | 'non-editable' | 'non-viewable' | 'none';
    constructor(shadowStrategy?: 'always' | 'non-editable' | 'non-viewable' | 'none');
    draw(ctx: UniverRenderingContext, _parentScale: IScale, spreadsheetSkeleton: SpreadsheetSkeleton): false | undefined;
    /**
     * Set the shadow strategy for this extension
     * @param strategy The shadow strategy
     */
    setShadowStrategy(strategy: 'always' | 'non-editable' | 'non-viewable' | 'none'): void;
    /**
     * Get the current shadow strategy
     */
    getShadowStrategy(): 'always' | 'non-editable' | 'non-viewable' | 'none';
    setZIndex(zIndex: number): void;
}
