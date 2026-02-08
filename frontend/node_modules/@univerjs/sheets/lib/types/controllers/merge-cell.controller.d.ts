import { IRange, Dimension, Disposable, DisposableCollection, ICommandService, Injector, InterceptorManager, IUniverInstanceService } from '@univerjs/core';
import { IRemoveWorksheetMergeMutationParams } from '../basics/interfaces/mutation-interface';
import { EffectRefRangeParams } from '../services/ref-range/type';
import { RefRangeService } from '../services/ref-range/ref-range.service';
import { SheetsSelectionsService } from '../services/selections/selection.service';
import { SheetInterceptorService } from '../services/sheet-interceptor/sheet-interceptor.service';
/**
 * calculates the selection based on the merged cell type
 * @param {IRange[]} selection
 * @param {Dimension} [type]
 * @return {*}
 */
export declare function getAddMergeMutationRangeByType(selection: IRange[], type?: Dimension): IRange[];
export declare const MERGE_CELL_INTERCEPTOR_CHECK: import('@univerjs/core').IInterceptor<boolean, IRange[]>;
export declare class MergeCellController extends Disposable {
    private readonly _commandService;
    private readonly _refRangeService;
    private readonly _univerInstanceService;
    private _injector;
    private _sheetInterceptorService;
    private _selectionManagerService;
    disposableCollection: DisposableCollection;
    readonly interceptor: InterceptorManager<{
        MERGE_CELL_INTERCEPTOR_CHECK: import('@univerjs/core').IInterceptor<boolean, IRange[]>;
    }>;
    constructor(_commandService: ICommandService, _refRangeService: RefRangeService, _univerInstanceService: IUniverInstanceService, _injector: Injector, _sheetInterceptorService: SheetInterceptorService, _selectionManagerService: SheetsSelectionsService);
    private _initCommandInterceptor;
    refRangeHandle(config: EffectRefRangeParams, unitId: string, subUnitId: string): {
        redos: {
            id: string;
            params: IRemoveWorksheetMergeMutationParams;
        }[];
        undos: {
            id: string;
            params: IRemoveWorksheetMergeMutationParams;
        }[];
    };
    private _onRefRangeChange;
    private _handleMoveRowsCommand;
    private _handleMoveColsCommand;
    private _handleMoveRangeCommand;
    private _handleInsertRowCommand;
    private _handleInsertColCommand;
    private _handleRemoveColCommand;
    private _handleRemoveRowCommand;
    private _handleInsertRangeMoveRightCommand;
    private _handleInsertRangeMoveDownCommand;
    private _handleDeleteRangeMoveUpCommand;
    private _handleDeleteRangeMoveLeftCommand;
    private _checkIsMergeCell;
    private _handleNull;
    private _commandExecutedListener;
}
