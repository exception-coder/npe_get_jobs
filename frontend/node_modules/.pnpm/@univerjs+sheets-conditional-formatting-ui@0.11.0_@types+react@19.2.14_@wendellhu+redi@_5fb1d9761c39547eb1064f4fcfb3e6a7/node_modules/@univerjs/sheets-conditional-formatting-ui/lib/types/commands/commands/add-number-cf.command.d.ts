import { ICommand, IRange } from '@univerjs/core';
import { INumberHighlightCell } from '@univerjs/sheets-conditional-formatting';
interface IAddNumberCfParams {
    ranges: IRange[];
    stopIfTrue?: boolean;
    style: INumberHighlightCell['style'];
    operator: INumberHighlightCell['operator'];
    value: number | [number, number];
}
export declare const AddNumberCfCommand: ICommand<IAddNumberCfParams>;
export {};
