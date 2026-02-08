import { Disposable, ICommandService, IUniverInstanceService, LocaleService, ThemeService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { INumfmtService, SheetInterceptorService, SheetsSelectionsService } from '@univerjs/sheets';
import { SheetsNumfmtCellContentController } from '@univerjs/sheets-numfmt';
import { ComponentManager, ISidebarService } from '@univerjs/ui';
export declare class SheetNumfmtUIController extends Disposable {
    private _sheetInterceptorService;
    private _themeService;
    private _univerInstanceService;
    private _commandService;
    private _selectionManagerService;
    private _renderManagerService;
    private _numfmtService;
    private _componentManager;
    private _sidebarService;
    private _localeService;
    private _sheetsNumfmtCellContentController;
    /**
     * If _previewPattern is null ,the realTimeRenderingInterceptor will skip and if it is '',realTimeRenderingInterceptor will clear numfmt.
     * @private
     * @type {(string | null)}
     * @memberof NumfmtController
     */
    private _previewPattern;
    constructor(_sheetInterceptorService: SheetInterceptorService, _themeService: ThemeService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _selectionManagerService: SheetsSelectionsService, _renderManagerService: IRenderManagerService, _numfmtService: INumfmtService, _componentManager: ComponentManager, _sidebarService: ISidebarService, _localeService: LocaleService, _sheetsNumfmtCellContentController: SheetsNumfmtCellContentController);
    private _initNumfmtLocalChange;
    openPanel(): boolean;
    private _forceUpdate;
    private _initCommands;
    private _initPanel;
    private _initRealTimeRenderingInterceptor;
    private _commandExecutedListener;
    private _sidebarDisposable;
    private _initCloseListener;
}
