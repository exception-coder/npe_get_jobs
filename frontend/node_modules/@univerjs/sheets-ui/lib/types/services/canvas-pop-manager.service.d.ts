import { DrawingTypeEnum, ICommandInfo, INeedCheckDisposable, IRange, Nullable, Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { BaseObject, IBoundRectNoAngle, Viewport, IRenderManagerService } from '@univerjs/engine-render';
import { ISheetLocationBase, RefRangeService, SheetsSelectionsService } from '@univerjs/sheets';
import { IPopup, ICanvasPopupService } from '@univerjs/ui';
import { ISheetSelectionRenderService } from './selection/base-selection-render.service';
export interface ICanvasPopup extends Omit<IPopup, 'anchorRect' | 'anchorRect$' | 'unitId' | 'subUnitId' | 'canvasElement'> {
    mask?: boolean;
    extraProps?: Record<string, unknown>;
    showOnSelectionMoving?: boolean;
}
interface IPopupMenuItem {
    label: string;
    index: number;
    commandId: string;
    commandParams: ICommandInfo['params'];
    disable: boolean;
}
type getPopupMenuItemCallback = (unitId: string, subUnitId: string, drawingId: string, drawingType: DrawingTypeEnum) => IPopupMenuItem[];
export declare class SheetCanvasPopManagerService extends Disposable {
    private readonly _globalPopupManagerService;
    private readonly _renderManagerService;
    private readonly _univerInstanceService;
    private readonly _refRangeService;
    private readonly _commandService;
    private readonly _refSelectionsService;
    private readonly _selectionManagerService;
    private _popupMenuFeatureMap;
    constructor(_globalPopupManagerService: ICanvasPopupService, _renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService, _refRangeService: RefRangeService, _commandService: ICommandService, _refSelectionsService: ISheetSelectionRenderService, _selectionManagerService: SheetsSelectionsService);
    private _isSelectionMoving;
    private _initMoving;
    /**
     * Register a feature menu callback for a specific drawing type.such as image, chart, etc.
     */
    registerFeatureMenu(type: DrawingTypeEnum, getPopupMenuCallBack: getPopupMenuItemCallback): void;
    /**
     * Get the feature menu by drawing type, the function should be called when a drawing element need trigger popup menu, so the unitId, subUnitId, drawingId should be provided.
     * @param {string} unitId the unit id
     * @param {string} subUnitId the sub unit id
     * @param {string} drawingId the drawing id
     * @param {DrawingTypeEnum} drawingType the feature type
     * @returns the feature menu if it exists, otherwise return undefined
     */
    getFeatureMenu(unitId: string, subUnitId: string, drawingId: string, drawingType: DrawingTypeEnum): Nullable<IPopupMenuItem[]>;
    dispose(): void;
    private _createHiddenRectObserver;
    private _createPositionObserver;
    /**
     * attach a popup to canvas object
     * @param targetObject target canvas object
     * @param popup popup item
     * @returns disposable
     */
    attachPopupToObject(targetObject: BaseObject, popup: ICanvasPopup): INeedCheckDisposable;
    attachPopupByPosition(bound: IBoundRectNoAngle, popup: ICanvasPopup, location: ISheetLocationBase): Nullable<INeedCheckDisposable>;
    attachPopupToAbsolutePosition(bound: IBoundRectNoAngle, popup: ICanvasPopup, _unitId?: string, _subUnitId?: string): {
        dispose: () => void;
        canDispose: () => boolean;
    } | null | undefined;
    /**
     * Bind popup to the right part of cell at(row, col).
     * This popup would move with the cell.
     * @param row
     * @param col
     * @param popup
     * @param _unitId
     * @param _subUnitId
     * @param viewport
     * @returns
     */
    attachPopupToCell(row: number, col: number, popup: ICanvasPopup, _unitId?: string, _subUnitId?: string, viewport?: Viewport): Nullable<INeedCheckDisposable>;
    /**
     * attach Comp to floatDOM
     * @param range
     * @param popup
     * @param _unitId
     * @param _subUnitId
     * @param viewport
     * @param showOnSelectionMoving
     */
    attachRangePopup(range: IRange, popup: ICanvasPopup, _unitId?: string, _subUnitId?: string, viewport?: Viewport, showOnSelectionMoving?: boolean): Nullable<INeedCheckDisposable>;
    /**
     *
     * @param initialRow
     * @param initialCol
     * @param currentRender
     * @param skeleton
     * @param activeViewport
     */
    private _createCellPositionObserver;
    private _calcCellPositionByCell;
    /**
     * Unlike _createCellPositionObserver, this accept a range not a single cell.
     * @param initialRow
     * @param initialCol
     * @param currentRender
     * @param skeleton
     * @param activeViewport
     */
    private _createRangePositionObserver;
}
export {};
