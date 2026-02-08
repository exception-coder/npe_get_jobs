import { IMutationInfo, IRange, Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { RefRangeService, SheetInterceptorService, ZebraCrossingCacheController } from '@univerjs/sheets';
import { SheetsFilterService } from '../services/sheet-filter.service';
export declare class SheetsFilterController extends Disposable {
    private readonly _commandService;
    private readonly _sheetInterceptorService;
    private readonly _sheetsFilterService;
    private readonly _univerInstanceService;
    private readonly _refRangeService;
    private readonly _dataSyncPrimaryController;
    private readonly _zebraCrossingCacheController;
    private _disposableCollection;
    constructor(_commandService: ICommandService, _sheetInterceptorService: SheetInterceptorService, _sheetsFilterService: SheetsFilterService, _univerInstanceService: IUniverInstanceService, _refRangeService: RefRangeService, _dataSyncPrimaryController: DataSyncPrimaryController, _zebraCrossingCacheController: ZebraCrossingCacheController);
    private _initZebraCrossingCacheListener;
    private _initCommands;
    private _initInterceptors;
    private _registerRefRange;
    private _getUpdateFilter;
    handleInsertColCommand(range: IRange, unitId: string, subUnitId: string): {
        redos: IMutationInfo<object>[];
        undos: IMutationInfo<object>[];
    };
    private _handleInsertRowCommand;
    handleRemoveColCommand(range: IRange, unitId: string, subUnitId: string): {
        undos: IMutationInfo<object>[];
        redos: IMutationInfo<object>[];
    };
    private _handleRemoveRowCommand;
    handleMoveColsCommand({ fromRange, toRange }: {
        fromRange: IRange;
        toRange: IRange;
    }, unitId: string, subUnitId: string): {
        undos: IMutationInfo<object>[];
        redos: IMutationInfo<object>[];
    };
    private _handleMoveRowsCommand;
    private _handleMoveRangeCommand;
    private _handleRemoveSheetCommand;
    private _handleCopySheetCommand;
    private _handleNull;
    private _initRowFilteredInterceptor;
    private _moveCriteria;
    private _commandExecutedListener;
    private _getExtendRegion;
    private _initErrorHandling;
    private _cellHasValue;
}
