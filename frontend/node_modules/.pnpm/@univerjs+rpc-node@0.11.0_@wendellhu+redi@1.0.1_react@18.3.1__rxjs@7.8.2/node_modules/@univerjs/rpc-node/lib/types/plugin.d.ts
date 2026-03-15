import { IUniverRPCNodeMainConfig, IUniverRPCNodeWorkerThreadConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin } from '@univerjs/core';
export declare class UniverRPCNodeMainPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    constructor(_config: Partial<IUniverRPCNodeMainConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
export declare class UniverRPCNodeWorkerPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    constructor(_config: Partial<IUniverRPCNodeWorkerThreadConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
