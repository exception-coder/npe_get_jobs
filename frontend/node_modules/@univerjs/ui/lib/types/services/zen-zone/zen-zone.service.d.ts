import { IDisposable } from '@univerjs/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { ComponentType } from '../../common/component-manager';
export declare const IZenZoneService: import('@wendellhu/redi').IdentifierDecorator<IZenZoneService>;
export interface IZenZoneService {
    readonly visible$: BehaviorSubject<boolean>;
    readonly componentKey$: ReplaySubject<string>;
    readonly temporaryHidden$: Observable<boolean>;
    readonly visible: boolean;
    readonly temporaryHidden: boolean;
    set(key: string, component: ComponentType): IDisposable;
    open(): void;
    close(): void;
    /**
     * temporarily hide the zen zone, often
     */
    hide(): void;
    /**
     * show the zen zone
     */
    show(): void;
}
