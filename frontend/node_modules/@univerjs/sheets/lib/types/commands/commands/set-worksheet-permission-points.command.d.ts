import { ICommand } from '@univerjs/core';
import { IWorksheetProtectionPointRule } from '../../services/permission/type';
export interface ISetWorksheetPermissionPointsCommandParams {
    rule: IWorksheetProtectionPointRule;
}
export declare const SetWorksheetPermissionPointsCommand: ICommand<ISetWorksheetPermissionPointsCommandParams>;
