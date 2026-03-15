import { ICommandService, IUniverInstanceService, LocaleService, RxDisposable } from '@univerjs/core';
import { ComponentManager, IDialogService, ILayoutService, IMenuManagerService, IShortcutService } from '@univerjs/ui';
import { IFindReplaceService } from '../services/find-replace.service';
export declare class FindReplaceController extends RxDisposable {
    private readonly _univerInstanceService;
    private readonly _menuManagerService;
    private readonly _shortcutService;
    private readonly _commandService;
    private readonly _findReplaceService;
    private readonly _dialogService;
    private readonly _layoutService;
    private readonly _localeService;
    private readonly _componentManager;
    constructor(_univerInstanceService: IUniverInstanceService, _menuManagerService: IMenuManagerService, _shortcutService: IShortcutService, _commandService: ICommandService, _findReplaceService: IFindReplaceService, _dialogService: IDialogService, _layoutService: ILayoutService, _localeService: LocaleService, _componentManager: ComponentManager);
    dispose(): void;
    private _initCommands;
    private _initShortcuts;
    private _initUI;
    private _openPanel;
    private _closingListenerDisposable;
    closePanel(): void;
}
