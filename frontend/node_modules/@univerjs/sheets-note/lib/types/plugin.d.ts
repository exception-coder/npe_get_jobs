import { IUniverSheetsNoteConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsNotePlugin extends Plugin {
    private readonly _config;
    private readonly _configService;
    protected readonly _injector: Injector;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: IUniverSheetsNoteConfig | undefined, _configService: IConfigService, _injector: Injector);
    onStarting(): void;
    onReady(): void;
}
