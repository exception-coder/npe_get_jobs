import { IUniverDataValidationConfig } from './controllers/config.schema';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverDataValidationPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private _commandService;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverDataValidationConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
}
