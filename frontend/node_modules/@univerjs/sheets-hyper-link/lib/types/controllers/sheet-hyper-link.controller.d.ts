import { Disposable, ICommandService } from '@univerjs/core';
export declare class SheetsHyperLinkController extends Disposable {
    private readonly _commandService;
    constructor(_commandService: ICommandService);
    private _registerCommands;
}
