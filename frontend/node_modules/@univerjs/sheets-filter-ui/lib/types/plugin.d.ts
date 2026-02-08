import { IUniverSheetsFilterUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRPCChannelService } from '@univerjs/rpc';
/**
 * The plugin for the desktop version of the sheets filter UI. Its type is {@link UniverInstanceType.UNIVER_SHEET}.
 */
export declare class UniverSheetsFilterUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _rpcChannelService?;
    static type: UniverInstanceType;
    static pluginName: string;
    constructor(_config: Partial<IUniverSheetsFilterUIConfig> | undefined, _injector: Injector, _configService: IConfigService, _rpcChannelService?: IRPCChannelService | undefined);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
}
