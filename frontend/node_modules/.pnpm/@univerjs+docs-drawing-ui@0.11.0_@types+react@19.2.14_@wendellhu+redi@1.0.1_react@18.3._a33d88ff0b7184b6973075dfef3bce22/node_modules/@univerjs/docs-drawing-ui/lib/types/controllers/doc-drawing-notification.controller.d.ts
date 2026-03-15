import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IDocDrawingService } from '@univerjs/docs-drawing';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class DocDrawingAddRemoveController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _drawingManagerService;
    private readonly _docDrawingService;
    private readonly _renderManagerService;
    constructor(_univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _drawingManagerService: IDrawingManagerService, _docDrawingService: IDocDrawingService, _renderManagerService: IRenderManagerService);
    private _initialize;
    private _commandExecutedListener;
    private _addDrawings;
    private _removeDrawings;
    private _updateDrawingsOrder;
}
