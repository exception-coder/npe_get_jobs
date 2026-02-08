import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetInterceptorService } from '@univerjs/sheets';
import { ConditionalFormattingRuleModel, ConditionalFormattingService, ConditionalFormattingViewModel } from '@univerjs/sheets-conditional-formatting';
export declare class SheetsCfRenderController extends Disposable {
    private _sheetInterceptorService;
    private _conditionalFormattingService;
    private _univerInstanceService;
    private _renderManagerService;
    private _conditionalFormattingViewModel;
    private _conditionalFormattingRuleModel;
    /**
     * When a set operation is triggered multiple times over a short period of time, it may result in some callbacks not being disposed,and caused a render cache exception.
     * The solution here is to store all the asynchronous tasks and focus on processing after the last callback
     */
    private _ruleChangeCacheMap;
    constructor(_sheetInterceptorService: SheetInterceptorService, _conditionalFormattingService: ConditionalFormattingService, _univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _conditionalFormattingViewModel: ConditionalFormattingViewModel, _conditionalFormattingRuleModel: ConditionalFormattingRuleModel);
    private _markDirtySkeleton;
    private _initSkeleton;
    private _initViewModelInterceptor;
}
