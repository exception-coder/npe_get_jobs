import { IMutation } from '@univerjs/core';
import { IWorksheetProtectionRule } from '../../services/permission/type';
export interface IAddWorksheetProtectionParams {
    unitId: string;
    subUnitId: string;
    rule: IWorksheetProtectionRule;
}
export declare const AddWorksheetProtectionMutation: IMutation<IAddWorksheetProtectionParams>;
