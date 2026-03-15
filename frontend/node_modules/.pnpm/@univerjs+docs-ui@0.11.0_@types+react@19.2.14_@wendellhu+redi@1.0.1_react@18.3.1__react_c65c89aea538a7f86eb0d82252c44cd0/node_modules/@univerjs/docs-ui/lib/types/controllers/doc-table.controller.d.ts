import { Disposable, ICommandService } from '@univerjs/core';
import { ComponentManager } from '@univerjs/ui';
export declare class DocTableController extends Disposable {
    private readonly _commandService;
    private readonly _componentManager;
    constructor(_commandService: ICommandService, _componentManager: ComponentManager);
    private _initialize;
    private _registerCommands;
    private _initCustomComponents;
    private _init;
}
