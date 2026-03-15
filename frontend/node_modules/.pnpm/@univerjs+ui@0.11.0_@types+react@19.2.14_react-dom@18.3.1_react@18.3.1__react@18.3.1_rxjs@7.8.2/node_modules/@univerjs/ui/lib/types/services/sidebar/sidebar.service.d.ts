import { IDisposable } from '@univerjs/core';
import { Subject } from 'rxjs';
import { ISidebarMethodOptions } from '../../views/components/sidebar/Sidebar';
export interface ISidebarService {
    readonly sidebarOptions$: Subject<ISidebarMethodOptions>;
    readonly scrollEvent$: Subject<Event>;
    open(params: ISidebarMethodOptions): IDisposable;
    close(id?: string): void;
    get visible(): boolean;
    get options(): ISidebarMethodOptions;
    getContainer(): HTMLElement | undefined;
    setContainer(element?: HTMLElement): void;
}
export declare const ILeftSidebarService: import('@wendellhu/redi').IdentifierDecorator<ISidebarService>;
export declare const ISidebarService: import('@wendellhu/redi').IdentifierDecorator<ISidebarService>;
