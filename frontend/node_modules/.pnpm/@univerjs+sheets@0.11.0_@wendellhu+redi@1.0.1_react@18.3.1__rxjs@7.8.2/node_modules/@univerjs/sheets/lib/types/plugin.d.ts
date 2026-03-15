import { IUniverSheetsConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsConfig> | undefined, _injector: Injector, _configService: IConfigService);
    private _initConfig;
    private _initDependencies;
    onStarting(): void;
    onRendered(): void;
    onReady(): void;
}
