import { Nullable } from '@univerjs/core';
import { HTTPInterceptorFnFactory } from '../interceptor';
export interface IThresholdInterceptorFactoryParams {
    maxParallel?: number;
}
export declare const ThresholdInterceptorFactory: HTTPInterceptorFnFactory<[Nullable<IThresholdInterceptorFactoryParams>]>;
