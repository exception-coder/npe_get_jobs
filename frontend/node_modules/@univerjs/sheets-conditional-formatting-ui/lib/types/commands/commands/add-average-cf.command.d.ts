import { ICommand, IRange } from '@univerjs/core';
import { IAverageHighlightCell } from '@univerjs/sheets-conditional-formatting';
interface IAddAverageCfParams {
    ranges: IRange[];
    stopIfTrue?: boolean;
    style: IAverageHighlightCell['style'];
    operator: IAverageHighlightCell['operator'];
}
export declare const AddAverageCfCommand: ICommand<IAddAverageCfParams>;
export {};
