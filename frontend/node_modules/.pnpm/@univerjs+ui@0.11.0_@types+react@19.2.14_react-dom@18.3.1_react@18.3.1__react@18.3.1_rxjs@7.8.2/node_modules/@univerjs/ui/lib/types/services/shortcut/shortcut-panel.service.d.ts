import { Disposable } from '@univerjs/core';
export declare class ShortcutPanelService extends Disposable {
    private _open$;
    open$: import('rxjs').Observable<boolean>;
    get isOpen(): boolean;
    dispose(): void;
    open(): void;
    close(): void;
}
