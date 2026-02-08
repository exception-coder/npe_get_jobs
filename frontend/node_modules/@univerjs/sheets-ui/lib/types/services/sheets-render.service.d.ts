import { IDisposable, IContextService, IUniverInstanceService, RxDisposable, ThemeService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
/**
 * This controller is responsible for managing units of a specific kind (UniverSheet) to be rendered on the canvas.
 */
export declare class SheetsRenderService extends RxDisposable {
    private readonly _contextService;
    private readonly _instanceSrv;
    private readonly _renderManagerService;
    private readonly _themeService;
    private _skeletonChangeMutations;
    constructor(_contextService: IContextService, _instanceSrv: IUniverInstanceService, _renderManagerService: IRenderManagerService, _themeService: ThemeService);
    /**
     * Register a mutation id that will trigger the skeleton change.
     *
     * @param mutationId the id of the mutation
     * @returns a disposable to unregister the mutation
     */
    registerSkeletonChangingMutations(mutationId: string): IDisposable;
    /**
     * Examine if a mutation would make the skeleton to change.
     */
    checkMutationShouldTriggerRerender(id: string): boolean;
    private _init;
    private _initWorkbookListener;
    private _createRenderer;
    private _disposeRenderer;
    private _initContextListener;
}
