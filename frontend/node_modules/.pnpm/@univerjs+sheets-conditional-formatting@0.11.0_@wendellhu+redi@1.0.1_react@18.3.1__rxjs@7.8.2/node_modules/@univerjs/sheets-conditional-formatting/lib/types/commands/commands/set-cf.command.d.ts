import { ICommand } from '@univerjs/core';
import { IConditionFormattingRule } from '../../models/type';
export interface ISetCfCommandParams {
    unitId?: string;
    subUnitId?: string;
    cfId?: string;
    rule: IConditionFormattingRule;
}
export declare const SetCfCommand: ICommand<ISetCfCommandParams>;
