import { IUniverUIConfig } from './controllers/config.schema';
import { IConfigService, IContextService, Injector, Plugin } from '@univerjs/core';
export declare const UNIVER_UI_PLUGIN_NAME = "UNIVER_UI_PLUGIN";
export declare const DISABLE_AUTO_FOCUS_KEY = "DISABLE_AUTO_FOCUS";
/**
 * UI plugin provides basic interaction with users. Including workbench (menus, UI parts, notifications etc.), copy paste, shortcut.
 */
export declare class UniverUIPlugin extends Plugin {
    private readonly _config;
    private readonly _contextService;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    constructor(_config: Partial<IUniverUIConfig> | undefined, _contextService: IContextService, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
    onSteady(): void;
}
