import { IUniverSheetsTableConfig } from './controllers/config.schema';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsTablePlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    private _commandService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsTableConfig> | undefined, _injector: Injector, _configService: IConfigService, _commandService: ICommandService);
    onStarting(): void;
    onReady(): void;
    private _initRegisterCommand;
}
