import { SubscriptionLike, Subject, Subscription } from 'rxjs';
import { IDisposable } from '../common/di';
type DisposableLike = IDisposable | SubscriptionLike | (() => void);
export declare function toDisposable(disposable: IDisposable): IDisposable;
export declare function toDisposable(subscription: SubscriptionLike): IDisposable;
export declare function toDisposable(callback: () => void): IDisposable;
export declare function toDisposable(v: DisposableLike): IDisposable;
/**
 * @deprecated use toDisposable instead
 */
export declare function fromObservable(subscription: Subscription): IDisposable;
export declare class DisposableCollection implements IDisposable {
    private readonly _disposables;
    add(disposable: DisposableLike): {
        dispose: (notDisposeSelf?: boolean) => void;
    };
    dispose(): void;
}
export declare class Disposable implements IDisposable {
    protected _disposed: boolean;
    private readonly _collection;
    disposeWithMe(disposable: DisposableLike): IDisposable;
    protected ensureNotDisposed(): void;
    dispose(): void;
}
export declare class RxDisposable extends Disposable implements IDisposable {
    protected dispose$: Subject<void>;
    dispose(): void;
}
export declare class RCDisposable extends Disposable {
    private readonly _rootDisposable;
    private _ref;
    constructor(_rootDisposable: IDisposable);
    inc(): void;
    dec(): void;
}
export {};
