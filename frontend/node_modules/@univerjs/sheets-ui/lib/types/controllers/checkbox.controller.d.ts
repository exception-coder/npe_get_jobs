import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { HoverManagerService } from '../services/hover-manager.service';
export declare class SheetCheckboxController extends Disposable {
    private _hoverManagerService;
    private _instanceService;
    private readonly _commandService;
    private readonly _renderManagerService;
    private _isPointer;
    constructor(_hoverManagerService: HoverManagerService, _instanceService: IUniverInstanceService, _commandService: ICommandService, _renderManagerService: IRenderManagerService);
    private get _mainComponent();
    private _initHover;
    private _initPointerEvent;
}
