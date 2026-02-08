import { IPermissionPoint, PermissionStatus } from '@univerjs/core';
import { UnitAction, UnitObject } from '@univerjs/protocol';
export declare class WorkbookInsertRowPermission implements IPermissionPoint {
    unitId: string;
    value: boolean;
    type: UnitObject;
    status: PermissionStatus;
    id: string;
    subType: UnitAction;
    constructor(unitId: string);
}
