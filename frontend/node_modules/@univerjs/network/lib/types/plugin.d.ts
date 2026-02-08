import { IUniverNetworkConfig } from './controllers/config.schema';
import { IConfigService, ILogService, Injector, Plugin } from '@univerjs/core';
/**
 * This plugin add network services to the Univer instance.
 */
export declare class UniverNetworkPlugin extends Plugin {
    private readonly _config;
    private readonly _logger;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    constructor(_config: Partial<IUniverNetworkConfig> | undefined, _logger: ILogService, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
