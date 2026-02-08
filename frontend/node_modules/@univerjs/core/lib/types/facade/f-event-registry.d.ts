import { IDisposable, Registry } from '@univerjs/core';
import { Subscription } from 'rxjs';
import { IEventParamConfig } from './f-event';
export declare class FEventRegistry {
    protected _eventRegistry: Map<string, Registry<(param: any) => void>>;
    protected _eventHandlerMap: Map<string, Set<() => IDisposable | Subscription>>;
    protected _eventHandlerRegisted: Map<string, Map<() => IDisposable | Subscription, IDisposable>>;
    protected _ensureEventRegistry(event: string): Registry<(param: any) => void>;
    dispose(): void;
    registerEventHandler(event: string, handler: () => IDisposable | Subscription): IDisposable;
    removeEvent<T extends keyof IEventParamConfig>(event: T, callback: (params: IEventParamConfig[T]) => void): void;
    private _initEventHandler;
    /**
     * Add an event listener
     * @param {string} event key of event
     * @param {(params: IEventParamConfig[typeof event]) => void} callback callback when event triggered
     * @returns {Disposable} The Disposable instance, for remove the listener
     * @example
     * ```ts
     * univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, (params) => {
     *   const { stage } = params;
     *   console.log('life cycle changed', params);
     * });
     * ```
     */
    addEvent<T extends keyof IEventParamConfig>(event: T, callback: (params: IEventParamConfig[T]) => void): IDisposable;
    /**
     * Fire an event, used in internal only.
     * @param {string} event key of event
     * @param {any} params params of event
     * @returns {boolean} should cancel
     * @example
     * ```ts
     * this.fireEvent(univerAPI.Event.LifeCycleChanged, params);
     * ```
     */
    fireEvent<T extends keyof IEventParamConfig>(event: T, params: IEventParamConfig[T]): boolean | undefined;
}
