import { Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { INumfmtService, SheetInterceptorService } from '@univerjs/sheets';
import { IEditorBridgeService } from '@univerjs/sheets-ui';
export declare class NumfmtEditorController extends Disposable {
    private _sheetInterceptorService;
    private _numfmtService;
    private _univerInstanceService;
    private _injector;
    private _editorBridgeService?;
    private _collectEffectMutation;
    constructor(_sheetInterceptorService: SheetInterceptorService, _numfmtService: INumfmtService, _univerInstanceService: IUniverInstanceService, _injector: Injector, _editorBridgeService?: IEditorBridgeService | undefined);
    private _initInterceptorEditorStart;
    /**
     * Process the  values after  edit
     * @private
     * @memberof NumfmtService
     */
    private _initInterceptorEditorEnd;
    private _initInterceptorCommands;
    dispose(): void;
}
