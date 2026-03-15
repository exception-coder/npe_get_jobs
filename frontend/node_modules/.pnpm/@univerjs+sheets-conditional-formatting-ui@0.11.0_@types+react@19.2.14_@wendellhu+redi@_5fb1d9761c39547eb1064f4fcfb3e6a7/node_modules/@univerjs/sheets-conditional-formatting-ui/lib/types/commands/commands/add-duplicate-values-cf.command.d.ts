import { ICommand, IRange } from '@univerjs/core';
import { IHighlightCell } from '@univerjs/sheets-conditional-formatting';
interface IAddDuplicateValuesConditionalRuleParams {
    ranges: IRange[];
    stopIfTrue?: boolean;
    style: IHighlightCell['style'];
}
export declare const AddDuplicateValuesCfCommand: ICommand<IAddDuplicateValuesConditionalRuleParams>;
export {};
