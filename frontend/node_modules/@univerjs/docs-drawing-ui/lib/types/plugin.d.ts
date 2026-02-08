import { IUniverDocsDrawingUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverDocsDrawingUIPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _renderManagerSrv;
    private readonly _configService;
    static type: UniverInstanceType;
    static pluginName: string;
    constructor(_config: Partial<IUniverDocsDrawingUIConfig> | undefined, _injector: Injector, _renderManagerSrv: IRenderManagerService, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
}
