import { IUniverDocsHyperLinkUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverDocsHyperLinkUIPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _renderManagerSrv;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverDocsHyperLinkUIConfig> | undefined, _injector: Injector, _renderManagerSrv: IRenderManagerService, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
    private _initRenderModule;
}
