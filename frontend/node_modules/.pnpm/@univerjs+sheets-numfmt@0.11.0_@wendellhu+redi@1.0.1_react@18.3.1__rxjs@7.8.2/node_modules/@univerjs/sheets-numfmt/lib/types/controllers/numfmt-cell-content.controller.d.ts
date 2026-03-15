import { INumfmtLocaleTag, Disposable, ICommandService, IConfigService, IUniverInstanceService, LocaleService, ThemeService } from '@univerjs/core';
import { INumfmtService, SheetInterceptorService } from '@univerjs/sheets';
export declare class SheetsNumfmtCellContentController extends Disposable {
    private readonly _instanceService;
    private _sheetInterceptorService;
    private _themeService;
    private _commandService;
    private _numfmtService;
    private _localeService;
    private readonly _configService;
    private _locale$;
    locale$: import('rxjs').Observable<INumfmtLocaleTag>;
    constructor(_instanceService: IUniverInstanceService, _sheetInterceptorService: SheetInterceptorService, _themeService: ThemeService, _commandService: ICommandService, _numfmtService: INumfmtService, _localeService: LocaleService, _configService: IConfigService);
    get locale(): INumfmtLocaleTag;
    private _initInterceptorCellContent;
    setNumfmtLocal(locale: INumfmtLocaleTag): void;
}
