import { Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { ConditionalFormattingRuleModel, ConditionalFormattingViewModel } from '@univerjs/sheets-conditional-formatting';
import { IAutoFillService } from '@univerjs/sheets-ui';
export declare class ConditionalFormattingAutoFillController extends Disposable {
    private _injector;
    private _univerInstanceService;
    private _autoFillService;
    private _conditionalFormattingRuleModel;
    private _conditionalFormattingViewModel;
    constructor(_injector: Injector, _univerInstanceService: IUniverInstanceService, _autoFillService: IAutoFillService, _conditionalFormattingRuleModel: ConditionalFormattingRuleModel, _conditionalFormattingViewModel: ConditionalFormattingViewModel);
    private _initAutoFill;
}
