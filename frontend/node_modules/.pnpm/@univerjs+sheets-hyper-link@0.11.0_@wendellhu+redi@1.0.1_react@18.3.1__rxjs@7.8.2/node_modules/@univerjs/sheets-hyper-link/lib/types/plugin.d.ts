import { IUniverSheetsHyperLinkConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsHyperLinkPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsHyperLinkConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
