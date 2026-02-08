import { Disposable } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { ConditionalFormattingService } from '@univerjs/sheets-conditional-formatting';
export declare class ConditionalFormattingEditorController extends Disposable {
    private readonly _sheetInterceptorService;
    private readonly _conditionalFormattingService;
    constructor(_sheetInterceptorService: SheetInterceptorService, _conditionalFormattingService: ConditionalFormattingService);
    /**
     * Process the  values after  edit
     * @private
     * @memberof NumfmtService
     */
    private _initInterceptorEditorEnd;
}
