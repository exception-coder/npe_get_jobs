import { Disposable, ICommandService } from '@univerjs/core';
import { ISuperTableService } from '../services/super-table.service';
export declare class SetSuperTableController extends Disposable {
    private readonly _commandService;
    private readonly _superTableService;
    constructor(_commandService: ICommandService, _superTableService: ISuperTableService);
    private _initialize;
    private _commandExecutedListener;
}
