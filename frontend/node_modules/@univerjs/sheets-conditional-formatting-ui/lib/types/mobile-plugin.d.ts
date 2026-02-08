import { IUniverSheetsConditionalFormattingUIConfig } from './controllers/config.schema';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsConditionalFormattingMobileUIPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private _commandService;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsConditionalFormattingUIConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService);
    private _initCommand;
}
