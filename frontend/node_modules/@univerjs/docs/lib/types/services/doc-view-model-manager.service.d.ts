import { DocumentDataModel, Nullable, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule, DocumentViewModel } from '@univerjs/engine-render';
export interface IDocumentViewModelManagerParam {
    unitId: string;
    docViewModel: DocumentViewModel;
}
/**
 * The view model manager is used to manage Doc view model. Each view model has a one-to-one correspondence
 * with the doc skeleton.
 */
export declare class DocViewModelManagerService extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _univerInstanceService;
    private _docViewModelMap;
    private readonly _currentDocViewModel$;
    readonly currentDocViewModel$: import('rxjs').Observable<Nullable<IDocumentViewModelManagerParam>>;
    private readonly _docViewModelAdd$;
    readonly docViewModelAdd$: import('rxjs').Observable<DocumentViewModel>;
    constructor(_context: IRenderContext<DocumentDataModel>, _univerInstanceService: IUniverInstanceService);
    private _initialize;
    dispose(): void;
    private _init;
    private _create;
    getAllModel(): Map<string, IDocumentViewModelManagerParam>;
    getViewModel(unitId: string): DocumentViewModel | undefined;
    private _setCurrent;
    private _buildDocViewModel;
}
