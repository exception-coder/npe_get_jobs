import { Disposable, ICommandService, IConfigService } from '@univerjs/core';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { IFunctionService } from '../services/function.service';
export declare class FormulaController extends Disposable {
    private readonly _commandService;
    private readonly _functionService;
    private readonly _configService;
    private readonly _dataSyncPrimaryController?;
    constructor(_commandService: ICommandService, _functionService: IFunctionService, _configService: IConfigService, _dataSyncPrimaryController?: DataSyncPrimaryController | undefined);
    private _initialize;
    private _registerCommands;
    private _registerFunctions;
}
