import { ThemeService, RANGE_TYPE } from '@univerjs/core';
import { IRectProps, Scene, Rect } from '@univerjs/engine-render';
import { ISelectionStyle } from '@univerjs/sheets';
import { SelectionControl } from './selection-control';
export declare class MobileSelectionControl extends SelectionControl {
    protected _scene: Scene;
    protected _zIndex: number;
    protected readonly _themeService: ThemeService;
    /**
     * topLeft controlPointer, it is not visible, just transparent, for handling event.
     */
    private _fillControlTopLeft;
    /**
     * bottomRight controlPointer, it is not visible, just transparent, for handling event.
     */
    private _fillControlBottomRight;
    protected _rangeType: RANGE_TYPE;
    constructor(_scene: Scene, _zIndex: number, _themeService: ThemeService, options?: {
        highlightHeader?: boolean;
        enableAutoFill?: boolean;
        rowHeaderWidth: number;
        columnHeaderHeight: number;
        rangeType?: RANGE_TYPE;
    });
    initControlPoints(): void;
    get fillControlTopLeft(): Rect<IRectProps> | null;
    set fillControlTopLeft(value: Rect);
    get fillControlBottomRight(): Rect<IRectProps> | null;
    set fillControlBottomRight(value: Rect);
    get rangeType(): RANGE_TYPE;
    set rangeType(value: RANGE_TYPE);
    dispose(): void;
    protected _updateLayoutOfSelectionControl(style: ISelectionStyle): void;
    getViewportMainScrollInfo(): {
        viewportScrollX: number;
        viewportScrollY: number;
        width: number;
        height: number;
    };
    /**
     * Mainly for row & col selection control point position. update control point position by when scrolling.
     * @param viewportScrollX viewportScrollX
     * @param viewportScrollY
     * @param sheetContentWidth
     * @param sheetContentHeight max sheet content height, for very short sheet, control pointer shoud not out of sheet
     */
    transformControlPoint(viewportScrollX?: number, viewportScrollY?: number, sheetContentWidth?: number, sheetContentHeight?: number): void;
}
