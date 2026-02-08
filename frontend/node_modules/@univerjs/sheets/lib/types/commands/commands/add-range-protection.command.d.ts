import { ICommand } from '@univerjs/core';
import { IRangeProtectionRule } from '../../model/range-protection-rule.model';
export interface IAddRangeProtectionCommandParams {
    permissionId: string;
    rule: IRangeProtectionRule;
}
export declare const AddRangeProtectionCommand: ICommand<IAddRangeProtectionCommandParams>;
