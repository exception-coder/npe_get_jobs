import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { TableManager } from '@univerjs/sheets-table';
export declare class SheetTableSelectionController extends Disposable {
    private readonly _sheetInterceptorService;
    private readonly _univerInstanceService;
    private readonly _tableManager;
    constructor(_sheetInterceptorService: SheetInterceptorService, _univerInstanceService: IUniverInstanceService, _tableManager: TableManager);
    private _initSelectionChange;
}
