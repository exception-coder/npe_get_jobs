import { IUniverDocsConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin } from '@univerjs/core';
export declare class UniverDocsPlugin extends Plugin {
    private readonly _config;
    _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    constructor(_config: Partial<IUniverDocsConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    private _initializeCommands;
    private _initializeDependencies;
    onReady(): void;
}
