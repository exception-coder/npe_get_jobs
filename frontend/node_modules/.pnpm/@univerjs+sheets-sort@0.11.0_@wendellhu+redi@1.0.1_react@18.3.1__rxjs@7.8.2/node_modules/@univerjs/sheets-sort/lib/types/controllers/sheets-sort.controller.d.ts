import { Disposable, ICommandService } from '@univerjs/core';
import { SheetsSortService } from '../services/sheets-sort.service';
export type ICommonComparableCellValue = number | string | null;
export declare class SheetsSortController extends Disposable {
    private readonly _commandService;
    private readonly _sortService;
    constructor(_commandService: ICommandService, _sortService: SheetsSortService);
    private _initCommands;
    private _registerCompareFns;
    private _getCommonValue;
}
