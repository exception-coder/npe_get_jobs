import { UnitAction } from '@univerjs/protocol';
import { WorksheetCopyPermission, WorksheetDeleteProtectionPermission } from '../permission-point';
export declare const getAllWorksheetPermissionPoint: () => (typeof WorksheetDeleteProtectionPermission)[];
export declare const getAllWorksheetPermissionPointByPointPanel: () => (typeof WorksheetCopyPermission)[];
export declare const defaultWorksheetPermissionPoint: UnitAction[];
