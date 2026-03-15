import { IUniverThreadCommentConfig } from './controllers/config.schema';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverThreadCommentPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    protected _commandService: ICommandService;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverThreadCommentConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService);
    onStarting(): void;
}
