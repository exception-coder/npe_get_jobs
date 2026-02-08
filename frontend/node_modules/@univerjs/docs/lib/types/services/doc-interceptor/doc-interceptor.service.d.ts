import { DocumentDataModel, IInterceptor, Nullable, Disposable, DisposableCollection } from '@univerjs/core';
import { DocumentViewModel, IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocSkeletonManagerService } from '../doc-skeleton-manager.service';
export declare class DocInterceptorService extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docSkeletonManagerService;
    private _interceptorsByName;
    constructor(_context: IRenderContext<DocumentDataModel>, _docSkeletonManagerService: DocSkeletonManagerService);
    intercept<T extends IInterceptor<any, any>>(name: T, interceptor: T): import('@wendellhu/redi').IDisposable;
    fetchThroughInterceptors<T, C>(name: IInterceptor<T, C>): (initValue: Nullable<T>, initContext: C) => Nullable<T>;
    interceptDocumentViewModel(viewModel: DocumentViewModel): DisposableCollection;
}
