import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetPermissionCheckController, SheetsSelectionsService } from '@univerjs/sheets';
import { SheetsThreadCommentModel } from '@univerjs/sheets-thread-comment';
import { IEditorBridgeService, IMarkSelectionService } from '@univerjs/sheets-ui';
import { ThreadCommentPanelService } from '@univerjs/thread-comment-ui';
import { SheetsThreadCommentPopupService } from '../services/sheets-thread-comment-popup.service';
export declare class SheetsThreadCommentPopupController extends Disposable {
    private readonly _commandService;
    private readonly _sheetsThreadCommentPopupService;
    private readonly _sheetsThreadCommentModel;
    private readonly _threadCommentPanelService;
    private readonly _univerInstanceService;
    private readonly _sheetPermissionCheckController;
    private readonly _markSelectionService;
    private readonly _sheetSelectionService;
    private readonly _editorBridgeService;
    private readonly _renderManagerService;
    private _isSwitchToCommenting;
    private _selectionShapeInfo;
    constructor(_commandService: ICommandService, _sheetsThreadCommentPopupService: SheetsThreadCommentPopupService, _sheetsThreadCommentModel: SheetsThreadCommentModel, _threadCommentPanelService: ThreadCommentPanelService, _univerInstanceService: IUniverInstanceService, _sheetPermissionCheckController: SheetPermissionCheckController, _markSelectionService: IMarkSelectionService, _sheetSelectionService: SheetsSelectionsService, _editorBridgeService: IEditorBridgeService, _renderManagerService: IRenderManagerService);
    private _handleSelectionChange;
    private _initSelectionUpdateListener;
    private _initEditorBridge;
    private _initCommandListener;
    private _initPanelListener;
    private _initMarkSelection;
}
