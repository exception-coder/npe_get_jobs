import { ICommand } from '@univerjs/core';
import { IWorksheetProtectionRule } from '../../services/permission/type';
export interface IAddWorksheetProtectionParams {
    unitId: string;
    rule: IWorksheetProtectionRule;
}
export declare const AddWorksheetProtectionCommand: ICommand<IAddWorksheetProtectionParams>;
