import { IUniverFindReplaceConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin } from '@univerjs/core';
export declare class UniverFindReplacePlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    constructor(_config: Partial<IUniverFindReplaceConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onRendered(): void;
}
