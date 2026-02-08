import { Nullable } from '@univerjs/core';
import { RefObject } from 'react';
import { Observable } from 'rxjs';
export * from '@wendellhu/redi/react-bindings';
type ObservableOrFn<T> = Observable<T> | (() => Observable<T>);
declare module '@univerjs/ui' {
    function useObservable<T>(observable: ObservableOrFn<T>, defaultValue: T | undefined, shouldHaveSyncValue?: true): T;
    function useObservable<T>(observable: Nullable<ObservableOrFn<T>>, defaultValue: T): T;
    function useObservable<T>(observable: Nullable<ObservableOrFn<T>>, defaultValue?: undefined): T | undefined;
    function useObservable<T>(observable: Nullable<ObservableOrFn<T>>, defaultValue: T, shouldHaveSyncValue?: boolean, deps?: any[]): T;
    function useObservable<T>(observable: Nullable<ObservableOrFn<T>>, defaultValue: undefined, shouldHaveSyncValue: true, deps?: any[]): T;
    function useObservable<T>(observable: Nullable<ObservableOrFn<T>>, defaultValue?: T, shouldHaveSyncValue?: boolean, deps?: any[]): T | undefined;
}
export declare function useObservableRef<T>(observable: Nullable<ObservableOrFn<T>>, defaultValue?: T): RefObject<Nullable<T>>;
