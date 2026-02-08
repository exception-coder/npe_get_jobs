import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { IThreadCommentDataSourceService, ThreadCommentModel } from '@univerjs/thread-comment';
export declare class SheetsThreadCommentResourceController extends Disposable {
    private readonly _univerInstanceService;
    private _sheetInterceptorService;
    private _threadCommentModel;
    private _threadCommentDataSourceService;
    constructor(_univerInstanceService: IUniverInstanceService, _sheetInterceptorService: SheetInterceptorService, _threadCommentModel: ThreadCommentModel, _threadCommentDataSourceService: IThreadCommentDataSourceService);
    private _initSheetChange;
}
