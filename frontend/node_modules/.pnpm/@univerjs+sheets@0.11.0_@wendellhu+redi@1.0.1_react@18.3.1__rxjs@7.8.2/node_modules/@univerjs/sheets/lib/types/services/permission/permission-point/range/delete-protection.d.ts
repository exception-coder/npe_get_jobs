import { IPermissionPoint, PermissionStatus } from '@univerjs/core';
import { UnitAction, UnitObject } from '@univerjs/protocol';
export declare class RangeProtectionPermissionDeleteProtectionPoint implements IPermissionPoint {
    type: UnitObject;
    subType: UnitAction;
    status: PermissionStatus;
    value: boolean;
    id: string;
    unitId: string;
    subUnitId: string;
    permissionId: string;
    constructor(unitId: string, subUnitId: string, permissionId: string);
}
