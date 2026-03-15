import { ICommand, IRange } from '@univerjs/core';
import { IColorScale } from '@univerjs/sheets-conditional-formatting';
interface IAddColorScaleConditionalRuleParams {
    ranges: IRange[];
    stopIfTrue?: boolean;
    config: IColorScale['config'];
}
export declare const AddColorScaleConditionalRuleCommand: ICommand<IAddColorScaleConditionalRuleParams>;
export {};
