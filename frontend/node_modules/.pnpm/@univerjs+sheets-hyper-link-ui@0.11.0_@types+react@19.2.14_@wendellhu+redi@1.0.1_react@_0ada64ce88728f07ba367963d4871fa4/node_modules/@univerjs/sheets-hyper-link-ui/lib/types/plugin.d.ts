import { IUniverSheetsHyperLinkUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsHyperLinkUIPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsHyperLinkUIConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
}
