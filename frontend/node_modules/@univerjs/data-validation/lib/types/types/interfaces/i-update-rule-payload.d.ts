import { IDataValidationRule, IDataValidationRuleBase, IDataValidationRuleOptions } from '@univerjs/core';
import { UpdateRuleType } from '../enum/update-rule-type';
export interface IUpdateRuleRangePayload {
    type: UpdateRuleType.RANGE;
    payload: any[];
}
export interface IUpdateRuleSettingPayload {
    type: UpdateRuleType.SETTING;
    payload: IDataValidationRuleBase;
}
export interface IUpdateRuleOptionsPayload {
    type: UpdateRuleType.OPTIONS;
    payload: Partial<IDataValidationRuleOptions>;
}
export interface IUpdateRuleAllPayload {
    type: UpdateRuleType.ALL;
    payload: Omit<IDataValidationRule, 'uid'>;
}
export type IUpdateRulePayload = IUpdateRuleRangePayload | IUpdateRuleSettingPayload | IUpdateRuleOptionsPayload | IUpdateRuleAllPayload;
