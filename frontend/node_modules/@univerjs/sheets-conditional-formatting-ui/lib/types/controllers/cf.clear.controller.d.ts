import { IMutationInfo, IRange, Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { IConditionalFormattingRuleConfig, IConditionFormattingRule, ConditionalFormattingRuleModel } from '@univerjs/sheets-conditional-formatting';
import { SheetInterceptorService, SheetsSelectionsService } from '@univerjs/sheets';
export declare class ConditionalFormattingClearController extends Disposable {
    private _injector;
    private _univerInstanceService;
    private _sheetInterceptorService;
    private _selectionManagerService;
    private _conditionalFormattingRuleModel;
    constructor(_injector: Injector, _univerInstanceService: IUniverInstanceService, _sheetInterceptorService: SheetInterceptorService, _selectionManagerService: SheetsSelectionsService, _conditionalFormattingRuleModel: ConditionalFormattingRuleModel);
    private _init;
}
export declare function generateClearCfMutations(injector: Injector, allRules: IConditionFormattingRule<IConditionalFormattingRuleConfig>[], ranges: IRange[], unitId: string, subUnitId: string): {
    redos: IMutationInfo<object>[];
    undos: IMutationInfo<object>[];
};
