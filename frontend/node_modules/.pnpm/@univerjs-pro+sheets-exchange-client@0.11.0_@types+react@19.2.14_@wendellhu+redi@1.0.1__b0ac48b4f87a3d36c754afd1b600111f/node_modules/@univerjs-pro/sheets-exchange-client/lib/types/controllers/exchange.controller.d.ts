import { Disposable, ICommandService } from '@univerjs/core';
import { IMenuManagerService } from '@univerjs/ui';
export declare class SheetsExchangeClientController extends Disposable {
    private readonly _commandService;
    protected readonly _menuManagerService: IMenuManagerService;
    constructor(_commandService: ICommandService, _menuManagerService: IMenuManagerService);
    private _initCommands;
    private _initMenus;
}
