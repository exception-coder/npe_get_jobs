import { ICommand } from '@univerjs/core';
import { IWorksheetProtectionRule } from '../../services/permission/type';
export interface ISetWorksheetProtectionParams {
    permissionId: string;
    rule: IWorksheetProtectionRule;
    oldRule: IWorksheetProtectionRule;
}
export declare const SetWorksheetProtectionCommand: ICommand<ISetWorksheetProtectionParams>;
