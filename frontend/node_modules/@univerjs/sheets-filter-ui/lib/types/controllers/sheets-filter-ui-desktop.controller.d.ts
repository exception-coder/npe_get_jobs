import { ICommandService, IContextService, Injector, LocaleService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetsFilterService } from '@univerjs/sheets-filter';
import { SheetCanvasPopManagerService, SheetsRenderService } from '@univerjs/sheets-ui';
import { ComponentManager, IMenuManagerService, IMessageService, IShortcutService } from '@univerjs/ui';
import { SheetsFilterPanelService } from '../services/sheets-filter-panel.service';
import { SheetsFilterUIMobileController } from './sheets-filter-ui-mobile.controller';
export declare const FILTER_PANEL_POPUP_KEY = "FILTER_PANEL_POPUP";
/**
 * This controller controls the UI of "filter" features. Menus, commands and filter panel etc. Except for the rendering.
 */
export declare class SheetsFilterUIDesktopController extends SheetsFilterUIMobileController {
    private readonly _injector;
    private readonly _componentManager;
    private readonly _sheetsFilterPanelService;
    private _sheetCanvasPopupService;
    private _sheetsFilterService;
    private _localeService;
    private readonly _shortcutService;
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _contextService;
    private readonly _messageService;
    constructor(_injector: Injector, _componentManager: ComponentManager, _sheetsFilterPanelService: SheetsFilterPanelService, _sheetCanvasPopupService: SheetCanvasPopManagerService, _sheetsFilterService: SheetsFilterService, _localeService: LocaleService, _shortcutService: IShortcutService, _commandService: ICommandService, _menuManagerService: IMenuManagerService, _contextService: IContextService, _messageService: IMessageService, sheetsRenderService: SheetsRenderService, renderManagerService: IRenderManagerService);
    dispose(): void;
    private _initShortcuts;
    private _initCommands;
    private _initMenuItems;
    private _initUI;
    private _popupDisposable?;
    private _openFilterPopup;
    private _closeFilterPopup;
}
