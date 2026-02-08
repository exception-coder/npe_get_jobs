import { Injector, Disposable } from '@univerjs/core';
/**
 * `FBase` is a base class for all facade classes.
 * It provides a way to extend classes with static and instance methods.
 * The `_initialize` as a special method that will be called after the constructor. You should never call it directly.
 * @ignore
 */
export declare abstract class FBase extends Disposable {
    /**
     * @ignore
     */
    static extend(source: any): void;
}
/**
 * @ignore
 */
declare const InitializerSymbol: unique symbol;
/**
 * @ignore
 * @hideconstructor
 */
export declare class FBaseInitialable extends Disposable {
    protected _injector: Injector;
    private [InitializerSymbol];
    constructor(_injector: Injector);
    /**
     * @ignore
     */
    _initialize(injector: Injector, ..._rest: any[]): void;
    protected _runInitializers(...args: any[]): void;
    protected static _enableManualInit(): void;
    /**
     * @ignore
     */
    static extend(source: any): void;
}
export {};
