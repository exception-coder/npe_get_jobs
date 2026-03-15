import { Workbook, Disposable, LocaleService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { FormulaDataModel } from '@univerjs/engine-formula';
import { CellAlertManagerService, HoverManagerService } from '@univerjs/sheets-ui';
import { IZenZoneService } from '@univerjs/ui';
export declare class FormulaAlertRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _hoverManagerService;
    private readonly _cellAlertManagerService;
    private readonly _localeService;
    private readonly _formulaDataModel;
    private readonly _zenZoneService;
    constructor(_context: IRenderContext<Workbook>, _hoverManagerService: HoverManagerService, _cellAlertManagerService: CellAlertManagerService, _localeService: LocaleService, _formulaDataModel: FormulaDataModel, _zenZoneService: IZenZoneService);
    private _init;
    private _initCellAlertPopup;
    private _initZenService;
    private _hideAlert;
}
