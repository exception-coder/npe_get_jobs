import { IUniverDrawingUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin } from '@univerjs/core';
export declare class UniverDrawingUIPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    constructor(_config: Partial<IUniverDrawingUIConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onRendered(): void;
    private _initDependencies;
}
