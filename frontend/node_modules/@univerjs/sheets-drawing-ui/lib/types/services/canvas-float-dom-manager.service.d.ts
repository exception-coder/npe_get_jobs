import { IDisposable, IPosition, IRange, ITransformState, Serializable, Worksheet, Disposable, DrawingTypeEnum, ICommandService, IUniverInstanceService, LifecycleService } from '@univerjs/core';
import { BaseObject, IBoundRectNoAngle, Scene, SpreadsheetSkeleton, IRenderManagerService, Rect } from '@univerjs/engine-render';
import { IFloatDomLayout, CanvasFloatDomService } from '@univerjs/ui';
import { IDrawingManagerService } from '@univerjs/drawing';
import { ISheetDrawingService } from '@univerjs/sheets-drawing';
import { BehaviorSubject } from 'rxjs';
export interface ICanvasFloatDom {
    /**
     * whether allow transform float-dom
     */
    allowTransform?: boolean;
    /**
     * initial position of float-dom
     */
    initPosition: IPosition;
    componentKey: string;
    /**
     * unitId of workbook, if not set, will use current workbook
     */
    unitId?: string;
    /**
     * subUnitId of worksheet, if not set, will use current worksheet
     */
    subUnitId?: string;
    /**
     * data of component, will save to snapshot, json-like data
     */
    data?: Serializable;
    /**
     * the float-dom type
     */
    type?: DrawingTypeEnum;
    /**
     * whether allow event pass through float dom to canvas.
     */
    eventPassThrough?: boolean;
}
declare enum ScrollDirectionResponse {
    ALL = "ALL",
    HORIZONTAL = "HORIZONTAL",
    VERTICAL = "VERTICAL"
}
export interface ICanvasFloatDomInfo {
    position$: BehaviorSubject<IFloatDomLayout>;
    dispose: IDisposable;
    rect: Rect;
    unitId: string;
    subUnitId: string;
    boundsOfViewArea?: IBoundRectNoAngle;
    scrollDirectionResponse?: ScrollDirectionResponse;
    domAnchor?: IDOMAnchor;
    id: string;
}
export interface IDOMAnchor {
    width: number;
    height: number;
    horizonOffsetAlign?: 'left' | 'right';
    verticalOffsetAlign?: 'top' | 'bottom';
    marginX?: number | string;
    marginY?: number | string;
}
export interface ILimitBound extends IBoundRectNoAngle {
    /**
     * Actually, it means fixed.
     * When left is true, dom is fixed to left of dom pos when dom width is shrinking. or dom is fixed to right of dom pos when dom width is shrinking.
     * When top is true, dom is fixed to top of dom pos when dom height is shrinking. or dom is fixed to bottom of dom pos when dom height is shrinking.
     */
    absolute: {
        left: boolean;
        top: boolean;
    };
}
/**
 * Adjust dom bound size when scrolling (dom bound would shrink when scrolling if over the edge of viewMain)
 * @param posOfFloatObject  The position of float object, relative to sheet content, scale & scrolling does not affect it.
 * @param scene
 * @param skeleton
 * @param worksheet
 * @returns ILimitBound
 */
export declare function transformBound2DOMBound(posOfFloatObject: IBoundRectNoAngle, scene: Scene, skeleton: SpreadsheetSkeleton, worksheet: Worksheet, floatDomInfo?: ICanvasFloatDomInfo, skipBoundsOfViewArea?: boolean): ILimitBound;
/**
 * Calculate the position of the floating dom, limited by bounds of viewMain in transformBound2DOMBound
 * @param floatObject
 * @param renderUnit
 * @param skeleton
 * @param worksheet
 * @returns {IFloatDomLayout} position
 */
export declare const calcSheetFloatDomPosition: (floatObject: BaseObject, scene: Scene, skeleton: SpreadsheetSkeleton, worksheet: Worksheet, floatDomInfo?: ICanvasFloatDomInfo) => IFloatDomLayout;
export declare class SheetCanvasFloatDomManagerService extends Disposable {
    private _renderManagerService;
    private _univerInstanceService;
    private _commandService;
    private _drawingManagerService;
    private readonly _canvasFloatDomService;
    private readonly _sheetDrawingService;
    protected readonly _lifecycleService: LifecycleService;
    /**
     * for update dom container position when scrolling and zoom
     */
    private _domLayerInfoMap;
    private _transformChange$;
    transformChange$: import('rxjs').Observable<{
        id: string;
        value: ITransformState;
    }>;
    private _add$;
    add$: import('rxjs').Observable<{
        unitId: string;
        subUnitId: string;
        id: string;
        data?: Record<string, any>;
    }>;
    private _remove$;
    remove$: import('rxjs').Observable<{
        unitId: string;
        subUnitId: string;
        id: string;
    }>;
    constructor(_renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _drawingManagerService: IDrawingManagerService, _canvasFloatDomService: CanvasFloatDomService, _sheetDrawingService: ISheetDrawingService, _lifecycleService: LifecycleService);
    private _bindScrollEvent;
    getFloatDomInfo(id: string): ICanvasFloatDomInfo | undefined;
    getFloatDomsBySubUnitId(unitId: string, subUnitId: string): ICanvasFloatDomInfo[];
    private _getSceneAndTransformerByDrawingSearch;
    private _drawingAddListener;
    private _scrollUpdateListener;
    updateFloatDomProps(unitId: string, subUnitId: string, id: string, props: Record<string, any>): void;
    private _getPosition;
    private _featureUpdateListener;
    private _deleteListener;
    addFloatDomToPosition(layer: ICanvasFloatDom, propId?: string): {
        id: string;
        dispose: () => void;
    } | undefined;
    private _removeDom;
    addFloatDomToRange(range: IRange, config: ICanvasFloatDom, domAnchor: Partial<IDOMAnchor>, propId?: string): {
        id: string;
        dispose: () => void;
    } | undefined;
    addFloatDomToColumnHeader(column: number, config: ICanvasFloatDom, domLayoutParam: IDOMAnchor, propId?: string): {
        id: string;
        dispose: () => void;
    } | undefined;
    /**
     * Unlike _createCellPositionObserver, this accept a range not a single cell.
     *
     * @param initialRow
     * @param initialCol
     * @param currentRender
     * @param skeleton
     * @param activeViewport
     * @returns position of cell to canvas.
     */
    private _createRangePositionObserver;
}
export {};
