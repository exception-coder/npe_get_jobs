import { Nullable } from '@univerjs/core';
import { DocumentSkeleton } from '@univerjs/engine-render';
export declare class DocRefreshDrawingsService {
    private readonly _refreshDrawings$;
    readonly refreshDrawings$: import('rxjs').Observable<Nullable<DocumentSkeleton>>;
    refreshDrawings(skeleton: Nullable<DocumentSkeleton>): void;
}
