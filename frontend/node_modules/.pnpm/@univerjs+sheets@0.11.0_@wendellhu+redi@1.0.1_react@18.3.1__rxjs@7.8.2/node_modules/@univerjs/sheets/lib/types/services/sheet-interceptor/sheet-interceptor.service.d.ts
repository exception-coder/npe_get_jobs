import { ICellData, ICellDataForSheetInterceptor, ICommandInfo, IComposeInterceptors, IDisposable, IInterceptor, IRange, IUndoRedoCommandInfosByInterceptor, Nullable, ObjectMatrix, Workbook, Worksheet, Disposable, InterceptorEffectEnum, InterceptorManager, IUniverInstanceService } from '@univerjs/core';
import { ISheetLocation } from './utils/interceptor';
export interface IBeforeCommandInterceptor {
    priority?: number;
    performCheck(info: ICommandInfo): Promise<boolean>;
}
export interface ICommandInterceptor {
    priority?: number;
    getMutations(command: ICommandInfo): IUndoRedoCommandInfosByInterceptor;
}
export interface IRangesInfo {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
}
export interface IRangeInterceptors {
    priority?: number;
    getMutations(rangesInfo: IRangesInfo): IUndoRedoCommandInfosByInterceptor;
}
export interface IAutoHeightContext {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
    autoHeightRanges?: IRange[];
    lazyAutoHeightRanges?: IRange[];
    cellHeights?: ObjectMatrix<number>;
}
export interface IAutoHeightInterceptors {
    priority?: number;
    getMutations(ctx: IAutoHeightContext): IUndoRedoCommandInfosByInterceptor;
}
interface ISheetLocationForEditor extends ISheetLocation {
    origin: Nullable<ICellData>;
}
export declare const BEFORE_CELL_EDIT: IInterceptor<ICellDataForSheetInterceptor, ISheetLocationForEditor>;
export declare const AFTER_CELL_EDIT: IInterceptor<ICellDataForSheetInterceptor, ISheetLocationForEditor>;
export declare const VALIDATE_CELL: IInterceptor<Promise<boolean>, ISheetLocation>;
/**
 * This class expose methods for sheet features to inject code to sheet underlying logic.
 */
export declare class SheetInterceptorService extends Disposable {
    private readonly _univerInstanceService;
    private _interceptorsByName;
    private _commandInterceptors;
    private _rangeInterceptors;
    private _autoHeightInterceptors;
    private _beforeCommandInterceptor;
    private _afterCommandInterceptors;
    private readonly _workbookDisposables;
    private readonly _worksheetDisposables;
    private _interceptorsDirty;
    private _composedInterceptorByKey;
    readonly writeCellInterceptor: InterceptorManager<{
        BEFORE_CELL_EDIT: IInterceptor<ICellDataForSheetInterceptor, ISheetLocationForEditor>;
        AFTER_CELL_EDIT: IInterceptor<ICellDataForSheetInterceptor, ISheetLocationForEditor>;
        VALIDATE_CELL: IInterceptor<Promise<boolean>, ISheetLocation>;
    }>;
    /** @ignore */
    constructor(_univerInstanceService: IUniverInstanceService);
    dispose(): void;
    /**
     * Add a listener function to a specific command to add affiliated mutations. It should be called in controllers.
     *
     * Pairs with {@link onCommandExecute}.
     *
     * @param interceptor
     * @returns
     */
    interceptCommand(interceptor: ICommandInterceptor): IDisposable;
    /**
     * When command is executing, call this method to gether undo redo mutations from upper features.
     * @param command
     * @returns
     */
    onCommandExecute(info: ICommandInfo): IUndoRedoCommandInfosByInterceptor;
    interceptAfterCommand(interceptor: ICommandInterceptor): IDisposable;
    afterCommandExecute(info: ICommandInfo): IUndoRedoCommandInfosByInterceptor;
    interceptAutoHeight(interceptor: IAutoHeightInterceptors): IDisposable;
    generateMutationsOfAutoHeight(ctx: IAutoHeightContext): IUndoRedoCommandInfosByInterceptor;
    /**
     * Add a listener function to a specific command to determine if the command can execute mutations. It should be
     * called in controllers.
     *
     * Pairs with {@link beforeCommandExecute}.
     *
     * @param interceptor
     * @returns
     */
    interceptBeforeCommand(interceptor: IBeforeCommandInterceptor): IDisposable;
    /**
     * before command execute, call this method to get the flag of whether it can be executed the command，
     * @param info ICommandInfo
     * @returns Promise<boolean>
     */
    beforeCommandExecute(info: ICommandInfo): Promise<boolean>;
    /**
     * By adding callbacks to some Ranges can get some additional mutations, such as clearing all plugin data in a certain area.
     * @param interceptor IRangeInterceptors
     * @returns IDisposable
     */
    interceptRanges(interceptor: IRangeInterceptors): IDisposable;
    generateMutationsByRanges(info: IRangesInfo): IUndoRedoCommandInfosByInterceptor;
    onWriteCell(workbook: Workbook, worksheet: Worksheet, row: number, col: number, cellData: ICellData): Nullable<ICellDataForSheetInterceptor>;
    onValidateCell(workbook: Workbook, worksheet: Worksheet, row: number, col: number): Nullable<Promise<boolean>>;
    intercept<T extends IInterceptor<any, any>>(name: T, interceptor: T): IDisposable;
    fetchThroughInterceptors<T, C>(name: IInterceptor<T, C>, effect?: InterceptorEffectEnum, _key?: string, filter?: (interceptor: IInterceptor<any, any>) => boolean): ReturnType<IComposeInterceptors<T, C>>;
    private _interceptWorkbook;
    private _disposeWorkbookInterceptor;
    private _disposeSheetInterceptor;
}
export {};
