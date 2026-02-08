import { Disposable, ICommandService } from '@univerjs/core';
import { ComponentManager } from '@univerjs/ui';
export declare class DrawingUIController extends Disposable {
    private readonly _componentManager;
    private readonly _commandService;
    constructor(_componentManager: ComponentManager, _commandService: ICommandService);
    private _initCustomComponents;
    private _initCommands;
    private _init;
}
