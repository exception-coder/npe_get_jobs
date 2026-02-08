import { IContextService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { DocCanvasPopManagerService } from '@univerjs/docs-ui';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class DocDrawingPopupMenuController extends RxDisposable {
    private readonly _drawingManagerService;
    private readonly _canvasPopManagerService;
    private readonly _renderManagerService;
    private readonly _univerInstanceService;
    private readonly _contextService;
    private _initImagePopupMenu;
    private _disposePopups;
    constructor(_drawingManagerService: IDrawingManagerService, _canvasPopManagerService: DocCanvasPopManagerService, _renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService, _contextService: IContextService);
    private _init;
    private _dispose;
    private _create;
    private _hasCropObject;
    private _popupMenuListener;
    private _getImageMenuItems;
}
