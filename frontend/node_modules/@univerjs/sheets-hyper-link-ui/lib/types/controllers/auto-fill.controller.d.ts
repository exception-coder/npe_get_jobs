import { Disposable } from '@univerjs/core';
import { HyperLinkModel } from '@univerjs/sheets-hyper-link';
import { IAutoFillService } from '@univerjs/sheets-ui';
export declare class SheetsHyperLinkAutoFillController extends Disposable {
    private readonly _autoFillService;
    private readonly _hyperLinkModel;
    constructor(_autoFillService: IAutoFillService, _hyperLinkModel: HyperLinkModel);
    private _initAutoFill;
}
