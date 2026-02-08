import { HTTPInterceptorFnFactory } from '../interceptor';
export interface IAuthInterceptorParams {
    errorStatusCodes: number[];
    onAuthError: () => void;
}
export declare const AuthInterceptorFactory: HTTPInterceptorFnFactory<[IAuthInterceptorParams]>;
