import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IDrawingManagerService, IImageIoService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IDialogService } from '@univerjs/ui';
import { DrawingRenderService } from '../services/drawing-render.service';
export declare class ImageUpdateController extends Disposable {
    private readonly _commandService;
    private readonly _renderManagerService;
    private readonly _drawingManagerService;
    private readonly _dialogService;
    private readonly _imageIoService;
    private readonly _currentUniverService;
    private readonly _drawingRenderService;
    constructor(_commandService: ICommandService, _renderManagerService: IRenderManagerService, _drawingManagerService: IDrawingManagerService, _dialogService: IDialogService, _imageIoService: IImageIoService, _currentUniverService: IUniverInstanceService, _drawingRenderService: DrawingRenderService);
    dispose(): void;
    private _initialize;
    private _commandExecutedListener;
    private _getSceneAndTransformerByDrawingSearch;
    private _resetImageSize;
    private _drawingAddListener;
    private _insertImages;
    private _imageUpdateListener;
    private _addHoverForImage;
    private _addDialogForImage;
}
