import { Workbook, Disposable, ICommandService, IContextService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IEditorBridgeService } from '../../services/editor-bridge.service';
import { SheetSkeletonManagerService } from '../../services/sheet-skeleton-manager.service';
/**
 * Zoom render controller, registered in a render module.
 */
export declare class SheetsZoomRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _commandService;
    private readonly _contextService;
    private readonly _editorBridgeService?;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _commandService: ICommandService, _contextService: IContextService, _editorBridgeService?: IEditorBridgeService | undefined);
    updateZoom(worksheetId: string, zoomRatio: number): boolean;
    private _initZoomEventListener;
    private _zoom;
    private _initSkeletonListener;
    /**
     * Triggered when zoom and switch sheet.
     * @param zoomRatio
     */
    private _updateViewZoom;
}
