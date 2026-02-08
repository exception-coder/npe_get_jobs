import { IUniverDocsThreadCommentUIConfig } from './controllers/config.schema';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverDocsThreadCommentUIPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _renderManagerSrv;
    private readonly _configService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverDocsThreadCommentUIConfig> | undefined, _injector: Injector, _renderManagerSrv: IRenderManagerService, _configService: IConfigService);
    onStarting(): void;
    onRendered(): void;
    private _initRenderModule;
}
