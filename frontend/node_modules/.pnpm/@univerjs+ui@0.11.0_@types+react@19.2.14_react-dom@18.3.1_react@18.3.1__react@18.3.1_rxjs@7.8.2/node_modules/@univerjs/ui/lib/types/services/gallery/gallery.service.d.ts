import { IDisposable } from '@univerjs/core';
import { IGalleryProps } from '@univerjs/design';
import { Subject } from 'rxjs';
export declare const IGalleryService: import('@wendellhu/redi').IdentifierDecorator<IGalleryService>;
export interface IGalleryService {
    gallery$: Subject<IGalleryProps>;
    open(params: IGalleryProps): IDisposable;
    close(): void;
}
