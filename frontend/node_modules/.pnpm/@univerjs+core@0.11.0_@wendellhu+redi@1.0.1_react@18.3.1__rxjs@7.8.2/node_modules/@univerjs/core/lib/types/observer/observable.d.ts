import { Observer as RxObserver, Subscription, Observable, Subject } from 'rxjs';
/**
 * A class serves as a medium between the observable and its observers
 */
export declare class EventState {
    /**
     * An WorkBookObserver can set this property to true to prevent subsequent observers of being notified
     */
    skipNextObservers: boolean;
    /**
     * This will be populated with the return value of the last function that was executed.
     * If it is the first function in the callback chain it will be the event data.
     */
    lastReturnValue?: unknown;
    isStopPropagation: boolean;
    stopPropagation(): void;
}
interface INotifyObserversReturn {
    /** If the event has been handled by any event handler. */
    handled: boolean;
    lastReturnValue: unknown;
    stopPropagation: boolean;
}
export interface IEventObserver<T> extends Partial<RxObserver<[T, EventState]>> {
    next?: (value: [T, EventState]) => unknown;
    priority?: number;
}
/**
 * This is a custom implementation of RxJS subject. It handles events on canvas elements.
 * In addition to the event, it also emits a state object that can be used to controls the
 * propagation of the event.
 *
 */
export declare class EventSubject<T> extends Subject<[T, EventState]> {
    private _sortedObservers;
    /** @deprecated Use `subscribeEvent` instead. */
    subscribe(): Subscription;
    /** @deprecated Use `emitEvent` instead. */
    next(): void;
    unsubscribe(): void;
    complete(): void;
    subscribeEvent(observer: IEventObserver<T> | ((evt: T, state: EventState) => unknown)): Subscription;
    clearObservers(): void;
    emitEvent(event: T): INotifyObserversReturn;
}
export declare function fromEventSubject<T>(subject$: EventSubject<T>): Observable<T>;
export {};
