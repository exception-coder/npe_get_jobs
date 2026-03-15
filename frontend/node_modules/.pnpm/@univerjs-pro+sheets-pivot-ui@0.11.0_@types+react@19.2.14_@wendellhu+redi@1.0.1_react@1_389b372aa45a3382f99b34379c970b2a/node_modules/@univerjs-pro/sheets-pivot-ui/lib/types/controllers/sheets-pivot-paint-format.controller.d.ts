import { SheetsPivotTableAdaptorModel } from '@univerjs-pro/sheets-pivot';
import { Disposable, LocaleService } from '@univerjs/core';
import { IFormatPainterService } from '@univerjs/sheets-ui';
import { IMessageService } from '@univerjs/ui';
export declare class SheetsPivotTableFormatPaintController extends Disposable {
    private readonly _sheetsPivotTableAdaptorModel;
    private _formatPainterService;
    private readonly _messageService;
    private readonly _localeService;
    constructor(_sheetsPivotTableAdaptorModel: SheetsPivotTableAdaptorModel, _formatPainterService: IFormatPainterService, _messageService: IMessageService, _localeService: LocaleService);
    private _initFormatPainterListener;
}
