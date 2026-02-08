import { IUniverSheetsSortUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsSortUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static type: UniverInstanceType;
    static pluginName: string;
    constructor(_config: Partial<IUniverSheetsSortUIConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onRendered(): void;
}
