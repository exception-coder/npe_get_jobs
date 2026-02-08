import { ICommandService, IContextService, IUndoRedoService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { IEditorService } from '@univerjs/docs-ui';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IEditorBridgeService } from '../../services/editor-bridge.service';
import { IFormulaEditorManagerService } from '../../services/editor/formula-editor-manager.service';
export declare class FormulaEditorController extends RxDisposable {
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private readonly _editorBridgeService;
    private readonly _commandService;
    private readonly _contextService;
    private readonly _formulaEditorManagerService;
    private readonly _undoRedoService;
    private readonly _textSelectionManagerService;
    private readonly _editorService;
    private _loadedMap;
    constructor(_univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _editorBridgeService: IEditorBridgeService, _commandService: ICommandService, _contextService: IContextService, _formulaEditorManagerService: IFormulaEditorManagerService, _undoRedoService: IUndoRedoService, _textSelectionManagerService: DocSelectionManagerService, _editorService: IEditorService);
    private _initialize;
    private _handleContentChange;
    private _create;
    private _listenFxBtnClick;
    private _syncEditorSize;
    private _scheduledCallback;
    private _clearScheduledCallback;
    autoScroll(): void;
}
