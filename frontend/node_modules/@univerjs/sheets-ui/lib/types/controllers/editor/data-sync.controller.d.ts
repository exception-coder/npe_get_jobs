import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { RangeProtectionRuleModel, WorksheetProtectionRuleModel } from '@univerjs/sheets';
import { IEditorBridgeService } from '../../services/editor-bridge.service';
import { IFormulaEditorManagerService } from '../../services/editor/formula-editor-manager.service';
import { FormulaEditorController } from './formula-editor.controller';
/**
 * sync data between cell editor and formula editor
 */
export declare class EditorDataSyncController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private readonly _editorBridgeService;
    private readonly _commandService;
    private readonly _rangeProtectionRuleModel;
    private readonly _worksheetProtectionRuleModel;
    private readonly _formulaEditorController;
    private readonly _formulaEditorManagerService;
    constructor(_univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _editorBridgeService: IEditorBridgeService, _commandService: ICommandService, _rangeProtectionRuleModel: RangeProtectionRuleModel, _worksheetProtectionRuleModel: WorksheetProtectionRuleModel, _formulaEditorController: FormulaEditorController, _formulaEditorManagerService: IFormulaEditorManagerService);
    private _initialize;
    private _getEditorViewModel;
    private _syncFormulaEditorContent;
    private _editorSyncHandler;
    private _commandExecutedListener;
    private _syncActionsAndRender;
    private _syncContentAndRender;
    private _checkAndSetRenderStyleConfig;
    private _clearParagraph;
}
