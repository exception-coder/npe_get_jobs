import { IPermissionPoint, PermissionStatus } from '@univerjs/core';
import { UnitAction, UnitObject } from '@univerjs/protocol';
export declare class WorkbookExportPermission implements IPermissionPoint {
    unitId: string;
    id: string;
    value: boolean;
    type: UnitObject;
    status: PermissionStatus;
    subType: UnitAction;
    constructor(unitId: string);
}
