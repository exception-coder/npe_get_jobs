import { IDisposable, IStyleData, Disposable, ICommandService, IConfigService } from '@univerjs/core';
import { DataSyncPrimaryController } from '@univerjs/rpc';
export interface IStyleTypeValue<T> {
    type: keyof IStyleData;
    value: T | T[][];
}
/**
 * The controller to provide the most basic sheet CRUD methods to other modules of sheet modules.
 */
export declare class BasicWorksheetController extends Disposable implements IDisposable {
    private readonly _commandService;
    private readonly _configService;
    private readonly _dataSyncPrimaryController?;
    constructor(_commandService: ICommandService, _configService: IConfigService, _dataSyncPrimaryController?: DataSyncPrimaryController | undefined);
}
