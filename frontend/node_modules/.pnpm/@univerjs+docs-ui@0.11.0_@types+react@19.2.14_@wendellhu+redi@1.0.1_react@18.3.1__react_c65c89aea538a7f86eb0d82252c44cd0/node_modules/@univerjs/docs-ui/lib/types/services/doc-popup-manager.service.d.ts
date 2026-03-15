import { INeedCheckDisposable, ITextRangeParam, Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { BaseObject, IBoundRectNoAngle, IRender, Scene, IRenderManagerService } from '@univerjs/engine-render';
import { IPopup, ICanvasPopupService } from '@univerjs/ui';
export declare function transformBound2OffsetBound(originBound: IBoundRectNoAngle, scene: Scene): IBoundRectNoAngle;
export declare function transformPosition2Offset(x: number, y: number, scene: Scene): {
    x: number;
    y: number;
};
export declare function transformOffset2Bound(offsetX: number, offsetY: number, scene: Scene): {
    x: number;
    y: number;
};
export interface IDocCanvasPopup extends Omit<IPopup, 'anchorRect$' | 'children' | 'unitId' | 'subUnitId' | 'canvasElement'> {
    mask?: boolean;
    extraProps?: Record<string, any>;
    multipleDirection?: IPopup['direction'];
}
export declare const calcDocRangePositions: (range: ITextRangeParam, currentRender: IRender) => IBoundRectNoAngle[] | undefined;
export declare class DocCanvasPopManagerService extends Disposable {
    private readonly _globalPopupManagerService;
    private readonly _renderManagerService;
    private readonly _univerInstanceService;
    private readonly _commandService;
    constructor(_globalPopupManagerService: ICanvasPopupService, _renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService);
    private _createRectPositionObserver;
    private _createObjectPositionObserver;
    private _createRangePositionObserver;
    attachPopupToRect(rect: IBoundRectNoAngle, popup: IDocCanvasPopup, unitId: string): INeedCheckDisposable;
    /**
     * attach a popup to canvas object
     * @param targetObject target canvas object
     * @param popup popup item
     * @returns disposable
     */
    attachPopupToObject(targetObject: BaseObject, popup: IDocCanvasPopup, unitId: string): INeedCheckDisposable;
    /**
     * attach a popup to doc range
     * @param range doc range
     * @param popup popup item
     * @param unitId unit id
     * @returns disposable
     */
    attachPopupToRange(range: ITextRangeParam, popup: IDocCanvasPopup, unitId: string): INeedCheckDisposable;
}
