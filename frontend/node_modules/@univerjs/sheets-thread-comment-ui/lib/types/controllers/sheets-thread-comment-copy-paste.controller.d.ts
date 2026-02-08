import { Disposable } from '@univerjs/core';
import { SheetsThreadCommentModel } from '@univerjs/sheets-thread-comment';
import { ISheetClipboardService } from '@univerjs/sheets-ui';
import { IThreadCommentDataSourceService } from '@univerjs/thread-comment';
export declare class SheetsThreadCommentCopyPasteController extends Disposable {
    private _sheetClipboardService;
    private _sheetsThreadCommentModel;
    private _threadCommentDataSourceService;
    private _copyInfo;
    constructor(_sheetClipboardService: ISheetClipboardService, _sheetsThreadCommentModel: SheetsThreadCommentModel, _threadCommentDataSourceService: IThreadCommentDataSourceService);
    private _initClipboardHook;
}
