import { Disposable } from '@univerjs/core';
import { SheetPermissionCheckController } from '@univerjs/sheets';
import { SheetsThreadCommentModel } from '@univerjs/sheets-thread-comment';
import { HoverManagerService } from '@univerjs/sheets-ui';
import { SheetsThreadCommentPopupService } from '../services/sheets-thread-comment-popup.service';
export declare class SheetsThreadCommentHoverController extends Disposable {
    private readonly _hoverManagerService;
    private readonly _sheetsThreadCommentPopupService;
    private readonly _sheetsThreadCommentModel;
    private readonly _sheetPermissionCheckController;
    constructor(_hoverManagerService: HoverManagerService, _sheetsThreadCommentPopupService: SheetsThreadCommentPopupService, _sheetsThreadCommentModel: SheetsThreadCommentModel, _sheetPermissionCheckController: SheetPermissionCheckController);
    private _initHoverEvent;
}
