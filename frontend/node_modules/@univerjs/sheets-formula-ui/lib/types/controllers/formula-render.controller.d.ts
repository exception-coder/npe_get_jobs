import { RxDisposable } from '@univerjs/core';
import { FormulaDataModel } from '@univerjs/engine-formula';
import { SheetInterceptorService } from '@univerjs/sheets';
export declare class FormulaRenderManagerController extends RxDisposable {
    private readonly _sheetInterceptorService;
    private readonly _formulaDataModel;
    constructor(_sheetInterceptorService: SheetInterceptorService, _formulaDataModel: FormulaDataModel);
}
