import { Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { ConditionalFormattingRuleModel, ConditionalFormattingViewModel } from '@univerjs/sheets-conditional-formatting';
import { IFormatPainterService } from '@univerjs/sheets-ui';
export declare class ConditionalFormattingPainterController extends Disposable {
    private _injector;
    private _univerInstanceService;
    private _formatPainterService;
    private _sheetsSelectionsService;
    private _conditionalFormattingRuleModel;
    private _conditionalFormattingViewModel;
    private _painterConfig;
    constructor(_injector: Injector, _univerInstanceService: IUniverInstanceService, _formatPainterService: IFormatPainterService, _sheetsSelectionsService: SheetsSelectionsService, _conditionalFormattingRuleModel: ConditionalFormattingRuleModel, _conditionalFormattingViewModel: ConditionalFormattingViewModel);
    private _initFormattingPainter;
}
