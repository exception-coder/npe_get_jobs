import { IUniverSheetsGraphicsConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverSheetsGraphicsPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    private readonly _renderManagerService;
    static pluginName: string;
    constructor(_config: Partial<IUniverSheetsGraphicsConfig> | undefined, _injector: Injector, _configService: IConfigService, _renderManagerService: IRenderManagerService);
    onRendered(): void;
}
