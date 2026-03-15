import { Disposable, ICommandService } from '@univerjs/core';
import { RefRangeService, SheetsSelectionsService } from '@univerjs/sheets';
import { ThreadCommentModel } from '@univerjs/thread-comment';
import { SheetsThreadCommentModel } from '../models/sheets-thread-comment.model';
export declare class SheetsThreadCommentRefRangeController extends Disposable {
    private readonly _refRangeService;
    private readonly _sheetsThreadCommentModel;
    private readonly _threadCommentModel;
    private readonly _selectionManagerService;
    private readonly _commandService;
    private _disposableMap;
    private _watcherMap;
    constructor(_refRangeService: RefRangeService, _sheetsThreadCommentModel: SheetsThreadCommentModel, _threadCommentModel: ThreadCommentModel, _selectionManagerService: SheetsSelectionsService, _commandService: ICommandService);
    private _getIdWithUnitId;
    private _handleRangeChange;
    private _register;
    private _watch;
    private _unwatch;
    private _unregister;
    private _initData;
    private _initRefRange;
}
