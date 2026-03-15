import { IConditionFormattingRule } from '@univerjs/sheets-conditional-formatting';
import { Disposable, Injector, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { ComponentManager, ISidebarService } from '@univerjs/ui';
export declare class ConditionalFormattingPanelController extends Disposable {
    private readonly _univerInstanceService;
    private _injector;
    private _componentManager;
    private _sidebarService;
    private _localeService;
    private _sidebarDisposable;
    constructor(_univerInstanceService: IUniverInstanceService, _injector: Injector, _componentManager: ComponentManager, _sidebarService: ISidebarService, _localeService: LocaleService);
    openPanel(rule?: IConditionFormattingRule): void;
    private _initPanel;
}
