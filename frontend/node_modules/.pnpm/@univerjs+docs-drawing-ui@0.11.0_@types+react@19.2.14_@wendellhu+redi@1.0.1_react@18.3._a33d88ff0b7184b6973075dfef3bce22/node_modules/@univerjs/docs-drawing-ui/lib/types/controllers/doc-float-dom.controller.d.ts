import { IDocFloatDomDataBase, IDrawingManagerService } from '@univerjs/drawing';
import { IBoundRectNoAngle, Scene, IRenderManagerService } from '@univerjs/engine-render';
import { IFloatDomLayout, CanvasFloatDomService } from '@univerjs/ui';
import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { DrawingRenderService } from '@univerjs/drawing-ui';
export declare function calcDocFloatDomPositionByRect(rect: IBoundRectNoAngle, scene: Scene, opacity?: number, angle?: number): IFloatDomLayout;
interface IDocFloatDomParams extends IDocFloatDomDataBase {
}
export declare class DocFloatDomController extends Disposable {
    private readonly _renderManagerService;
    private readonly _drawingManagerService;
    private readonly _drawingRenderService;
    private readonly _canvasFloatDomService;
    private readonly _univerInstanceService;
    private readonly _commandService;
    private _domLayerInfoMap;
    constructor(_renderManagerService: IRenderManagerService, _drawingManagerService: IDrawingManagerService, _drawingRenderService: DrawingRenderService, _canvasFloatDomService: CanvasFloatDomService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService);
    dispose(): void;
    private _initialize;
    private _getSceneAndTransformerByDrawingSearch;
    private _drawingAddRemoveListener;
    private _insertRects;
    private _addHoverForRect;
    private _removeDom;
    private _initScrollAndZoomEvent;
    insertFloatDom(floatDom: IDocFloatDomParams, opts: {
        width?: number;
        height: number;
        drawingId?: string;
    }): string | false;
}
export {};
