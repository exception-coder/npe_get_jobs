import { IUniverSheetsUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, IUniverInstanceService, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ComponentManager } from '@univerjs/ui';
export declare class UniverSheetsMobileUIPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _renderManagerService;
    private readonly _configService;
    private readonly _univerInstanceService;
    private readonly _componentManager;
    static pluginName: string;
    static type: UniverInstanceType;
    /** @ignore */
    constructor(_config: Partial<IUniverSheetsUIConfig> | undefined, _injector: Injector, _renderManagerService: IRenderManagerService, _configService: IConfigService, _univerInstanceService: IUniverInstanceService, _componentManager: ComponentManager);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
    onSteady(): void;
    private _registerRenderBasics;
    private _registerRenderModules;
    private _initAutoFocus;
}
