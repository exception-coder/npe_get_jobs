import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService, SheetsSelectionsService } from '@univerjs/sheets';
import { HyperLinkModel } from '../models/hyper-link.model';
export declare class SheetHyperLinkSetRangeController extends Disposable {
    private readonly _sheetInterceptorService;
    private readonly _hyperLinkModel;
    private readonly _selectionManagerService;
    private readonly _univerInstanceService;
    constructor(_sheetInterceptorService: SheetInterceptorService, _hyperLinkModel: HyperLinkModel, _selectionManagerService: SheetsSelectionsService, _univerInstanceService: IUniverInstanceService);
    private _initCommandInterceptor;
    private _initSetRangeValuesCommandInterceptor;
    private _initClearSelectionCommandInterceptor;
    private _initAfterEditor;
}
