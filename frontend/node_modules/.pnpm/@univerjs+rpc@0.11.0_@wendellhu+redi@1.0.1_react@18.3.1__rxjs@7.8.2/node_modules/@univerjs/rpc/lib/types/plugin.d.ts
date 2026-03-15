import { IUniverRPCMainThreadConfig, IUniverRPCWorkerThreadConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin } from '@univerjs/core';
/**
 * This plugin is used to register the RPC services on the main thread. It
 * is also responsible for booting up the Web Worker instance of Univer.
 */
export declare class UniverRPCMainThreadPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    private _internalWorker;
    constructor(_config: Partial<IUniverRPCMainThreadConfig> | undefined, _injector: Injector, _configService: IConfigService);
    dispose(): void;
    onStarting(): void;
}
/**
 * This plugin is used to register the RPC services on the worker thread.
 */
export declare class UniverRPCWorkerThreadPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    constructor(_config: Partial<IUniverRPCWorkerThreadConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
