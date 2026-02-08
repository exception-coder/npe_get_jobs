import { IUniverEngineFormulaConfig } from './controller/config.schema';
import { IConfigService, Injector, Plugin } from '@univerjs/core';
export declare class UniverFormulaEnginePlugin extends Plugin {
    protected readonly _config: Partial<IUniverEngineFormulaConfig>;
    protected _injector: Injector;
    protected readonly _configService: IConfigService;
    static pluginName: string;
    constructor(_config: Partial<IUniverEngineFormulaConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
    private _initialize;
    protected _initializeWithOverride(): void;
}
