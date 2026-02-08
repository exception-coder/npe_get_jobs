import { Nullable } from '@univerjs/core';
import { HTTPInterceptorFnFactory } from '../interceptor';
export interface IRetryInterceptorFactoryParams {
    maxRetryAttempts?: number;
    delayInterval?: number;
}
export declare const RetryInterceptorFactory: HTTPInterceptorFnFactory<[Nullable<IRetryInterceptorFactoryParams>]>;
