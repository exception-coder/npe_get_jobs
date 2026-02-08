import { OperatorFunction, BehaviorSubject, Observable } from 'rxjs';
import { IDisposable } from '../common/di';
type CallbackFn<T extends readonly unknown[]> = (cb: (...args: T) => void) => IDisposable;
/**
 * Creates an observable from a callback function.
 *
 * @param callback The callback function that will be called when the observable is subscribed to. **Please not that the
 * if the callback function has `this` context, it will be lost when the callback is called. So you probably
 * should bind the callback to the correct context.**
 *
 * @returns The observable that will emit when the callback function gets called.
 */
export declare function fromCallback<T extends readonly unknown[]>(callback: CallbackFn<T>): Observable<T>;
/**
 * An operator that would complete the stream once a condition is met. Consider it as a shortcut of `takeUntil`.
 */
export declare function takeAfter<T>(callback: (value: T) => boolean): (source: Observable<T>) => Observable<T>;
export declare function bufferDebounceTime<T>(time?: number): OperatorFunction<T, T[]>;
export declare function afterTime(ms: number): Observable<void>;
export declare function convertObservableToBehaviorSubject<T>(observable: Observable<T>, initValue: T): BehaviorSubject<T>;
export {};
