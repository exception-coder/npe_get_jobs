import { IPermissionPoint, PermissionStatus } from '@univerjs/core';
import { UnitAction, UnitObject } from '@univerjs/protocol';
export declare class WorksheetPivotTablePermission implements IPermissionPoint {
    unitId: string;
    subUnitId: string;
    value: boolean;
    type: UnitObject;
    status: PermissionStatus;
    id: string;
    subType: UnitAction;
    constructor(unitId: string, subUnitId: string);
}
