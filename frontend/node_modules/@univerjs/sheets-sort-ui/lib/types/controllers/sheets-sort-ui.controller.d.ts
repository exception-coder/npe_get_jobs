import { UIPartsService, ComponentManager, IDialogService, ILayoutService, IMenuManagerService } from '@univerjs/ui';
import { ICommandService, Injector, LocaleService, RxDisposable } from '@univerjs/core';
import { SheetsRenderService } from '@univerjs/sheets-ui';
import { SheetsSortUIService } from '../services/sheets-sort-ui.service';
export declare class SheetsSortUIController extends RxDisposable {
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _dialogService;
    private readonly _layoutService;
    private readonly _uiPartsService;
    private _sheetRenderService;
    private readonly _localeService;
    private readonly _sheetsSortUIService;
    private _injector;
    private readonly _componentManager;
    constructor(_commandService: ICommandService, _menuManagerService: IMenuManagerService, _dialogService: IDialogService, _layoutService: ILayoutService, _uiPartsService: UIPartsService, _sheetRenderService: SheetsRenderService, _localeService: LocaleService, _sheetsSortUIService: SheetsSortUIService, _injector: Injector, _componentManager: ComponentManager);
    private _initMenu;
    private _initCommands;
    private _initUI;
    private _openCustomSortPanel;
    private _closePanel;
}
