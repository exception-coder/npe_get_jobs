import { IRange, Workbook, Disposable, ICommandService } from '@univerjs/core';
import { IRenderContext, IRenderModule, SpreadsheetSkeleton } from '@univerjs/engine-render';
import { SheetSkeletonManagerService } from './sheet-skeleton-manager.service';
export interface IAutoHeightTask {
    ranges: IRange[];
    maxTime?: number;
    sheetId: string;
    id: string;
}
export interface IAutoHeightTaskInfo extends IAutoHeightTask {
    startTime: number;
    skeleton: SpreadsheetSkeleton;
}
export declare const IAutoHeightService: import('@wendellhu/redi').IdentifierDecorator<unknown>;
export declare function taskRowsFromRanges(ranges: IRange[], rows: number): {
    result: IRange[];
    lasts: IRange[];
};
export declare class AutoHeightService extends Disposable implements IRenderModule {
    private _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _commandService;
    private _autoHeightTasks;
    private _calculateLoopId;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _commandService: ICommandService);
    private _initMarkDirty;
    private _loopTask;
    private _calculateLoop;
    private _initialCalculateLoop;
    startAutoHeightTask(task: IAutoHeightTask): void;
    cancelTask(taskId: string): void;
}
