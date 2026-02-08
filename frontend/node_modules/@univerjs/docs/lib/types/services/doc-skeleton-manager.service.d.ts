import { DocumentDataModel, Nullable, IUniverInstanceService, LocaleService, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule, DocumentSkeleton, DocumentViewModel } from '@univerjs/engine-render';
/**
 * This service is for document build and manage doc skeletons. It also manages
 * DocumentViewModels.
 */
export declare class DocSkeletonManagerService extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _localeService;
    private readonly _univerInstanceService;
    private _skeleton;
    private _docViewModel;
    private readonly _currentSkeleton$;
    readonly currentSkeleton$: import('rxjs').Observable<Nullable<DocumentSkeleton>>;
    private readonly _currentSkeletonBefore$;
    readonly currentSkeletonBefore$: import('rxjs').Observable<Nullable<DocumentSkeleton>>;
    private readonly _currentViewModel$;
    readonly currentViewModel$: import('rxjs').Observable<Nullable<DocumentViewModel>>;
    constructor(_context: IRenderContext<DocumentDataModel>, _localeService: LocaleService, _univerInstanceService: IUniverInstanceService);
    dispose(): void;
    getSkeleton(): DocumentSkeleton;
    getViewModel(): DocumentViewModel;
    private _init;
    private _update;
    private _buildSkeleton;
    private _buildDocViewModel;
}
