import { ICommand } from '@univerjs/core';
import { IConditionFormattingRule } from '../../models/type';
import { MakePropertyOptional } from '../../utils/type';
export interface IAddCfCommandParams {
    unitId?: string;
    subUnitId?: string;
    rule: MakePropertyOptional<IConditionFormattingRule, 'cfId'>;
}
export declare const AddCfCommand: ICommand<IAddCfCommandParams>;
