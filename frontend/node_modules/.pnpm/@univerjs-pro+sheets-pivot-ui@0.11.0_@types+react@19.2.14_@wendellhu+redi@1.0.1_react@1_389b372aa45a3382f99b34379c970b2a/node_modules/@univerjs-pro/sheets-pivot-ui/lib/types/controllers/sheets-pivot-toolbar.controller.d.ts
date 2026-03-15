import { SheetsPivotTableConfigModel } from '@univerjs-pro/sheets-pivot';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { MergeCellController } from '@univerjs/sheets';
export declare class SheetsPivotToolbarController extends Disposable {
    private _mergeCellController;
    private _univerInstanceService;
    private readonly _sheetsPivotTableConfigModel;
    constructor(_mergeCellController: MergeCellController, _univerInstanceService: IUniverInstanceService, _sheetsPivotTableConfigModel: SheetsPivotTableConfigModel);
    private _initMenuInterceptor;
}
