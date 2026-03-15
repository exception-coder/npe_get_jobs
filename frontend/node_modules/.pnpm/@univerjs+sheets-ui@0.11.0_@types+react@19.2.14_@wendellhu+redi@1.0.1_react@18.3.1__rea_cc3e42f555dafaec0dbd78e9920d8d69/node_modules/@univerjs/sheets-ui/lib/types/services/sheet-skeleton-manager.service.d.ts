import { IRange, IRangeWithCoord, Nullable, Workbook, Disposable, Injector } from '@univerjs/core';
import { IRender, IRenderContext, IRenderModule, SpreadsheetSkeleton } from '@univerjs/engine-render';
import { SheetSkeletonService } from '@univerjs/sheets';
export interface ISheetSkeletonManagerParam {
    unitId: string;
    sheetId: string;
    skeleton: SpreadsheetSkeleton;
    dirty: boolean;
    commandId?: string;
}
export interface ISheetSkeletonManagerSearch {
    sheetId: string;
    commandId?: string;
}
/**
 * SheetSkeletonManagerService is registered in a render unit
 */
export declare class SheetSkeletonManagerService extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _injector;
    private readonly _sheetSkService;
    private _sheetId;
    private _sheetSkeletonParamStore;
    private readonly _currentSkeleton$;
    readonly currentSkeleton$: import('rxjs').Observable<Nullable<ISheetSkeletonManagerParam>>;
    /**
     * CurrentSkeletonBefore for pre-triggered logic during registration
     */
    private readonly _currentSkeletonBefore$;
    readonly currentSkeletonBefore$: import('rxjs').Observable<Nullable<ISheetSkeletonManagerParam>>;
    constructor(_context: IRenderContext<Workbook>, _injector: Injector, _sheetSkService: SheetSkeletonService);
    private _initRemoveSheet;
    getCurrentSkeleton(): Nullable<SpreadsheetSkeleton>;
    /**
     * @deprecated use `getCurrentSkeleton` instead.
     */
    getCurrent(): Nullable<ISheetSkeletonManagerParam>;
    /**
     * get ISheetSkeletonManagerParam from _currentSkeletonSearchParam
     * @returns
     */
    getCurrentParam(): Nullable<ISheetSkeletonManagerParam>;
    /**
     * Get skeleton by sheetId
     * @param sheetId
     */
    getSkeleton(sheetId: string): Nullable<SpreadsheetSkeleton>;
    /**
     * Get SkeletonParam by sheetId
     * @param sheetId
     */
    getSkeletonParam(sheetId: string): Nullable<ISheetSkeletonManagerParam>;
    /**
     * @deprecated use `getSkeleton` instead.
     */
    getWorksheetSkeleton(sheetId: string): Nullable<ISheetSkeletonManagerParam>;
    getUnitSkeleton(unitId: string, sheetId: string): Nullable<ISheetSkeletonManagerParam>;
    /**
     * Command in COMMAND_LISTENER_SKELETON_CHANGE would cause setCurrent, see @packages/sheets-ui/src/controllers/render-controllers/sheet.render-controller.ts
     * @param searchParam
     */
    setCurrent(searchParam: ISheetSkeletonManagerSearch): Nullable<ISheetSkeletonManagerParam>;
    setSkeletonParam(sheetId: string, skp: ISheetSkeletonManagerParam): void;
    private _setCurrent;
    reCalculate(param?: Nullable<ISheetSkeletonManagerParam>): void;
    /**
     * Make param dirty, if param is dirty, then the skeleton will be makeDirty in _reCalculate()
     * @param searchParm
     * @param state
     */
    makeDirty(searchParm: ISheetSkeletonManagerSearch, state?: boolean): void;
    /**
     * @deprecated Use function `ensureSkeleton` instead.
     * @param searchParam
     */
    getOrCreateSkeleton(searchParam: ISheetSkeletonManagerSearch): SpreadsheetSkeleton | undefined;
    ensureSkeleton(sheetId: string): SpreadsheetSkeleton | undefined;
    disposeSkeleton(sheetId: string): void;
    /** @deprecated Use function `attachRangeWithCoord` instead.  */
    attachRangeWithCoord(range: IRange): Nullable<IRangeWithCoord>;
    private _getSkeletonParam;
    private _getSkeleton;
    private _buildSkeleton;
    setColumnHeaderSize(render: Nullable<IRender>, sheetId: string, size: number): void;
    setRowHeaderSize(render: Nullable<IRender>, sheetId: string, size: number): void;
}
