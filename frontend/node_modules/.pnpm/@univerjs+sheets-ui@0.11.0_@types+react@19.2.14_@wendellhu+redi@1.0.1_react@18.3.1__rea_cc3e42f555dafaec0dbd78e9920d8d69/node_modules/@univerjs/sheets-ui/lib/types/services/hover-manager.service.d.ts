import { ICustomRange, IParagraph, IPosition, Nullable, Disposable, IUniverInstanceService } from '@univerjs/core';
import { IBoundRectNoAngle, IDocumentSkeletonDrawing, IMouseEvent, IPointerEvent, IRenderManagerService } from '@univerjs/engine-render';
import { ISheetLocation, ISheetLocationBase } from '@univerjs/sheets';
export interface IHoverCellPosition {
    position: IPosition;
    /**
     * location of cell
     */
    location: ISheetLocationBase;
}
export interface ICellWithEvent extends IHoverCellPosition {
    event: IMouseEvent | IPointerEvent;
}
export interface ICellPosWithEvent extends ISheetLocationBase {
    event: IMouseEvent | IPointerEvent;
}
export interface IHoverRichTextInfo extends IHoverCellPosition {
    /**
     * active custom range in cell, if cell is rich-text
     */
    customRange?: Nullable<ICustomRange>;
    /**
     * active bullet in cell, if cell is rich-text
     */
    bullet?: Nullable<IParagraph>;
    /**
     * rect of custom-range or bullet
     */
    rect?: Nullable<IBoundRectNoAngle>;
    drawing?: Nullable<{
        drawingId: string;
        rect: IBoundRectNoAngle;
        drawing: IDocumentSkeletonDrawing;
    }>;
}
export interface IHoverRichTextPosition extends ISheetLocationBase {
    /**
     * active custom range in cell, if cell is rich-text
     */
    customRange?: Nullable<ICustomRange>;
    /**
     * active bullet in cell, if cell is rich-text
     */
    bullet?: Nullable<IParagraph>;
    /**
     * rect of custom-range or bullet
     */
    rect?: Nullable<IBoundRectNoAngle>;
    drawing?: Nullable<{
        drawingId: string;
        rect: IBoundRectNoAngle;
        drawing: IDocumentSkeletonDrawing;
    }>;
    event?: IMouseEvent | IPointerEvent;
}
export interface IHoverHeaderPosition {
    unitId: string;
    subUnitId: string;
    index: number;
}
export declare function getLocationBase(location: ISheetLocation): {
    unitId: string;
    subUnitId: string;
    row: number;
    col: number;
};
export declare class HoverManagerService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private _currentCell$;
    private _currentRichText$;
    private _currentClickedCell$;
    private _currentDbClickedCell$;
    private _currentCellWithEvent$;
    private _currentPointerDownCell$;
    private _currentPointerUpCell$;
    private _currentHoveredRowHeader$;
    private _currentHoveredColHeader$;
    private _currentRowHeaderClick$;
    private _currentColHeaderClick$;
    private _currentRowHeaderDbClick$;
    private _currentColHeaderDbClick$;
    private _currentRowHeaderPointerDown$;
    private _currentColHeaderPointerDown$;
    private _currentRowHeaderPointerUp$;
    private _currentColHeaderPointerUp$;
    currentCell$: import('rxjs').Observable<Nullable<IHoverCellPosition>>;
    currentRichTextNoDistinct$: import('rxjs').Observable<void | IHoverRichTextPosition | null | undefined>;
    currentRichText$: import('rxjs').Observable<void | IHoverRichTextPosition | null | undefined>;
    /**
     * Nearly same as currentRichText$, but with event
     */
    currentCellPosWithEvent$: import('rxjs').Observable<void | ICellPosWithEvent | null | undefined>;
    currentPosition$: import('rxjs').Observable<Nullable<IHoverCellPosition>>;
    currentClickedCell$: import('rxjs').Observable<IHoverRichTextInfo>;
    currentDbClickedCell$: import('rxjs').Observable<IHoverRichTextInfo>;
    currentPointerDownCell$: import('rxjs').Observable<ICellPosWithEvent>;
    currentPointerUpCell$: import('rxjs').Observable<ICellPosWithEvent>;
    currentHoveredRowHeader$: import('rxjs').Observable<Nullable<IHoverHeaderPosition>>;
    currentHoveredColHeader$: import('rxjs').Observable<Nullable<IHoverHeaderPosition>>;
    currentRowHeaderClick$: import('rxjs').Observable<IHoverHeaderPosition>;
    currentColHeaderClick$: import('rxjs').Observable<IHoverHeaderPosition>;
    currentRowHeaderDbClick$: import('rxjs').Observable<IHoverHeaderPosition>;
    currentColHeaderDbClick$: import('rxjs').Observable<IHoverHeaderPosition>;
    currentRowHeaderPointerDown$: import('rxjs').Observable<IHoverHeaderPosition>;
    currentColHeaderPointerDown$: import('rxjs').Observable<IHoverHeaderPosition>;
    currentRowHeaderPointerUp$: import('rxjs').Observable<IHoverHeaderPosition>;
    currentColHeaderPointerUp$: import('rxjs').Observable<IHoverHeaderPosition>;
    constructor(_univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService);
    dispose(): void;
    private _initCellDisposableListener;
    private _getCalcDeps;
    private _calcActiveCell;
    private _calcActiveRowHeader;
    private _calcActiveColHeader;
    triggerPointerDown(unitId: string, event: IPointerEvent | IMouseEvent): void;
    triggerPointerUp(unitId: string, event: IPointerEvent | IMouseEvent): void;
    triggerMouseMove(unitId: string, event: IPointerEvent | IMouseEvent): void;
    /**
     * Trigger by pointerup.
     * @param unitId
     * @param offsetX
     * @param offsetY
     */
    triggerClick(unitId: string, offsetX: number, offsetY: number): void;
    triggerDbClick(unitId: string, offsetX: number, offsetY: number): void;
    triggerScroll(): void;
    triggerRowHeaderClick(unitId: string, offsetX: number, offsetY: number): void;
    triggerColHeaderClick(unitId: string, offsetX: number, offsetY: number): void;
    triggerRowHeaderDbClick(unitId: string, offsetX: number, offsetY: number): void;
    triggerColHeaderDbClick(unitId: string, offsetX: number, offsetY: number): void;
    triggerRowHeaderMouseMove(unitId: string, offsetX: number, offsetY: number): void;
    triggerColHeaderMouseMove(unitId: string, offsetX: number, offsetY: number): void;
    triggerRowHeaderPoniterDown(unitId: string, offsetX: number, offsetY: number): void;
    triggerColHeaderPoniterDown(unitId: string, offsetX: number, offsetY: number): void;
    triggerRowHeaderPoniterUp(unitId: string, offsetX: number, offsetY: number): void;
    triggerColHeaderPoniterUp(unitId: string, offsetX: number, offsetY: number): void;
}
