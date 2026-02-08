import { ICommand, IDataValidationRule } from '@univerjs/core';
import { DataValidationChangeSource } from '../../models/data-validation-model';
import { IUpdateRulePayload } from '../../types/interfaces/i-update-rule-payload';
export interface IAddDataValidationMutationParams {
    rule: IDataValidationRule | IDataValidationRule[];
    index?: number;
    source?: DataValidationChangeSource;
    unitId: string;
    subUnitId: string;
}
export declare const AddDataValidationMutation: ICommand<IAddDataValidationMutationParams>;
export interface IRemoveDataValidationMutationParams {
    ruleId: string | string[];
    source?: DataValidationChangeSource;
    unitId: string;
    subUnitId: string;
}
export declare const RemoveDataValidationMutation: ICommand<IRemoveDataValidationMutationParams>;
export interface IUpdateDataValidationMutationParams {
    payload: IUpdateRulePayload;
    ruleId: string;
    source?: DataValidationChangeSource;
    unitId: string;
    subUnitId: string;
}
export declare const UpdateDataValidationMutation: ICommand<IUpdateDataValidationMutationParams>;
