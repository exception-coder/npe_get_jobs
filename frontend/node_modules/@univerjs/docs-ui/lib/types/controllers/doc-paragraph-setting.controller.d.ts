import { Disposable, ICommandService } from '@univerjs/core';
import { ComponentManager, ISidebarService } from '@univerjs/ui';
export declare class DocParagraphSettingController extends Disposable {
    private readonly _commandService;
    private readonly _componentManager;
    private _sidebarService;
    private _id;
    constructor(_commandService: ICommandService, _componentManager: ComponentManager, _sidebarService: ISidebarService);
    private _init;
    openPanel(): void;
    closePanel(): void;
}
