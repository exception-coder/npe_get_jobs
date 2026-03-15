import { IUniverDocsHyperLinkConfig } from './controllers/config.schema';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverDocsHyperLinkPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    private readonly _commandService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverDocsHyperLinkConfig> | undefined, _injector: Injector, _configService: IConfigService, _commandService: ICommandService);
    onStarting(): void;
}
