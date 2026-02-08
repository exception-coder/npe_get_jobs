import { ICellDataForSheetInterceptor, IScale } from '@univerjs/core';
import { SpreadsheetSkeleton, UniverRenderingContext, SheetExtension } from '@univerjs/engine-render';
import { ICellPermission } from '@univerjs/sheets';
export declare const RANGE_PROTECTION_CAN_VIEW_RENDER_EXTENSION_KEY = "RANGE_PROTECTION_CAN_VIEW_RENDER_EXTENSION_KEY";
export declare const RANGE_PROTECTION_CAN_NOT_VIEW_RENDER_EXTENSION_KEY = "RANGE_PROTECTION_CAN_NOT_VIEW_RENDER_EXTENSION_KEY";
export type IRangeProtectionRenderCellData = ICellDataForSheetInterceptor & {
    selectionProtection: ICellPermission[];
};
export declare abstract class RangeProtectionRenderExtension extends SheetExtension {
    abstract uKey: string;
    abstract Z_INDEX: number;
    protected _pattern: CanvasPattern | null;
    protected _img: HTMLImageElement;
    renderCache: Set<string>;
    protected _shadowStrategy: 'always' | 'non-editable' | 'non-viewable' | 'none';
    constructor(shadowStrategy?: 'always' | 'non-editable' | 'non-viewable' | 'none');
    clearCache(): void;
    /**
     * Set the shadow strategy for this extension
     * @param strategy The shadow strategy
     */
    setShadowStrategy(strategy: 'always' | 'non-editable' | 'non-viewable' | 'none'): void;
    /**
     * Get the current shadow strategy
     */
    getShadowStrategy(): 'always' | 'non-editable' | 'non-viewable' | 'none';
    protected abstract shouldRender(config: ICellPermission): boolean;
    draw(ctx: UniverRenderingContext, _parentScale: IScale, spreadsheetSkeleton: SpreadsheetSkeleton): void;
}
export declare class RangeProtectionCanViewRenderExtension extends RangeProtectionRenderExtension {
    uKey: string;
    Z_INDEX: number;
    constructor(shadowStrategy?: 'always' | 'non-editable' | 'non-viewable' | 'none');
    protected shouldRender(config: ICellPermission): boolean;
}
export declare class RangeProtectionCanNotViewRenderExtension extends RangeProtectionRenderExtension {
    uKey: string;
    Z_INDEX: number;
    constructor(shadowStrategy?: 'always' | 'non-editable' | 'non-viewable' | 'none');
    protected shouldRender(config: ICellPermission): boolean;
}
