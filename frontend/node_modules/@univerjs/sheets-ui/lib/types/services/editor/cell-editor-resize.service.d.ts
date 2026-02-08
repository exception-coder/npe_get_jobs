import { Disposable, IConfigService, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ILayoutService } from '@univerjs/ui';
import { IEditorBridgeService } from '../editor-bridge.service';
import { ICellEditorManagerService } from './cell-editor-manager.service';
export declare class SheetCellEditorResizeService extends Disposable {
    private readonly _layoutService;
    private readonly _cellEditorManagerService;
    private readonly _editorBridgeService;
    private readonly _renderManagerService;
    private readonly _univerInstanceService;
    private readonly _configService;
    constructor(_layoutService: ILayoutService, _cellEditorManagerService: ICellEditorManagerService, _editorBridgeService: IEditorBridgeService, _renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService, _configService: IConfigService);
    private get _currentRenderer();
    private get _editingUnitId();
    private get _editingRenderer();
    private get _renderer();
    private get _sheetSkeletonManagerService();
    private get engine();
    fitTextSize(callback?: () => void): void;
    /**
     * Mainly used to pre-calculate the width of the editor,
     * to determine whether it needs to be automatically widened.
     */
    private _predictingSize;
    private _getEditorMaxSize;
    /**
     * Mainly used to calculate the volume of scenes and objects,
     * determine whether a scrollbar appears,
     * and calculate the editor's boundaries relative to the browser.
     */
    private _editAreaProcessing;
    /**
     * Since the document does not support cell background color, an additional rect needs to be added.
     */
    private _addBackground;
    resizeCellEditor(callback?: () => void): void;
    private _getEditorObject;
    private _getEditorSkeleton;
}
