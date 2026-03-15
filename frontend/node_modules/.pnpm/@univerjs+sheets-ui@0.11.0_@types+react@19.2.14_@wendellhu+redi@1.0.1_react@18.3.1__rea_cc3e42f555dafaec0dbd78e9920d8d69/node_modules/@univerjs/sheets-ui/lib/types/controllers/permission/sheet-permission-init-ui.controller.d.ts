import { Disposable } from '@univerjs/core';
import { SheetPermissionInitController } from '@univerjs/sheets';
export declare class SheetPermissionInitUIController extends Disposable {
    private readonly _sheetPermissionInitController;
    constructor(_sheetPermissionInitController: SheetPermissionInitController);
    private _initPermission;
}
