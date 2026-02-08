import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService, ZebraCrossingCacheController } from '@univerjs/sheets';
import { TableManager } from '../model/table-manager';
export declare class TableFilterController extends Disposable {
    private _tableManager;
    private readonly _sheetInterceptorService;
    private readonly _univerInstanceService;
    private readonly _zebraCrossingCacheController;
    private readonly _tableFilteredOutRows$;
    readonly tableFilteredOutRows$: import('rxjs').Observable<Readonly<Set<number>>>;
    private _subscription;
    constructor(_tableManager: TableManager, _sheetInterceptorService: SheetInterceptorService, _univerInstanceService: IUniverInstanceService, _zebraCrossingCacheController: ZebraCrossingCacheController);
    get tableFilteredOutRows(): Set<number>;
    set tableFilteredOutRows(value: Set<number>);
    initTableHiddenRowIntercept(): void;
    private _initFilteredOutRows;
    registerFilterChangeEvent(): void;
    dispose(): void;
}
