import { IUniverDrawingConfig } from './controllers/config.schema';
import { ICommandService, IConfigService, Injector, Plugin } from '@univerjs/core';
export declare class UniverDrawingPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    private readonly _commandService;
    static pluginName: string;
    constructor(_config: Partial<IUniverDrawingConfig> | undefined, _injector: Injector, _configService: IConfigService, _commandService: ICommandService);
    onStarting(): void;
    private _initDependencies;
    private _initCommands;
}
