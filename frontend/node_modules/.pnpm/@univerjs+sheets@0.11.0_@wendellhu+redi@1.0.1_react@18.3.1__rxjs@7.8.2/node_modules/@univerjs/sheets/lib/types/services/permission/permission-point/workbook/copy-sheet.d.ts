import { IPermissionPoint, PermissionStatus } from '@univerjs/core';
import { UnitAction, UnitObject } from '@univerjs/protocol';
export declare class WorkbookCopySheetPermission implements IPermissionPoint {
    unitId: string;
    id: string;
    value: boolean;
    type: UnitObject;
    subType: UnitAction;
    status: PermissionStatus;
    constructor(unitId: string);
}
