import { IUniverSheetsFormulaBaseConfig, IUniverSheetsFormulaRemoteConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverRemoteSheetsFormulaPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsFormulaRemoteConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
export declare class UniverSheetsFormulaPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsFormulaBaseConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
}
