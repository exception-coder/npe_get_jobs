import { IUniverSheetsFindReplaceConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsFindReplacePlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsFindReplaceConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onSteady(): void;
}
