import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ConditionalFormattingViewModel } from '@univerjs/sheets-conditional-formatting';
export declare class ConditionalFormattingViewportController extends Disposable {
    private _conditionalFormattingViewModel;
    private _univerInstanceService;
    private _renderManagerService;
    constructor(_conditionalFormattingViewModel: ConditionalFormattingViewModel, _univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService);
    private _init;
}
