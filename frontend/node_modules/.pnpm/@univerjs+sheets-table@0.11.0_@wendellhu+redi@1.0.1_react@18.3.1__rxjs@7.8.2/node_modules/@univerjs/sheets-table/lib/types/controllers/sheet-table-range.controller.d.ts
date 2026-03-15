import { Disposable } from '@univerjs/core';
import { IExclusiveRangeService } from '@univerjs/sheets';
import { TableManager } from '../model/table-manager';
export declare class SheetTableRangeController extends Disposable {
    private _tableManager;
    private _exclusiveRangeService;
    constructor(_tableManager: TableManager, _exclusiveRangeService: IExclusiveRangeService);
    private _initRangeListener;
}
