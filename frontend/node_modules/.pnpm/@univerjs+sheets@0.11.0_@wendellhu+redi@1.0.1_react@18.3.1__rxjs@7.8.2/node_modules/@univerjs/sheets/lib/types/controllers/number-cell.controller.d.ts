import { Disposable } from '@univerjs/core';
import { SheetInterceptorService } from '../services/sheet-interceptor/sheet-interceptor.service';
export declare class NumberCellDisplayController extends Disposable {
    private _sheetInterceptorService;
    constructor(_sheetInterceptorService: SheetInterceptorService);
    private _initialize;
    private _initInterceptorCellContent;
}
