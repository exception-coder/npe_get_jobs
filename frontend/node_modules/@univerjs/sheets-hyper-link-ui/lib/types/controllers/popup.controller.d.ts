import { Disposable, ICommandService, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetPermissionCheckController } from '@univerjs/sheets';
import { HoverManagerService, IEditorBridgeService } from '@univerjs/sheets-ui';
import { IZenZoneService } from '@univerjs/ui';
import { SheetsHyperLinkPopupService } from '../services/popup.service';
export declare class SheetsHyperLinkPopupController extends Disposable {
    private readonly _hoverManagerService;
    private readonly _sheetsHyperLinkPopupService;
    private readonly _renderManagerService;
    private readonly _permissionService;
    private readonly _sheetPermissionCheckController;
    private readonly _commandService;
    private readonly _editorBridgeService;
    private readonly _textSelectionManagerService;
    private readonly _univerInstanceService;
    private readonly _zenZoneService;
    constructor(_hoverManagerService: HoverManagerService, _sheetsHyperLinkPopupService: SheetsHyperLinkPopupService, _renderManagerService: IRenderManagerService, _permissionService: IPermissionService, _sheetPermissionCheckController: SheetPermissionCheckController, _commandService: ICommandService, _editorBridgeService: IEditorBridgeService, _textSelectionManagerService: DocSelectionManagerService, _univerInstanceService: IUniverInstanceService, _zenZoneService: IZenZoneService);
    private _getLinkPermission;
    private _initHoverListener;
    private _initHoverEditingListener;
    private _initZenEditor;
    private _initTextSelectionListener;
    private _initCommandListener;
}
