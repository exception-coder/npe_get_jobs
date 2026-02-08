import { ICommand } from '@univerjs/core';
import { IWorksheetProtectionRule } from '../../services/permission/type';
export interface IDeleteWorksheetProtectionParams {
    unitId: string;
    subUnitId: string;
    rule: IWorksheetProtectionRule;
}
export declare const DeleteWorksheetProtectionCommand: ICommand<IDeleteWorksheetProtectionParams>;
