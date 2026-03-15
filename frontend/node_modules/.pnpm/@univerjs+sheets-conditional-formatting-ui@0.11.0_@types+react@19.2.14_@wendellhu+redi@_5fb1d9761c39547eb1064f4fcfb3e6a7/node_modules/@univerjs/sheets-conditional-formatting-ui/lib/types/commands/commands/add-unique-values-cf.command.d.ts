import { ICommand, IRange } from '@univerjs/core';
import { IHighlightCell } from '@univerjs/sheets-conditional-formatting';
interface IAddUniqueValuesConditionalRuleParams {
    ranges: IRange[];
    stopIfTrue?: boolean;
    style: IHighlightCell['style'];
}
export declare const AddUniqueValuesCfCommand: ICommand<IAddUniqueValuesConditionalRuleParams>;
export {};
