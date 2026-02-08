import { Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { ConditionalFormattingRuleModel, ConditionalFormattingViewModel } from '@univerjs/sheets-conditional-formatting';
import { ISheetClipboardService } from '@univerjs/sheets-ui';
export declare class ConditionalFormattingCopyPasteController extends Disposable {
    private _sheetClipboardService;
    private _conditionalFormattingRuleModel;
    private _injector;
    private _conditionalFormattingViewModel;
    private _univerInstanceService;
    private _copyInfo;
    constructor(_sheetClipboardService: ISheetClipboardService, _conditionalFormattingRuleModel: ConditionalFormattingRuleModel, _injector: Injector, _conditionalFormattingViewModel: ConditionalFormattingViewModel, _univerInstanceService: IUniverInstanceService);
    private _initClipboardHook;
    private _collectConditionalRule;
    private _generateConditionalFormattingMutations;
}
