import { ICommand } from '@univerjs/core';
import { IRangeProtectionRule } from '../../model/range-protection-rule.model';
export interface IDeleteRangeProtectionCommandParams {
    unitId: string;
    subUnitId: string;
    rule: IRangeProtectionRule;
}
export declare const DeleteRangeProtectionCommand: ICommand<IDeleteRangeProtectionCommandParams>;
