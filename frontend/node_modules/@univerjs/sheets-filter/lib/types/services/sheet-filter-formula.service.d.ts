import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { IActiveDirtyManagerService, ISheetRowFilteredService } from '@univerjs/engine-formula';
import { SheetsFilterService } from './sheet-filter.service';
/**
 * Hidden rows after filtering affect formula calculations, such as SUBTOTAL
 */
export declare class SheetsFilterFormulaService extends Disposable {
    private _activeDirtyManagerService;
    private _sheetRowFilteredService;
    private _sheetsFilterService;
    private readonly _univerInstanceService;
    constructor(_activeDirtyManagerService: IActiveDirtyManagerService, _sheetRowFilteredService: ISheetRowFilteredService, _sheetsFilterService: SheetsFilterService, _univerInstanceService: IUniverInstanceService);
    private _initFormulaDirtyRange;
    private _getHideRowMutation;
    private _registerSheetRowFiltered;
}
