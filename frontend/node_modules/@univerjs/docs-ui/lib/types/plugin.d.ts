import { IUniverDocsUIConfig } from './controllers/config.schema';
import { ICommandService, IConfigService, ILogService, Injector, Plugin } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverDocsUIPlugin extends Plugin {
    private readonly _config;
    _injector: Injector;
    private readonly _renderManagerSrv;
    private _commandService;
    private _logService;
    private readonly _configService;
    static pluginName: string;
    constructor(_config: Partial<IUniverDocsUIConfig> | undefined, _injector: Injector, _renderManagerSrv: IRenderManagerService, _commandService: ICommandService, _logService: ILogService, _configService: IConfigService);
    onReady(): void;
    onRendered(): void;
    private _initCommand;
    private _initializeShortcut;
    private _initDependencies;
    private _markDocAsFocused;
    private _initUI;
    private _initRenderBasics;
    private _initRenderModules;
}
