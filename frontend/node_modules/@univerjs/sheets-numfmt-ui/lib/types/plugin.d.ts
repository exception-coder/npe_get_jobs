import { IUniverSheetsNumfmtUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare const SHEET_NUMFMT_UI_PLUGIN = "SHEET_NUMFMT_UI_PLUGIN";
export declare class UniverSheetsNumfmtUIPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _configService;
    private readonly _renderManagerService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsNumfmtUIConfig> | undefined, _injector: Injector, _configService: IConfigService, _renderManagerService: IRenderManagerService);
    onStarting(): void;
    onRendered(): void;
    private _registerRenderModules;
}
