import { IUniverDocsDrawingConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverDocsDrawingPlugin extends Plugin {
    private readonly _config;
    _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverDocsDrawingConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
