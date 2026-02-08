import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { HyperLinkModel } from '../models/hyper-link.model';
export declare class SheetsHyperLinkRemoveSheetController extends Disposable {
    private _sheetInterceptorService;
    private _univerInstanceService;
    private _hyperLinkModel;
    constructor(_sheetInterceptorService: SheetInterceptorService, _univerInstanceService: IUniverInstanceService, _hyperLinkModel: HyperLinkModel);
    private _initSheetChange;
}
