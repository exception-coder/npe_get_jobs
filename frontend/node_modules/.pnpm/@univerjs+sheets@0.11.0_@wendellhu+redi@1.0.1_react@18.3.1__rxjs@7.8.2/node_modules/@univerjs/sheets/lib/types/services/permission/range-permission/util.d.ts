import { UnitAction } from '@univerjs/protocol';
import { RangeProtectionPermissionEditPoint } from '../permission-point/range/edit';
import { RangeProtectionPermissionViewPoint } from '../permission-point/range/view';
export type IRangePermissionPoint = RangeProtectionPermissionEditPoint | RangeProtectionPermissionViewPoint;
export declare const getAllRangePermissionPoint: () => (typeof RangeProtectionPermissionEditPoint)[];
export declare const baseProtectionActions: UnitAction[];
export declare const getDefaultRangePermission: (unitId?: string, subUnitId?: string, permissionId?: string) => Record<UnitAction, boolean>;
