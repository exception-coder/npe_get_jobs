import { Workbook, Disposable, IConfigService, LocaleService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IZenZoneService } from '@univerjs/ui';
import { CellAlertManagerService } from '../services/cell-alert-manager.service';
import { HoverManagerService } from '../services/hover-manager.service';
export declare class ForceStringAlertRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _hoverManagerService;
    private readonly _cellAlertManagerService;
    private readonly _localeService;
    private readonly _zenZoneService;
    private readonly _configService;
    constructor(_context: IRenderContext<Workbook>, _hoverManagerService: HoverManagerService, _cellAlertManagerService: CellAlertManagerService, _localeService: LocaleService, _zenZoneService: IZenZoneService, _configService: IConfigService);
    private _init;
    private _initCellAlertPopup;
    private _initZenService;
    private _hideAlert;
}
