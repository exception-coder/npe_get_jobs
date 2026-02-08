import { Disposable, Injector } from '@univerjs/core';
import { IAutoFillService } from '@univerjs/sheets-ui';
export declare class SheetCellImageAutofillController extends Disposable {
    private readonly _autoFillService;
    private readonly _injector;
    constructor(_autoFillService: IAutoFillService, _injector: Injector);
    private _initAutoFillHooks;
}
