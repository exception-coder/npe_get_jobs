import { Nullable, Workbook } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { BehaviorSubject } from 'rxjs';
import { SheetSkeletonManagerService } from './sheet-skeleton-manager.service';
export interface IScrollState {
    /**
     * offsetX from startRow, coordinate same as viewport, not scrollbar
     */
    offsetX: number;
    /**
     * offsetY from startColumn, coordinate same as viewport, not scrollbar
     */
    offsetY: number;
    /**
     * Current start row in viewportMain in canvas, NOT the first row of visible area of current viewport after freeze.
     * e.g. If no freeze, it's the same as startRow in current viewport.
     * If freeze, this value is smaller than the first row of visible area.  Just pretend that viewMainTop does not exist.
     *
     * e.g. If row 1 ~ 2 is frozen, the first row if viewMain is 3, but sheetViewStartRow still 0.
     */
    sheetViewStartRow: number;
    /**
     * Current start column in viewportMain in canvas, NOT the first column of visible area of current viewport after freeze.
     * e.g. If no freeze, it's the same as startColumn in current viewport.
     * If freeze, this value is smaller than the first column of visible area.  Just pretend that viewMainLeft does not exist.
     *
     * e.g. If column A ~ C is frozen, the first column of viewMain is D, but sheetViewStartColumn still 0.
     */
    sheetViewStartColumn: number;
    /**
     * The duration of the scroll animation in milliseconds.
     */
    duration?: number;
    /**
     * The relative screen offset ratio (horizontal).
     *
     * - Represents how far the target scroll position is along the **visible screen width**.
     * - The value is **relative**, not absolute — for example:
     *   - `screenRatioX = 0` → aligns the target with the **left edge** of the visible area.
     *   - `screenRatioX = 0.5` → centers the target horizontally.
     *   - `screenRatioX = 1` → aligns the target with the **right edge**.
     *
     * The final horizontal scroll offset is calculated as:
     * ```ts
     * offsetX = screenWidth * screenRatioX
     * ```
     *
     * @example
     * // Scroll to 60% of the screen width to make the range appear slightly right-centered
     * screenRatioX = 0.6
     */
    screenRatioX?: number;
    /**
     * The relative screen offset ratio (vertical).
     *
     * - Represents how far the target scroll position is along the **visible screen height**.
     * - The value is **relative**, not absolute — for example:
     *   - `screenRatioY = 0` → aligns the target with the **top edge** of the visible area.
     *   - `screenRatioY = 0.5` → centers the target vertically.
     *   - `screenRatioY = 1` → aligns the target with the **bottom edge**.
     *
     * The final vertical scroll offset is calculated as:
     * ```ts
     * offsetY = screenHeight * screenRatioY
     * ```
     *
     * @example
     * // Scroll to 55% of the screen height for a slightly lower visual bias
     * screenRatioY = 0.55
     */
    screenRatioY?: number;
}
export interface IViewportScrollState extends IScrollState {
    /** scroll value in scrollbar */
    scrollX: number;
    /** scroll value in scrollbar */
    scrollY: number;
    /** scroll value on viewport */
    viewportScrollX: number;
    /** scroll value on viewport */
    viewportScrollY: number;
}
export interface IScrollStateSearchParam {
    unitId: string;
    sheetId: string;
}
export interface IScrollStateWithSearchParam extends IScrollStateSearchParam, IScrollState {
}
export type IScrollStateMap = Map<string, Map<string, IScrollState>>;
/**
 * This service manages and sets the virtual scrolling of the canvas content area.
 * It triggers service changes through SetScrollOperation.
 *
 * ScrollController subscribes to the changes in service data to refresh the view scrolling.
 */
export declare class SheetScrollManagerService implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    /**
     * a map holds all scroll info for each sheet(valid value)
     */
    private readonly _scrollStateMap;
    /**
     * a subject for current sheet scrollInfo, no limit by viewport.
     */
    private readonly _rawScrollInfo$;
    /**
     * a subject for current sheet scrollInfo ( events, ex wheel event and point events add deltaXY to rawScrollInfo$)
     */
    readonly rawScrollInfo$: import('rxjs').Observable<Nullable<IScrollState>>;
    /**
     * a subject for current valid scrollInfo, viewport@_scrollCore would limit rawScrollInfo$ exclude negative value or over max value.
     * use this subject not rawScrollInfo$ when get scrolling state of viewport.
     * The value of this subject is the same as the value of onScrollAfter$
     *
     */
    readonly validViewportScrollInfo$: BehaviorSubject<Nullable<IViewportScrollState>>;
    /**
     * a subject for current valid scrollInfo, viewport@_scrollCore would limit rawScrollInfo$ exclude negative value or over max value.
     * use this subject not rawScrollInfo$ when get scrolling state of viewport.
     */
    private _searchParamForScroll;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService);
    dispose(): void;
    calcViewportScrollFromRowColOffset(scrollInfo: Nullable<IViewportScrollState>): {
        viewportScrollX: number;
        viewportScrollY: number;
    };
    setSearchParam(param: IScrollStateSearchParam): void;
    getScrollStateByParam(param: IScrollStateSearchParam): Readonly<Nullable<IScrollState>>;
    getCurrentScrollState(): Readonly<IScrollState>;
    setValidScrollState(param: IScrollStateWithSearchParam): void;
    /**
     * emit raw scrollInfo by SetScrollOperation, call by ScrollCommand.id.
     * raw scrollInfo means not handled by limit scroll method.
     * @param param
     */
    emitRawScrollParam(param: IScrollStateWithSearchParam): void;
    /**
     * Set _scrollStateMap
     * @param scroll
     */
    setValidScrollStateToCurrSheet(scroll: IViewportScrollState): void;
    clear(): void;
    /**
     * scroll
     * @param scrollInfo
     */
    private _setScrollState;
    private _clearByParamAndNotify;
    private _getCurrentScroll;
    private _emitRawScroll;
}
