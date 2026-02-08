import { Disposable, ICommandService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IMessageService } from '@univerjs/ui';
export declare class ImageCropperController extends Disposable {
    private readonly _commandService;
    private readonly _drawingManagerService;
    private readonly _renderManagerService;
    private _univerInstanceService;
    private readonly _messageService;
    private readonly _localeService;
    private _sceneListenerOnImageMap;
    constructor(_commandService: ICommandService, _drawingManagerService: IDrawingManagerService, _renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService, _messageService: IMessageService, _localeService: LocaleService);
    private _init;
    private _initAutoCrop;
    private _calculateSrcRectByRatio;
    private _updateCropperObject;
    private _initOpenCrop;
    private _searchCropObject;
    private _initCloseCrop;
    private _getApplyObjectByCropObject;
    private _addListenerOnImage;
    private _addHoverForImageCopper;
    private _endCropListener;
    private _getSrcRectByTransformState;
}
