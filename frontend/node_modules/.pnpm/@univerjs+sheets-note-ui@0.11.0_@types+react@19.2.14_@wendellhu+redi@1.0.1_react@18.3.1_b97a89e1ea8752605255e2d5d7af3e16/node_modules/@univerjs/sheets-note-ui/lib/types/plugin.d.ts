import { IUniverSheetsNoteUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare const PLUGIN_NAME = "SHEET_NOTE_UI_PLUGIN";
export declare class UniverSheetsNoteUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsNoteUIConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
}
