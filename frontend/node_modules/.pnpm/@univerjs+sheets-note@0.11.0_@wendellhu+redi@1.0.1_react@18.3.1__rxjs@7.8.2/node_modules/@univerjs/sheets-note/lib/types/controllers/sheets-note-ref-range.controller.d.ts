import { Disposable, ICommandService } from '@univerjs/core';
import { RefRangeService, SheetsSelectionsService } from '@univerjs/sheets';
import { SheetsNoteModel } from '../models/sheets-note.model';
export declare class SheetsNoteRefRangeController extends Disposable {
    private readonly _refRangeService;
    private readonly _sheetsNoteModel;
    private readonly _selectionManagerService;
    private readonly _commandService;
    private _disposableMap;
    private _watcherMap;
    constructor(_refRangeService: RefRangeService, _sheetsNoteModel: SheetsNoteModel, _selectionManagerService: SheetsSelectionsService, _commandService: ICommandService);
    private _getIdWithUnitId;
    private _handleRangeChange;
    private _register;
    private _watch;
    private _unwatch;
    private _unregister;
    private _initData;
    private _initRefRange;
}
