import { Disposable, ICommandService, Injector, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { RefRangeService, SheetInterceptorService } from '@univerjs/sheets';
import { TableManager } from '../model/table-manager';
export declare class SheetTableRefRangeController extends Disposable {
    private readonly _commandService;
    private readonly _refRangeService;
    private readonly _univerInstanceService;
    private _injector;
    private _sheetInterceptorService;
    private _tableManager;
    private _localeService;
    constructor(_commandService: ICommandService, _refRangeService: RefRangeService, _univerInstanceService: IUniverInstanceService, _injector: Injector, _sheetInterceptorService: SheetInterceptorService, _tableManager: TableManager, _localeService: LocaleService);
    private _initCommandInterceptor;
    private _generateTableMutationWithInsertRow;
    private _generateTableMutationWithInsertCol;
    private _generateTableMutationWithRemoveRow;
    private _generateTableMutationWithRemoveCol;
    private _initCommandListener;
}
