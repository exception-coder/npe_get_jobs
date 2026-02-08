import { IDisposable } from '@univerjs/core';
import { Subject } from 'rxjs';
export declare const IGlobalZoneService: import('@wendellhu/redi').IdentifierDecorator<IGlobalZoneService>;
export interface IGlobalZoneService {
    readonly visible$: Subject<boolean>;
    readonly componentKey$: Subject<string>;
    get componentKey(): string;
    set(key: string, component: any): IDisposable;
    open(): void;
    close(): void;
}
