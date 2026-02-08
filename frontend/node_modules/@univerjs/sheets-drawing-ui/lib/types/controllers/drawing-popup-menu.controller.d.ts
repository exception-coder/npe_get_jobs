import { ImageIoService, IDrawingManagerService } from '@univerjs/drawing';
import { ICommandService, IContextService, Injector, IUniverInstanceService, LocaleService, RxDisposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetCanvasPopManagerService } from '@univerjs/sheets-ui';
import { IMessageService } from '@univerjs/ui';
export declare class DrawingPopupMenuController extends RxDisposable {
    private _injector;
    private readonly _localeService;
    private readonly _drawingManagerService;
    private readonly _canvasPopManagerService;
    private readonly _renderManagerService;
    private readonly _univerInstanceService;
    private readonly _messageService;
    private readonly _contextService;
    private readonly _ioService;
    private readonly _commandService;
    private _initImagePopupMenu;
    constructor(_injector: Injector, _localeService: LocaleService, _drawingManagerService: IDrawingManagerService, _canvasPopManagerService: SheetCanvasPopManagerService, _renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService, _messageService: IMessageService, _contextService: IContextService, _ioService: ImageIoService, _commandService: ICommandService);
    private _init;
    private _setupLoadingStatus;
    private _dispose;
    private _create;
    private _hasCropObject;
    private _popupMenuListener;
    private _getImageMenuItems;
}
