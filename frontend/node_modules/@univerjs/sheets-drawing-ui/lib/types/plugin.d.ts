import { IUniverSheetsDrawingUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverSheetsDrawingUIPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _renderManagerService;
    private readonly _configService;
    static type: UniverInstanceType;
    static pluginName: string;
    constructor(_config: Partial<IUniverSheetsDrawingUIConfig> | undefined, _injector: Injector, _renderManagerService: IRenderManagerService, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
    onSteady(): void;
    private _registerRenderModules;
}
