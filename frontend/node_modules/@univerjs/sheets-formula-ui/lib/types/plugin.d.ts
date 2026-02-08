import { IUniverSheetsFormulaUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IUIPartsService } from '@univerjs/ui';
/**
 * The configuration of the formula UI plugin.
 */
export declare class UniverSheetsFormulaUIPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _renderManagerService;
    private readonly _configService;
    private readonly _uiPartsService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsFormulaUIConfig> | undefined, _injector: Injector, _renderManagerService: IRenderManagerService, _configService: IConfigService, _uiPartsService: IUIPartsService);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
    onSteady(): void;
    private _initUIPart;
}
