import { IMutation } from '@univerjs/core';
import { IWorksheetProtectionRule } from '../../services/permission/type';
export interface ISetWorksheetProtectionParams {
    unitId: string;
    subUnitId: string;
    rule: IWorksheetProtectionRule;
}
export declare const SetWorksheetProtectionMutation: IMutation<ISetWorksheetProtectionParams>;
