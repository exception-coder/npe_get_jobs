import { MenuConfig } from '@univerjs/ui';
import { Disposable, ICommandService, Injector, LocaleService } from '@univerjs/core';
import { SheetPermissionCheckController, SheetsSelectionsService } from '@univerjs/sheets';
import { SheetsFilterService } from '@univerjs/sheets-filter';
export interface IUniverSheetsFilterUIConfig {
    menu: MenuConfig;
}
export declare const DefaultSheetFilterUiConfig: {};
export declare const FILTER_PANEL_POPUP_KEY = "FILTER_PANEL_POPUP";
/**
 * This controller controls the UI of "filter" features. Menus, commands and filter panel etc. Except for the rendering.
 */
export declare class SheetsFilterPermissionController extends Disposable {
    private _sheetsFilterService;
    private _localeService;
    private readonly _commandService;
    private readonly _sheetPermissionCheckPermission;
    private _injector;
    private _sheetsSelectionService;
    constructor(_sheetsFilterService: SheetsFilterService, _localeService: LocaleService, _commandService: ICommandService, _sheetPermissionCheckPermission: SheetPermissionCheckController, _injector: Injector, _sheetsSelectionService: SheetsSelectionsService);
    private _commandExecutedListener;
}
