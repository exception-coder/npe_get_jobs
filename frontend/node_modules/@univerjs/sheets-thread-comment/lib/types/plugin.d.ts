import { IUniverSheetsThreadCommentConfig } from './controllers/config.schema';
import { ICommandService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsThreadCommentPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    protected _commandService: ICommandService;
    static pluginName: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsThreadCommentConfig> | undefined, _injector: Injector, _commandService: ICommandService);
    onStarting(): void;
}
