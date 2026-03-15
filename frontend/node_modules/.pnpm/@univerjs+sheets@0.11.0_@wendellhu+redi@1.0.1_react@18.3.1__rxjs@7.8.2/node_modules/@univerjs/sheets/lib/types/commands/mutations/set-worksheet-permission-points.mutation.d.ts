import { IMutation } from '@univerjs/core';
import { IWorksheetProtectionPointRule } from '../../services/permission/type';
export interface ISetWorksheetPermissionPointsMutationParams {
    rule: IWorksheetProtectionPointRule;
    unitId: string;
    subUnitId: string;
}
export declare const SetWorksheetPermissionPointsMutation: IMutation<ISetWorksheetPermissionPointsMutationParams>;
