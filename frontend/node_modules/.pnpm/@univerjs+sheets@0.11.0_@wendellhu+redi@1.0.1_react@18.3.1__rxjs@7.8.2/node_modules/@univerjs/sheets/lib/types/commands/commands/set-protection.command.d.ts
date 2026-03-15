import { ICommand, IRange } from '@univerjs/core';
import { IRangeProtectionRule } from '../../model/range-protection-rule.model';
import { IWorksheetProtectionRule } from '../../services/permission/type';
type IPermissionRule = (IRangeProtectionRule | IWorksheetProtectionRule) & {
    ranges: IRange[];
    id: string;
};
interface ISetProtectionParams {
    rule: IPermissionRule;
    oldRule: IPermissionRule;
}
export declare const SetProtectionCommand: ICommand<ISetProtectionParams>;
export {};
