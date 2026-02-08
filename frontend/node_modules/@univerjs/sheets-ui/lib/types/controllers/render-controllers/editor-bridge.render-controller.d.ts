import { Workbook, ICommandService, IContextService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule, IRenderManagerService } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { IEditorBridgeService } from '../../services/editor-bridge.service';
import { SheetSkeletonManagerService } from '../../services/sheet-skeleton-manager.service';
export declare class EditorBridgeRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _instanceSrv;
    private readonly _commandService;
    private readonly _editorBridgeService;
    private readonly _selectionManagerService;
    private readonly _contextService;
    private readonly _renderManagerService;
    private readonly _sheetSkeletonManagerService;
    private _d;
    constructor(_context: IRenderContext<Workbook>, _instanceSrv: IUniverInstanceService, _commandService: ICommandService, _editorBridgeService: IEditorBridgeService, _selectionManagerService: SheetsSelectionsService, _contextService: IContextService, _renderManagerService: IRenderManagerService, _sheetSkeletonManagerService: SheetSkeletonManagerService);
    private _init;
    private _disposeCurrent;
    private _initSelectionChangeListener;
    private _updateEditorPosition;
    refreshEditorPosition(): void;
    private _initEventListener;
    /**
     * Should activate the editor when the user inputs text.
     * @param d DisposableCollection
     */
    private _initialKeyboardListener;
    private _commandExecutedListener;
    private _showEditorByKeyboard;
    private _tryHideEditor;
    private _hideEditor;
    private _getSheetObject;
    private _isCurrentSheetFocused;
}
