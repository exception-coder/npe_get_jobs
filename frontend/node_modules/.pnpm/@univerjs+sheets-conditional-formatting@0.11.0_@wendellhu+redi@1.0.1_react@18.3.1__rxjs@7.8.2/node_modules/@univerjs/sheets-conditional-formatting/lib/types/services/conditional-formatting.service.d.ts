import { IHighlightCell } from '../models/type';
import { IDataBarCellData, IIconSetCellData } from '../render/type';
import { Disposable, ICommandService, Injector, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { ConditionalFormattingRuleModel } from '../models/conditional-formatting-rule-model';
import { ConditionalFormattingViewModel } from '../models/conditional-formatting-view-model';
export declare class ConditionalFormattingService extends Disposable {
    private _conditionalFormattingRuleModel;
    private _injector;
    private _univerInstanceService;
    private _resourceManagerService;
    private _sheetInterceptorService;
    private _commandService;
    get _conditionalFormattingViewModelV2(): ConditionalFormattingViewModel;
    constructor(_conditionalFormattingRuleModel: ConditionalFormattingRuleModel, _injector: Injector, _univerInstanceService: IUniverInstanceService, _resourceManagerService: IResourceManagerService, _sheetInterceptorService: SheetInterceptorService, _commandService: ICommandService);
    composeStyle(unitId: string, subUnitId: string, row: number, col: number): ({
        style?: IHighlightCell["style"];
    } & IDataBarCellData & IIconSetCellData & {
        isShowValue: boolean;
    }) | null;
    private _initSnapshot;
    private _initSheetChange;
    private _initCellChange;
}
