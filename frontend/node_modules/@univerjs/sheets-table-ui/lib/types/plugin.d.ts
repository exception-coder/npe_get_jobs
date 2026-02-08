import { IUniverSheetsTableUIConfig } from './controllers/config.schema';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverSheetsTableUIPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private _commandService;
    private readonly _configService;
    private readonly _renderManagerService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsTableUIConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService, _renderManagerService: IRenderManagerService);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
    private _registerRenderModules;
    private _initRegisterCommand;
}
