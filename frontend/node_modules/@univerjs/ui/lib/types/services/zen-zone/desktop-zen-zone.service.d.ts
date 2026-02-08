import { IDisposable } from '@univerjs/core';
import { ComponentType, ComponentManager } from '../../common/component-manager';
import { IZenZoneService } from './zen-zone.service';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
export declare class DesktopZenZoneService implements IZenZoneService, IDisposable {
    private readonly _componentManager;
    readonly visible$: BehaviorSubject<boolean>;
    readonly componentKey$: ReplaySubject<string>;
    private readonly _temporaryHidden$;
    readonly temporaryHidden$: import('rxjs').Observable<boolean>;
    private _visible;
    get visible(): boolean;
    get temporaryHidden(): boolean;
    constructor(_componentManager: ComponentManager);
    dispose(): void;
    hide(): void;
    show(): void;
    set(key: string, component: ComponentType): IDisposable;
    open(): void;
    close(): void;
}
