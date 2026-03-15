import { Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { RefRangeService } from '@univerjs/sheets';
import { ConditionalFormattingRuleModel } from '@univerjs/sheets-conditional-formatting';
export declare class SheetsCfRefRangeController extends Disposable {
    private _conditionalFormattingRuleModel;
    private _univerInstanceService;
    private _injector;
    private _refRangeService;
    constructor(_conditionalFormattingRuleModel: ConditionalFormattingRuleModel, _univerInstanceService: IUniverInstanceService, _injector: Injector, _refRangeService: RefRangeService);
    private _initRefRange;
}
