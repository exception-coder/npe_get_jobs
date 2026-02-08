import { Disposable, ICommandService, IPermissionService } from '@univerjs/core';
export declare class SheetsPivotPrintController extends Disposable {
    private readonly _permissionService;
    private readonly _commandService;
    constructor(_permissionService: IPermissionService, _commandService: ICommandService);
    private _initPermissionWithPivot;
}
