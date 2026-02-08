import { IUniverEngineRenderConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin } from '@univerjs/core';
import { Engine } from './engine';
/**
 * The global rendering engine.
 *
 * @deprecated There will be no more default global render engine in the future.
 */
export declare const IRenderingEngine: import('@wendellhu/redi').IdentifierDecorator<Engine>;
export declare class UniverRenderEnginePlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    constructor(_config: Partial<IUniverEngineRenderConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
