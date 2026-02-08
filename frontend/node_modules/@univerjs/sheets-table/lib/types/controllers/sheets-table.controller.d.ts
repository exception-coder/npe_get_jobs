import { IRange, Disposable, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { TableManager } from '../model/table-manager';
export declare class SheetsTableController extends Disposable {
    private _univerInstanceService;
    private _sheetInterceptorService;
    private _tableManager;
    private _resourceManagerService;
    private _tableRangeRTree;
    constructor(_univerInstanceService: IUniverInstanceService, _sheetInterceptorService: SheetInterceptorService, _tableManager: TableManager, _resourceManagerService: IResourceManagerService);
    getContainerTableWithRange(unitId: string, subUnitId: string, range: IRange): import('../model/table').Table | undefined;
    private _ensureTableRangeRTree;
    registerTableChangeEvent(): void;
    registerTableHeaderInterceptor(): void;
    private _toJson;
    private _fromJSON;
    private _deleteUnitId;
    private _initSnapshot;
    private _initSheetChange;
    dispose(): void;
}
