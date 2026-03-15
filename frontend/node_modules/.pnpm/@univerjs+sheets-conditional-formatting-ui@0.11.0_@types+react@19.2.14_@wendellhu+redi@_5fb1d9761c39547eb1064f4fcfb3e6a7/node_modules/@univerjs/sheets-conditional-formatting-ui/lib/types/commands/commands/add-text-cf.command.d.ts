import { ICommand, IRange } from '@univerjs/core';
import { ITextHighlightCell } from '@univerjs/sheets-conditional-formatting';
interface IAddAverageCfParams {
    ranges: IRange[];
    stopIfTrue?: boolean;
    style: ITextHighlightCell['style'];
    operator: ITextHighlightCell['operator'];
    value: ITextHighlightCell['value'];
}
export declare const AddTextCfCommand: ICommand<IAddAverageCfParams>;
export {};
