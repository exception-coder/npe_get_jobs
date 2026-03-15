import { ICommand, IRange } from '@univerjs/core';
import { IDataBar } from '@univerjs/sheets-conditional-formatting';
interface IAddUniqueValuesConditionalRuleParams {
    ranges: IRange[];
    stopIfTrue?: boolean;
    min: IDataBar['config']['min'];
    max: IDataBar['config']['max'];
    nativeColor: IDataBar['config']['nativeColor'];
    positiveColor: IDataBar['config']['positiveColor'];
    isGradient: IDataBar['config']['isGradient'];
    isShowValue: IDataBar['isShowValue'];
}
export declare const AddDataBarConditionalRuleCommand: ICommand<IAddUniqueValuesConditionalRuleParams>;
export {};
