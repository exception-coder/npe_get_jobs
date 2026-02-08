import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetInterceptorService } from '@univerjs/sheets';
import { SheetsThreadCommentModel } from '@univerjs/sheets-thread-comment';
export declare class SheetsThreadCommentRenderController extends Disposable {
    private readonly _sheetInterceptorService;
    private readonly _sheetsThreadCommentModel;
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    constructor(_sheetInterceptorService: SheetInterceptorService, _sheetsThreadCommentModel: SheetsThreadCommentModel, _univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService);
    private _initViewModelIntercept;
    private _initSkeletonChange;
}
