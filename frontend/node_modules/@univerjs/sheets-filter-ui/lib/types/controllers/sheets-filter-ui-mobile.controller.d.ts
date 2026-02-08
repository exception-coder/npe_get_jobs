import { RxDisposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetsRenderService } from '@univerjs/sheets-ui';
export declare class SheetsFilterUIMobileController extends RxDisposable {
    private readonly _renderManagerService;
    private _sheetsRenderService;
    constructor(_renderManagerService: IRenderManagerService, _sheetsRenderService: SheetsRenderService);
}
