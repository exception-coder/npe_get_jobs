import { ICommand, IRange } from '@univerjs/core';
import { ITimePeriodHighlightCell } from '@univerjs/sheets-conditional-formatting';
interface IAddTimePeriodCf {
    ranges: IRange[];
    stopIfTrue?: boolean;
    style: ITimePeriodHighlightCell['style'];
    operator: ITimePeriodHighlightCell['operator'];
}
export declare const AddTimePeriodCfCommand: ICommand<IAddTimePeriodCf>;
export {};
