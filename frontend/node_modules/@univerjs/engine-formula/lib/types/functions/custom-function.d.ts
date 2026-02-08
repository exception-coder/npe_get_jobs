import { BaseFunction } from './base-function';
export declare class CustomFunction extends BaseFunction {
    isCustom(): boolean;
}
export declare class AsyncCustomFunction extends CustomFunction {
    isAsync(): boolean;
}
