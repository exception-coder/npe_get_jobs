import { Workbook, Disposable, IConfigService, LocaleService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { INumfmtService } from '@univerjs/sheets';
import { CellAlertManagerService, HoverManagerService } from '@univerjs/sheets-ui';
import { IZenZoneService } from '@univerjs/ui';
export declare class NumfmtAlertRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _hoverManagerService;
    private readonly _cellAlertManagerService;
    private readonly _localeService;
    private readonly _zenZoneService;
    private _numfmtService;
    private readonly _configService;
    constructor(_context: IRenderContext<Workbook>, _hoverManagerService: HoverManagerService, _cellAlertManagerService: CellAlertManagerService, _localeService: LocaleService, _zenZoneService: IZenZoneService, _numfmtService: INumfmtService, _configService: IConfigService);
    private _init;
    private _initCellAlertPopup;
    private _initZenService;
    private _hideAlert;
}
