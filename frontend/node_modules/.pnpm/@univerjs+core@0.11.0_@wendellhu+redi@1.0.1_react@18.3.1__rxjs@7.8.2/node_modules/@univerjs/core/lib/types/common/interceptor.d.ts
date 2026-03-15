import { Nullable } from '../shared/types';
export type InterceptorHandler<M = unknown, C = unknown> = (value: Nullable<M>, context: C, next: (value: Nullable<M>) => Nullable<M>) => Nullable<M>;
export declare enum InterceptorEffectEnum {
    Style = 1,// 1<< 0
    Value = 2
}
export interface IInterceptor<M, C> {
    id?: string;
    priority?: number;
    handler: InterceptorHandler<M, C>;
}
export interface ICellInterceptor<M, C> extends IInterceptor<M, C> {
    /**
     * The effect of the interceptor handler.
     * If the effect is 'Style', the worksheet@getCellValueOnly will bypass this interceptor.
     * If the effect is 'Value', the worksheet@getStyleOnly will bypass this interceptor.
     */
    effect?: InterceptorEffectEnum;
}
export declare function createInterceptorKey<T, C>(key: string): IInterceptor<T, C>;
export type IComposeInterceptors<T = any, C = any> = (interceptors: Array<IInterceptor<T, C>>) => (initValue: Nullable<T>, initContext: C) => Nullable<T>;
/**
 * A helper to compose a certain type of interceptors.
 */
export declare const composeInterceptors: <T, C>(interceptors: Array<IInterceptor<T, C>>) => ReturnType<IComposeInterceptors<T, C>>;
export declare class InterceptorManager<P extends Record<string, IInterceptor<any, any>>> {
    private _interceptorsByName;
    private _interceptorPoints;
    constructor(interceptorPoints: P);
    /**
     * Get the interceptors.
     * @param name Name of the intercepted point.
     * @param filter A callback function to filter the interceptors.
     * @returns It will return a composed interceptor function. If you will perform the interceptor repeatedly,
     * you should cache the result instead of calling this function multiple times.
     */
    fetchThroughInterceptors<T, C>(name: IInterceptor<T, C>, filter?: (interceptor: IInterceptor<any, any>) => boolean): (initValue: Nullable<T>, initContext: C) => Nullable<T>;
    intercept<T extends IInterceptor<any, any>>(name: T, interceptor: T): () => boolean;
    getInterceptPoints(): P;
    dispose(): void;
}
export declare function createAsyncInterceptorKey<T, C>(key: string): IAsyncInterceptor<T, C>;
export type AsyncInterceptorHandler<M = unknown, C = unknown> = (value: Nullable<M>, context: C, next: (value: Nullable<M>) => Promise<Nullable<M>>) => Promise<Nullable<M>>;
export interface IAsyncInterceptor<M, C> {
    /**
     * The priority of the interceptor, the larger the number, the higher the priority.
     * @default 0
     */
    priority?: number;
    handler: AsyncInterceptorHandler<M, C>;
}
export type IComposeAsyncInterceptors<T = any, C = any> = (interceptors: Array<IAsyncInterceptor<T, C>>) => (initValue: Nullable<T>, initContext: C) => Promise<Nullable<T>>;
export declare const composeAsyncInterceptors: <T, C>(interceptors: Array<IAsyncInterceptor<T, C>>) => ((initialValue: Nullable<T>, context: C) => Promise<Nullable<T>>);
export declare class AsyncInterceptorManager<P extends Record<string, IAsyncInterceptor<any, any>>> {
    private _asyncInterceptorsByName;
    private _asyncInterceptorPoints;
    constructor(asyncInterceptorPoints: P);
    /**
     * Get the interceptors.
     * @param name Name of the intercepted point.
     * @param filter A callback function to filter the interceptors.
     * @returns It will return a composed interceptor function. If you will perform the interceptor repeatedly,
     * you should cache the result instead of calling this function multiple times.
     */
    fetchThroughAsyncInterceptors<T, C>(name: IAsyncInterceptor<T, C>, filter?: (interceptor: IAsyncInterceptor<any, any>) => boolean): (initialValue: Nullable<T>, context: C) => Promise<Nullable<T>>;
    interceptAsync<T extends IAsyncInterceptor<any, any>>(name: T, interceptor: T): Promise<() => boolean>;
    getInterceptPoints(): P;
    dispose(): void;
}
